/* A visible way out, with an explicit route back to the same saved assessment. */
(()=>{
 const resumeKey='adventureReadingResume',kind='adventure-reading-resume-v1',slugs=['obstacle-course'];
 const valid=value=>value&&value.kind===kind&&slugs.includes(value.slug)&&['E','F','G','L','M','N','P','R'].includes(value.level)&&typeof value.sid==='string'&&/^[A-Za-z-]+$/.test(value.sid);
 function readResume(){let value;try{value=JSON.parse(sessionStorage.getItem(resumeKey)||'null');}catch{}if(!valid(value))try{value=JSON.parse(window.name||'null');}catch{}return valid(value)?value:null;}
 function mountMenuResume(){
  if(document.body.dataset.readingMenu!=='true')return;const saved=readResume();if(!saved)return;
  const link=document.createElement('a');link.className='reading-menu-resume';link.id='resumeAssessment';link.href=saved.slug+'/index.html?level='+saved.level+'&studentId='+encodeURIComponent(saved.sid)+'&begin=1';link.textContent=saved.done?'Open saved assessment':'Continue reading';link.title=saved.slug.replaceAll('-',' ')+' - Level '+saved.level+' - '+saved.sid.replaceAll('-',' ');document.querySelector('header').insertBefore(link,document.querySelector('header>a'));
 }
 if(typeof state==='undefined'||typeof store!=='function'){mountMenuResume();return;}
 const backup=readResume();
 if(backup?.slug===assessmentSlug&&backup.attempt?.version===1&&backup.attempt.level===backup.level&&backup.attempt.sid===backup.sid&&backup.key===attemptKey(backup.level,backup.sid)){
  try{
   const stored=JSON.parse(attemptStorage.getItem(backup.key)||'null');
   if(!stored||String(backup.attempt.startT)>String(stored.startT))attemptStorage.setItem(backup.key,JSON.stringify(backup.attempt));
   else if(stored.startT===backup.attempt.startT){const merged=structuredClone(backup.attempt);mergeSavedResponses(merged,stored);if(stored.p>merged.p||stored.done&&!merged.done){merged.p=stored.p;merged.stage=stored.stage;merged.done=stored.done;merged.submittedAt=stored.submittedAt;}attemptStorage.setItem(backup.key,JSON.stringify(merged));}
  }catch{}
 }
 function updateStartLabel(){
  const field=document.getElementById('studentId'),button=document.getElementById('startBtn');if(!field||!button)return;
  const record=field.value?load(chosenLevel,field.value):null;button.textContent=record?(record.done?'Open saved assessment →':'Continue reading →'):'Begin the adventure →';
 }
 function prepareStart(){
  const field=document.getElementById('studentId');if(!field)return;const sid=new URLSearchParams(location.search).get('studentId');if(!field.value&&[...field.options].some(option=>option.value===sid))field.value=sid;
  if(!field.dataset.resumeBound){field.dataset.resumeBound='true';field.addEventListener('change',updateStartLabel);document.querySelectorAll('[data-level]').forEach(button=>button.addEventListener('click',updateStartLabel));}updateStartLabel();
 }
 function saveAndExit(){
  stopNarration();if(state){
   commitVisibleAnswers();savePage();store();
   const saved={kind,slug:assessmentSlug,level:state.level,sid:state.sid,done:!!state.done,key:storageKey(),attempt:structuredClone(state),savedAt:new Date().toISOString()},text=JSON.stringify(saved);let backupSaved=false;
   try{sessionStorage.setItem(resumeKey,text);backupSaved=sessionStorage.getItem(resumeKey)===text;}catch{}
   try{window.name=text;backupSaved=backupSaved||window.name===text;}catch{}
   if(!backupSaved&&attemptStorage.mode==='memory'){
    let notice=document.getElementById('exitSaveStatus');if(!notice){notice=document.createElement('p');notice.id='exitSaveStatus';notice.setAttribute('role','alert');document.getElementById('assessmentExit').after(notice);}notice.textContent='This browser could not keep your work after leaving. Your answers are still here. Please ask your teacher before closing this page.';return;
   }
  }
  location.href='../index.html';
 }
 function mountExit(){
  prepareStart();if(!state)return;
  let button=document.getElementById('assessmentExit');if(button)return;
  const actions=document.querySelector('.test-page-actions'),diagram=document.querySelector('.bike-heading'),receipt=document.querySelector('.receipt');if(!actions&&!diagram&&!receipt)return;
  button=document.createElement('button');button.type='button';button.id='assessmentExit';button.className='reading-exit-button';button.textContent='Save & exit';button.title='Keep your answers and return to Obstacle Course';button.onclick=saveAndExit;
  if(actions)actions.prepend(button);else if(diagram){diagram.classList.add('has-exit');diagram.append(button);}else{const tools=receipt.querySelector('.teacher-tools');if(tools)tools.append(button);else receipt.insertBefore(button,receipt.querySelector('#teacherAccess'));}
 }
 const previousRender=render;render=function(){previousRender();mountExit();};
 const previousBike=renderBike;renderBike=function(){previousBike();mountExit();};
 const previousLanding=landing;landing=function(){previousLanding();mountExit();};
 mountExit();
})();
