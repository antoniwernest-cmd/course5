/* Variable-length books and a non-destructive migration of the original four P pages. */
function attemptKey(level,id){return CAT_NAME+'_'+level+(CAT_NAME.includes('obstacle-course')&&['N','P'].includes(level)?'_sunny_start_20261125':['M','N','P'].includes(level)?'_abridged_20261125':level==='E'?'_cvc':'')+'_'+id;}
function migratePAttempt(value){
 if(value.level!=='P'||value.contentPages===10)return value;
 const anchors=[0,3,6,9],remap=source=>Object.fromEntries(Object.entries(source||{}).filter(([key])=>anchors[Number(key)]!==undefined).map(([key,item])=>[anchors[Number(key)],item]));
 value.answers=remap(value.answers);value.readParts=remap(value.readParts);value.readingVisits=remap(value.readingVisits);value.questionView=remap(value.questionView);value.matchView=remap(value.matchView);
 const times=Array(10).fill(0);(value.pageTimes||[]).forEach((time,i)=>{if(anchors[i]!==undefined)times[anchors[i]]=time||0;});value.pageTimes=times;
 value.locked=(value.locked||[]).map(lock=>({...lock,section:lock.kind==='bike'?11:anchors[lock.section-1]+1}));
 value.events=(value.events||[]).map(event=>({...event,section:event.section===5?11:event.section>=1&&event.section<=4?anchors[event.section-1]+1:event.section}));
 if(value.done)value.previousCompletion={at:value.submittedAt,pages:4};
 value.done=false;value.submittedAt=null;value.stage='story';value.p=Array.from({length:10},(_,i)=>i).find(i=>!value.locked.some(lock=>lock.kind==='story'&&lock.section===i+1))??0;
 value.contentPages=10;value.contentVersion=2;
 value.events.push({action:'expanded_story_migration',detail:'Preserved the original four P pages and picture notebook; six new reading pages added.',section:value.p+1,time:now()});
 return value;
}
function readStoredAttempt(level,id){
 try{
  const raw=attemptStorage.getItem(attemptKey(level,id));
  const value=JSON.parse(raw||'null');if(value?.version!==1)return null;
  // Saved activities keep their item IDs, choices and responses when wording is simplified.
  for(const tasks of Object.values(value.extraTasks||{}))for(const task of Object.values(tasks))for(const item of task.items||[])if(typeof item.prompt==='string')item.prompt=item.prompt.replace(/\bcontrasting\b/g,'different').replace(/\bContrasting\b/g,'Different');
  if(level==='N'&&window.SIMPLE_N_REPLACEMENTS){const simplify=x=>{if(typeof x==='string')return window.SIMPLE_N_REPLACEMENTS.reduce((s,[a,b])=>s.replaceAll(a,b),x);if(x&&typeof x==='object')for(const k of Object.keys(x))x[k]=simplify(x[k]);return x;};simplify(value.answers);simplify(value.answerEdits);simplify(value.extraTasks);}
  if(value.done&&!value.diagramLabelCount)value.diagramLabelCount={E:3,F:4,G:4,L:6,M:6,N:7,P:8,R:8}[value.level];
  for(const answers of Object.values(value.answers||{}))for(const[key,response]of Object.entries(answers))if(typeof response==='string')answers[key]=response.replace(/\btyres?\b/gi,word=>word.replace(/[yY]/g,letter=>letter==='Y'?'I':'i'));
  return migratePAttempt(value);
 }catch{return null;}
}
function advanceStoryPage(){
 if(syncLatest()){$('lockDialog').close();return;}if(!guardAdvance()){$('lockDialog').close();return;}
 savePage();const kind=state.stage,section=state.p+1;
 if(!state.locked.some(lock=>lock.kind===kind&&lock.section===section))state.locked.push({kind,section,at:now()});navpush('page_locked');
 if(kind==='bike'){state.diagramLabelCount=bikeParts(state.level).length;state.done=true;state.submittedAt=now();pageStart=null;}
 else{
  const pending=Array.from({length:storyCount(state.level)},(_,i)=>i).find(i=>!state.locked.some(lock=>lock.kind==='story'&&lock.section===i+1));
  if(pending!==undefined){state.p=pending;state.stage='story';pageStart=Date.now();}
  else{
   state.p=storyCount(state.level);state.stage='bike';pageStart=Date.now();
   if(state.locked.some(lock=>lock.kind==='bike')&&bikeComplete()){state.done=true;state.submittedAt=now();pageStart=null;}
  }
 }
 view='story';store();$('lockDialog').close();render();$('sectionTitle')?.focus();
}
