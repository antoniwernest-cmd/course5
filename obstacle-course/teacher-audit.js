/* Teacher review is an isolated, unsaved attempt. Student records never receive audit edits. */
let teacherAuditActive=false,auditReturn=null;
const storeBeforeAudit=store,syncBeforeAudit=syncLatest;
store=function(){if(teacherAuditActive){updateStorageNotice();return;}return storeBeforeAudit();};
syncLatest=function(){return teacherAuditActive?false:syncBeforeAudit();};
function auditJump(page){
 stopNarration();if(!teacherAuditActive)return;
 state.done=false;state.stage=page>=storyCount(state.level)?'bike':'story';state.p=Math.max(0,Math.min(storyCount(state.level),page));view='story';pageStart=null;render();
}
function beginTeacherAudit(){
 if(teacherAuditActive)return;
 auditReturn={state,pageStart,view};teacherAuditActive=true;document.body.classList.add('teacher-auditing');
 const level=state?.level||chosenLevel;
 state={version:1,level,sid:'Teacher-Audit',contentPages:storyCount(level),p:0,stage:'story',done:false,startT:now(),answers:{},pageTimes:Array(storyCount(level)).fill(0),bikeAnswers:{},bikeTime:0,locked:[],events:[],readParts:{},pictureTasks:{},extraTasks:{}};
 auditJump(0);
}
function endTeacherAudit(){
 if(!teacherAuditActive)return;stopNarration();teacherAuditActive=false;document.body.classList.remove('teacher-auditing');
 state=auditReturn.state;view=auditReturn.view;pageStart=state&&!state.done?Date.now():null;auditReturn=null;render();
}
function openTeacherAudit(){
 stopNarration();let dialog=$('teacherAuditDialog');
 if(!dialog){dialog=document.createElement('dialog');dialog.id='teacherAuditDialog';dialog.className='audit-dialog';dialog.setAttribute('aria-labelledby','auditTitle');dialog.innerHTML='<h2 id="auditTitle">Teacher audit</h2><p>Review any story page and activity without completing answers or Save & lock. Student work stays separate.</p><form><label for="auditCode">Teacher code <input id="auditCode" type="password" inputmode="numeric" maxlength="3" autocomplete="off" required></label><p role="status" id="auditStatus"></p><div><button type="button" id="auditCancel">Cancel</button><button type="submit">Open audit</button></div></form>';document.body.append(dialog);dialog.querySelector('form').onsubmit=e=>{e.preventDefault();if($('auditCode').value.trim()!=='259'){$('auditStatus').textContent='Please enter the teacher code.';$('auditCode').value='';$('auditCode').focus();return;}dialog.close();$('auditCode').value='';beginTeacherAudit();};$('auditCancel').onclick=()=>dialog.close();}
 $('auditStatus').textContent='';$('auditCode').value='';dialog.showModal();$('auditCode').focus();
}
function fitAfterTeacherControls(){
 if(!state||state.done||state.stage!=='story')return;
 const ws=document.querySelector('.test-workspace'),story=ws?.querySelector('.independent-story'),read=story?.closest('.reading-card');if(!ws||!story)return;
 const directions=document.querySelector('.test-tools .teacher-voice-entry'),actions=document.querySelector('.test-page-actions');if(directions&&actions)actions.prepend(directions);
 const over=n=>n&&n.getClientRects().length&&(n.scrollHeight>n.clientHeight+3||n.scrollWidth>n.clientWidth+3);
 // Header controls change the available height after the core layout is built.
 fitPersistentStory();fitCoreControls();fitCoreQuestions();fitPersistentStory();
 if([story,read].some(over)){read.querySelector('.inline-story-picture')?.remove();fitPersistentStory();}
 const language=ws.querySelector('.language-card'),pictures=ws.querySelector('.picture-card');
 if(ws.dataset.layout!=='beside'&&[read,story,language,language?.querySelector('.language-content'),language?.querySelector('.language-fields'),pictures,...(pictures?.querySelectorAll('.picture-pairs,.picture-pair')||[])].some(over)){
  if(!ws.querySelector('.comprehension-card')){
   const questions=document.createElement('section');questions.className='test-card comprehension-card';questions.setAttribute('aria-label','Reading questions');questions.innerHTML='<h2>'+extraSectionNumber('questions')+'. Questions</h2><p>Use the story beside you.</p>';const ticks=read.querySelector('.tick-questions'),save=read.querySelector('.section-save');if(ticks)questions.append(ticks);if(save)questions.append(save);ws.append(questions);
  }
  ws.dataset.layout='beside';document.querySelector('.test-shell').dataset.layout='beside';ws.style.gridTemplateColumns='minmax(0,.48fr) minmax(0,.52fr)';fitCoreControls();fitCoreQuestions();fitPersistentStory();
 }
 const extra=ws.querySelector('[data-extra-card]');if(extra)fitExtraActivity(extra);
 if(typeof fitPhonicsPictures==='function')fitPhonicsPictures();
 mountGlossaryScreen();
 mountIntroScreen();
 fitVisualActivities();
}
function mountTeacherAudit(){
 const host=document.querySelector('.top-info,.camp-landing .brand,.completion .teacher-tools,.receipt');if(!host)return;
 if(teacherAuditActive){
  if(host.querySelector('.audit-toolbar')){fitAfterTeacherControls();return;}
  const controls=document.createElement('div');controls.className='audit-toolbar';controls.setAttribute('aria-label','Teacher audit navigation');
  controls.innerHTML='<button type="button" id="auditPrevious" aria-label="Previous audit page">←</button><select id="auditPage" aria-label="Audit page">'+Array.from({length:storyCount(state.level)+1},(_,i)=>'<option value="'+i+'">'+(i===storyCount(state.level)?'Final diagram':'Page '+(i+1))+'</option>').join('')+'</select><button type="button" id="auditNext" aria-label="Next audit page">Next →</button><button type="button" id="auditEnd">Exit audit</button>';
  host.append(controls);$('auditPage').value=state.p;$('auditPage').onchange=e=>auditJump(Number(e.target.value));$('auditPrevious').disabled=state.p===0;$('auditPrevious').onclick=()=>auditJump(state.p-1);$('auditNext').disabled=state.p===storyCount(state.level);$('auditNext').onclick=()=>auditJump(state.p+1);$('auditEnd').onclick=endTeacherAudit;
  document.querySelectorAll('.section-save').forEach(section=>{const note=section.querySelector('span');if(note)note.textContent='Teacher audit · Save & lock not needed';section.querySelectorAll('button').forEach(button=>button.disabled=true);});
  const next=$('nextBtn')||$('finishBike');if(next){next.hidden=false;next.disabled=false;next.textContent=state.stage==='bike'?'Exit audit':'Next page →';next.onclick=()=>state.stage==='bike'?endTeacherAudit():auditJump(state.p+1);}
  const exit=$('assessmentExit');if(exit){exit.textContent='Exit audit';exit.onclick=endTeacherAudit;}
  if($('saveStatus'))$('saveStatus').textContent='Teacher audit · Level '+state.level+' · '+wholeStoryWordCount(state.level)+' story words · Student work is separate';
 }else if(!$('teacherAuditBtn')){const button=document.createElement('button');button.id='teacherAuditBtn';button.type='button';button.className='teacher-audit-button';button.textContent='Teacher audit';button.onclick=openTeacherAudit;host.append(button);}
 fitAfterTeacherControls();
}
const renderBeforeAudit=render;render=function(){renderBeforeAudit();mountTeacherAudit();};
const landingBeforeAudit=landing;landing=function(){landingBeforeAudit();mountTeacherAudit();};
const bikeBeforeAudit=renderBike;renderBike=function(){bikeBeforeAudit();mountTeacherAudit();};
mountTeacherAudit();
// The single main landing page supplies the level and ID, so reading opens immediately.
const launchParams=new URLSearchParams(location.search);
if(launchParams.get('audit')==='1')openTeacherAudit();
else if(launchParams.get('begin')==='1'&&CAMP_IDS.some(id=>id.replaceAll(' ','-')===launchParams.get('studentId'))){$('studentId').value=launchParams.get('studentId');start();}
