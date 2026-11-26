/* Explain the same completion rules used by the next-page gate, without giving answers. */
function pageHelpTasks(){
 if(!state||state.done||state.stage!=='story')return [];
 const section=LEVELS[state.level].sections[state.p],answers=state.answers[state.p]||{};
 return allSectionGroups().map(group=>{
  let title,viewName,items;
  if(group==='questions'){
   title=extraSectionNumber(group)+'. Questions';viewName='story';items=section.mc.map((q,i)=>({key:'m'+i,label:'Question '+(i+1),valid:answers['m'+i]!==''&&answers['m'+i]!==undefined&&Number.isInteger(Number(answers['m'+i]))&&q.choices[Number(answers['m'+i])]!==undefined}));
  }else if(group==='language'){
   title=extraSectionNumber(group)+'. Sentences';viewName='sentences';items=[...section.cloze.blanks.map((b,i)=>({key:b.id,label:'Sentence '+(i+1),valid:!!clozeChoice(section,answers[b.id])})),...section.match.rows.map((r,i)=>({key:'t'+i,label:'Sentence '+(section.cloze.blanks.length+i+1),valid:section.match.options.includes(answers['t'+i])}))];
  }else if(group==='pictures'){
   title=extraSectionNumber(group)+'. Picture matching';viewName='matching';const task=pictureTask();items=task.order.map((n,i)=>{const r=task.split?picturePartResponse(task,answers,n):null;return {key:'v'+n,label:'Picture '+(i+1)+(r&&!r.complete?' · '+(2-Number(!!r.left)-Number(!!r.right))+' word part(s) left':''),valid:r?r.complete:task.words.includes(answers['v'+n])};});
  }else{
   const task=extraTasksAt()[group];title=extraSectionNumber(group)+'. '+task.label;if(['glossary','listenSentences','listenFill'].includes(group))title='2'+({glossary:'a',listenSentences:'b',listenFill:'c'}[group])+'. '+task.label;viewName=group;items=group==='characters'?task.items.map((q,i)=>({key:'n'+i,label:q.name,valid:true})):['listenSentences','listenFill'].includes(group)?task.items.map((q,i)=>({key:task.prefix+i,label:'Sentence '+(i+1)+(introHeard(group,i)?group==='listenFill'&&!task.items.some(w=>w.word===answers['j'+i])?' · add a word':'':' · listen to the end'),valid:introHeard(group,i)>0&&(group==='listenSentences'||task.items.some(w=>w.word===answers['j'+i]))})):group==='glossary'?glossaryHelpItems():group==='spelling'?spellingHelpItems():task.items.map((q,i)=>({key:task.prefix+i,label:(q.picture?'Picture ':'Item ')+(i+1),valid:answers[task.prefix+i]!==''&&answers[task.prefix+i]!==undefined&&q.choices[Number(answers[task.prefix+i])]!==undefined}));
  }
  const missing=items.filter(item=>!item.valid),complete=groupComplete(group,section,answers),locked=taskLock(group);
  return {group,title,view:viewName,items,missing,complete,locked,finished:locked&&complete};
 }).filter(task=>!introGateGroup()||task.group===introGateGroup());
}
function remainingPageMessage(tasks=pageHelpTasks()){
 const unfinished=tasks.filter(t=>!t.finished);
 if(!unfinished.length)return 'Ready! Tap Next page.';
 if(tasks.every(t=>t.complete))return 'Answers done! Save & lock '+unfinished.length+' '+(unfinished.length===1?'section.':'sections.');
 return unfinished.length+' '+(unfinished.length===1?'section':'sections')+' to finish. Tap “What’s left?”';
}
const gateBeforePageHelp=updateReadingGate;
updateReadingGate=function(){
 gateBeforePageHelp();if(!state||state.done||state.stage!=='story')return;
 const tasks=pageHelpTasks(),ready=tasks.every(t=>t.finished),next=$('nextBtn');
 if(next){next.hidden=false;next.dataset.ready=String(ready);next.setAttribute('aria-describedby','answerStatus');next.title=ready?'Go to the next page':'See what you still need to do';}
 if($('answerStatus'))$('answerStatus').textContent=remainingPageMessage(tasks);
};
const requestBeforePageHelp=requestNext;
requestNext=function(){
 if(state&&!state.done){commitVisibleAnswers();if(syncLatest())return;
  if(state.stage==='story'&&!readingReady(LEVELS[state.level].sections[state.p],state.answers[state.p]||{})||state.stage==='bike'&&!bikeComplete()){showPageHelp();return;}
 }
 requestBeforePageHelp();
};
let pageHelpScope='',pageHelpReturnFocus=null;
function currentHelpScope(){return state?state.startT+'|'+state.stage+'|'+state.p+'|'+state.done:'start';}
function ensurePageHelpDialog(){
 if($('pageHelpDialog'))return $('pageHelpDialog');
 const dialog=document.createElement('dialog');dialog.id='pageHelpDialog';dialog.className='page-help-dialog';dialog.setAttribute('aria-labelledby','pageHelpTitle');document.body.append(dialog);
 dialog.addEventListener('close',()=>{if(pageHelpReturnFocus?.isConnected)pageHelpReturnFocus.focus({preventScroll:true});});return dialog;
}
function taskHelpText(task){
 if(task.group==='glossary'&&!task.complete)return (30-glossaryTask().items.reduce((n,q,i)=>n+glossaryCount(i),0))+' listens left · '+task.missing[0].label+'.';
 if(task.finished)return 'Saved and locked. Well done!';
 if(task.complete)return 'Answers done. Press Save & lock.';
 const count=task.missing.length,first=task.missing[0];
 return (count===1?'1 answer left':count+' answers left')+(first?' · '+first.label:'')+'.';
}
function refreshPageHelp(){
 const dialog=ensurePageHelpDialog();let body='',summary='',action='Keep working';
 if(!state){summary='Choose your level and picture ID. Then press Begin the adventure.';}
 else if(state.done){summary='You finished every page! Tell your teacher you are done.';action='All done';}
 else if(state.stage==='bike'){
  const parts=bikeParts(state.level),missing=parts.map((part,i)=>({key:'b'+i,number:i+1})).filter(item=>!parts.some(part=>part.key===state.bikeAnswers?.[item.key]));
  summary=missing.length?'Drag a name onto each empty numbered pad.':'All labels are placed! Press Lock and save to finish.';
  body='<div class="page-help-diagram" role="status">'+(missing.length?'Pads left: '+missing.map(item=>item.number).join(', '):'All '+parts.length+' pads are filled.')+'</div>';action=missing.length?'Go to an empty pad':'Lock and save';
 }else{
  const tasks=pageHelpTasks();summary=remainingPageMessage(tasks);
  body='<div class="page-help-list">'+tasks.map(task=>'<div class="page-help-row '+(task.finished?'is-finished':'')+'" data-help-row="'+task.group+'"><span class="page-help-check" aria-hidden="true">'+(task.finished?'✓':'○')+'</span><div><h3>'+escapeHTML(task.title)+'</h3><p>'+escapeHTML(taskHelpText(task))+'</p></div>'+(task.finished?'<span class="page-help-saved">Saved ✓</span>':'<button type="button" data-help-'+(task.complete?'save':'go')+'="'+task.group+'">'+(task.complete?'Save & lock':'Open section')+'</button>')+'</div>').join('')+'</div>';
  action=tasks.every(task=>task.finished)?(state.p===storyCount(state.level)-1?'Open final notebook →':'Next page →'):'Go to my next task';
 }
 dialog.innerHTML='<h2 id="pageHelpTitle">What’s left?</h2><p class="page-help-summary" role="status">'+escapeHTML(summary)+'</p>'+body+'<div class="page-help-actions"><button type="button" data-help-close>Close</button><button type="button" class="primary" data-help-continue>'+action+'</button></div>';
 dialog.querySelector('[data-help-close]').onclick=()=>dialog.close();
 dialog.querySelectorAll('[data-help-go]').forEach(button=>button.onclick=()=>openRemainingTask(button.dataset.helpGo));
 dialog.querySelectorAll('[data-help-save]').forEach(button=>button.onclick=()=>{const group=button.dataset.helpSave;commitVisibleAnswers();saveTestSection(group);if(dialog.open){refreshPageHelp();dialog.querySelector('[data-help-continue]').focus({preventScroll:true});}});
 dialog.querySelector('[data-help-continue]').onclick=()=>{
  if(!state){dialog.close();$('studentId')?.focus();return;}if(state.done){dialog.close();return;}
  if(state.stage==='bike'){if(bikeComplete()){dialog.close();requestNext();}else{const parts=bikeParts(state.level),i=parts.findIndex((_,i)=>!parts.some(part=>part.key===state.bikeAnswers?.['b'+i]));dialog.close();document.querySelector('[data-bike-pad="b'+i+'"]')?.focus({preventScroll:true});}return;}
  const remaining=pageHelpTasks().find(task=>!task.finished);if(remaining)openRemainingTask(remaining.group);else{dialog.close();requestNext();}
 };
}
function showPageHelp(){
 stopNarration();commitVisibleAnswers();syncLatest();pageHelpReturnFocus=document.activeElement;pageHelpScope=currentHelpScope();refreshPageHelp();const dialog=$('pageHelpDialog');if(!dialog.open)dialog.showModal();
}
function openRemainingTask(group){
 const task=pageHelpTasks().find(t=>t.group===group);if(!task)return;
 if(task.locked&&!task.complete){reopenIncompleteSection(group);}
 $('pageHelpDialog').close();view=task.view;
 if(task.group==='questions'&&task.missing.length){state.questionView||={};state.questionView[state.p]=Number(task.missing[0].key.slice(1));}
 const missingIndex=Math.max(0,task.items.findIndex(item=>item.key===task.missing[0]?.key));
 if(task.group==='language'){state.sentenceCursor||={};state.sentenceCursor[state.p]=missingIndex;}
 if(task.group==='pictures'){state.pictureCursor||={};state.pictureCursor[state.p]=missingIndex;}
 if(task.group==='spelling'){state.spellingCursor||={};state.spellingCursor[state.p]=missingIndex;}
 if(extraTasksAt()[group]){state.extraCursor||={};state.extraCursor[state.p]||={};state.extraCursor[state.p][group]=missingIndex;}
 render();
 const key=task.missing[0]?.key,selector=task.complete?'[data-save-section="'+group+'"]':group==='glossary'?'[data-hear-glossary="'+key+'"]':['listenSentences','listenFill'].includes(group)?(introHeard(group,Number(key.slice(1)))&&group==='listenFill'?'[data-listen-pad="'+key+'"]':'[data-intro-audio="'+group+'"][data-audio-index="'+Number(key.slice(1))+'"]'):group==='questions'?'[data-tick-key="'+key+'"]':group==='language'?'[data-sentence="'+key+'"],[data-idea="'+key+'"]':group==='pictures'?'[data-picture-pad="'+key+'"]':group==='spelling'?'[data-spelling-slot^="'+key+'l"]:not(.has-part),[data-spelling-slot^="'+key+'l"]':'[data-extra-answer="'+key+'"]';
 let target=document.querySelector(selector);
 for(let step=0;target&&!target.getClientRects().length&&step<30;step++){
  const next=document.querySelector(group==='language'?'[data-sentence-step="1"]':group==='pictures'?'[data-picture-step="1"]':'[data-extra-step="1"]');if(!next||next.disabled)break;next.click();target=document.querySelector(selector);
 }
 target?.focus({preventScroll:true});target?.classList.add('page-help-target');setTimeout(()=>target?.classList.remove('page-help-target'),1800);
}
function mountPageHelp(){
 let button=$('pageHelpBtn');
 if(!button){
  const foot=document.querySelector('.test-page-foot');
  if(foot){const actions=document.createElement('div');actions.className='test-page-actions';button=document.createElement('button');button.type='button';button.id='pageHelpBtn';button.className='page-help-button';button.textContent='What’s left?';const next=$('nextBtn'),nextControl=next.closest('.ready-save')||next;foot.append(actions);actions.append(button,nextControl);}
 }
 if(!button){
  const host=document.querySelector('.bike-heading,.camp-landing .cover,.completion .receipt');if(!host)return;
  button=document.createElement('button');button.type='button';button.id='pageHelpBtn';button.className='page-help-button';button.textContent='What’s left?';host.classList.add('has-page-help');host.append(button);
 }
 button.onclick=showPageHelp;
 const finish=$('finishBike');if(finish){finish.hidden=false;finish.dataset.ready=String(bikeComplete());finish.title=bikeComplete()?'Finish and save your assessment':'See which pads still need a label';enhanceDragLayout();}
 const dialog=$('pageHelpDialog');if(dialog?.open){if(pageHelpScope===currentHelpScope())refreshPageHelp();else dialog.close();}
}
const renderBeforePageHelp=render;render=function(){renderBeforePageHelp();mountPageHelp();};
const bikeBeforePageHelp=renderBike;renderBike=function(){bikeBeforePageHelp();mountPageHelp();};
const landingBeforePageHelp=landing;landing=function(){landingBeforePageHelp();mountPageHelp();};
mountPageHelp();
