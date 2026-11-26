/* Merge field edits so an older open copy cannot erase more recent answers. */
let answerEditClock=0;
function noteAnswerEdit(key,value,p=state.p){
 if(!state)return;state.answerEdits||={};state.answerEdits[p]||={};
 answerEditClock=Math.max(Date.now()*1000,answerEditClock+1,(state.answerEdits[p][key]?.at||0)+1);
 state.answerEdits[p][key]={at:answerEditClock,value:value===''||value===undefined?null:value};
}
function noteBikeEdit(key,value){
 if(!state)return;state.bikeEdits||={};
 answerEditClock=Math.max(Date.now()*1000,answerEditClock+1,(state.bikeEdits[key]?.at||0)+1);
 state.bikeEdits[key]={at:answerEditClock,value:value===undefined?null:value};
}
function nextLockRevision(){answerEditClock=Math.max(Date.now()*1000,answerEditClock+1,...Object.values(state.sectionLockResets||{}).flatMap(groups=>Object.values(groups).map(value=>value+1)));return answerEditClock;}
function reopenIncompleteSection(group){
 if(!state||state.done||state.stage!=='story')return;
 const section=LEVELS[state.level].sections[state.p],answers=state.answers[state.p]||{};if(groupComplete(group,section,answers))return;
 state.sectionLockResets||={};state.sectionLockResets[state.p]||={};state.sectionLockResets[state.p][group]=nextLockRevision();
 if(state.sectionLocks?.[state.p])delete state.sectionLocks[state.p][group];navpush('incomplete_section_reopened',group);
}
function mergeSavedResponses(current,saved){
 current.answers||={};current.answerEdits||={};
 for(const p of new Set([...Object.keys(saved.answers||{}),...Object.keys(current.answers),...Object.keys(saved.answerEdits||{})])){
  const local=current.answers[p]||{},remote=saved.answers?.[p]||{},le=current.answerEdits[p]||{},re=saved.answerEdits?.[p]||{},answers={},edits={};
  for(const key of new Set([...Object.keys(local),...Object.keys(remote),...Object.keys(le),...Object.keys(re)])){
   const edit=re[key]&&(!le[key]||re[key].at>le[key].at)?re[key]:le[key];
   if(edit){edits[key]=edit;if(edit.value!==null)answers[key]=edit.value;}
   else if(Object.hasOwn(local,key))answers[key]=local[key];else if(Object.hasOwn(remote,key))answers[key]=remote[key];
  }
  current.answers[p]=answers;current.answerEdits[p]=edits;
 }
 current.sectionLocks||={};for(const[p,groups]of Object.entries(saved.sectionLocks||{})){current.sectionLocks[p]||={};for(const[group,lock]of Object.entries(groups)){const local=current.sectionLocks[p][group];if(!local||(lock.revision||Date.parse(lock.at)*1000||0)>(local.revision||Date.parse(local.at)*1000||0))current.sectionLocks[p][group]=lock;}}
 current.sectionLockResets||={};for(const[p,groups]of Object.entries(saved.sectionLockResets||{})){current.sectionLockResets[p]||={};for(const[group,revision]of Object.entries(groups))current.sectionLockResets[p][group]=Math.max(revision,current.sectionLockResets[p][group]||0);}
 for(const[p,groups]of Object.entries(current.sectionLockResets))for(const[group,revision]of Object.entries(groups)){const lock=current.sectionLocks[p]?.[group];if(lock&&(lock.revision||Date.parse(lock.at)*1000||0)<=revision)delete current.sectionLocks[p][group];}
 current.illustrationLocks={...saved.illustrationLocks,...current.illustrationLocks};
 current.bikeAnswers||={};current.bikeEdits||={};
 for(const key of new Set([...Object.keys(saved.bikeAnswers||{}),...Object.keys(current.bikeAnswers),...Object.keys(saved.bikeEdits||{}),...Object.keys(current.bikeEdits)])){
  const local=current.bikeEdits[key],remote=saved.bikeEdits?.[key],edit=remote&&(!local||remote.at>local.at)?remote:local;
  if(edit){current.bikeEdits[key]=edit;if(edit.value===null)delete current.bikeAnswers[key];else current.bikeAnswers[key]=edit.value;}
  else if(!Object.hasOwn(current.bikeAnswers,key)&&Object.hasOwn(saved.bikeAnswers||{},key))current.bikeAnswers[key]=saved.bikeAnswers[key];
 }
 current.pictureTasks||={};for(const[p,task]of Object.entries(saved.pictureTasks||{}))if(!current.pictureTasks[p]||(current.pictureTasks[p].version||0)<=(task.version||0))current.pictureTasks[p]=task;
 current.extraTasks||={};for(const[p,tasks]of Object.entries(saved.extraTasks||{})){current.extraTasks[p]||={};for(const[group,task]of Object.entries(tasks))if(!current.extraTasks[p][group]||(current.extraTasks[p][group].version||0)<=(task.version||0))current.extraTasks[p][group]=task;}
 const locks=new Map([...(saved.locked||[]),...(current.locked||[])].map(lock=>[lock.kind+'|'+lock.section,lock]));current.locked=[...locks.values()];
 const events=new Map([...(saved.events||[]),...(current.events||[])].map(e=>[e.time+'|'+e.action+'|'+e.section+'|'+e.detail,e]));current.events=[...events.values()].sort((a,b)=>a.time.localeCompare(b.time));
}
store=function(){
 if(!state){updateStorageNotice();return;}
 const saved=load(state.level,state.sid);
 if(saved&&saved.startT!==state.startT&&String(saved.startT)>String(state.startT))return;
 if(saved&&saved.startT===state.startT)mergeSavedResponses(state,saved);
 const value=structuredClone(state);
 if(saved&&saved.startT===state.startT&&(saved.p>value.p||saved.done&&!value.done)){value.p=saved.p;value.stage=saved.stage;value.done=saved.done;value.submittedAt=saved.submittedAt;}
 value.savedAt=now();attemptStorage.setItem(storageKey(),JSON.stringify(value));updateStorageNotice();
};
syncLatest=function(){
 if(!state)return false;const latest=load(state.level,state.sid);if(!latest)return false;
 if(latest.startT!==state.startT||latest.p>state.p||latest.done&&!state.done){state=latest;pageStart=state.done?null:Date.now();render();return true;}
 const before=JSON.stringify([state.answers,state.sectionLocks,state.bikeAnswers,state.illustrationLocks]);mergeSavedResponses(state,latest);
 if(before!==JSON.stringify([state.answers,state.sectionLocks,state.bikeAnswers,state.illustrationLocks]))render();return false;
};
function commitVisibleAnswers(){
 if(!state||state.done||state.stage!=='story')return;
 if(syncLatest())return;
 const answers=state.answers[state.p]||={};
 document.querySelectorAll('[data-tick-key]:checked,[data-sentence],[data-idea],[data-extra-answer]').forEach(field=>{
  if(field.disabled||field.value==='')return;const key=field.dataset.tickKey||field.dataset.sentence||field.dataset.idea||field.dataset.extraAnswer;
  if(key&&answers[key]!==field.value){answers[key]=field.value;noteAnswerEdit(key,field.value);}
 });store();
}
