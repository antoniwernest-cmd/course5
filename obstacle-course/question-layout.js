/* One-screen independent reading assessment: ticks, dropdowns and picture pads. */
/* Partition every row before selecting a set, so a short last set cannot skip middle items. */
function fitActivityRows({card,grid,rows,stateKey,group,label,stepAttribute}){
 if(!card?.getClientRects().length)return;
 if(grid.matches('.picture-pairs,.picture-descriptions .extra-task-grid'))return fitPictureActivityRows({card,grid,rows,stateKey,group,label,stepAttribute});
 card.querySelectorAll('.sentence-part-tools').forEach(node=>node.remove());rows.forEach(row=>row.hidden=false);
 const over=node=>node&&node.getClientRects().length&&(node.scrollHeight>node.clientHeight+3||node.scrollWidth>node.clientWidth+3);
 const peers=card.classList.contains('language-card')?[...card.closest('.test-workspace').querySelectorAll('.picture-card,.picture-pairs,.picture-pair')]:[];
 const crowded=()=>[card,grid,grid.parentElement,...rows,...peers].some(over);
 if(!crowded()){grid.dataset.visibleStart='0';grid.dataset.visibleEnd=String(rows.length);return;}
 const controls=document.createElement('nav');controls.className='sentence-part-tools activity-item-pager';controls.setAttribute('aria-label',label+' sets');
 controls.innerHTML='<button type="button" '+stepAttribute+'="-1" aria-label="Previous '+label.toLowerCase()+'">← Back</button><span aria-live="polite"></span><button type="button" '+stepAttribute+'="1" aria-label="More '+label.toLowerCase()+'">More →</button>';grid.before(controls);
 const show=(start,end)=>rows.forEach((row,i)=>row.hidden=i<start||i>=end),sets=[];
 for(let start=0;start<rows.length;){
  let end=start+1;show(start,end);
  while(end<rows.length&&!crowded()){show(start,end+1);if(crowded()){show(start,end);break;}end++;}
  sets.push({start,end});start=end;
 }
 const saved=group?state[stateKey]?.[state.p]?.[group]:state[stateKey]?.[state.p],cursor=Math.max(0,Math.min(Number(saved)||0,rows.length-1));
 const part=Math.max(0,sets.findIndex(set=>cursor>=set.start&&cursor<set.end)),set=sets[part];show(set.start,set.end);
 // Layout can be fitted several times per render. Preserve the requested item
 // until the child presses Back/More; an intermediate width must not reset it.
 const saveCursor=value=>{state[stateKey]||={};if(group){state[stateKey][state.p]||={};state[stateKey][state.p][group]=value;}else state[stateKey][state.p]=value;};
 grid.dataset.visibleStart=String(set.start);grid.dataset.visibleEnd=String(set.end);
 controls.querySelector('span').innerHTML='<strong>'+label+' '+(set.start+1)+'–'+set.end+' of '+rows.length+'</strong><small>Set '+(part+1)+' of '+sets.length+'</small>';
 const buttons=controls.querySelectorAll('button');buttons[0].disabled=part===0;buttons[1].disabled=part===sets.length-1;
 const scope=state.startT+'|'+state.p;buttons.forEach((button,i)=>button.onclick=()=>{commitVisibleAnswers();if(!state||state.done||state.stage!=='story'||scope!==state.startT+'|'+state.p)return;const next=sets[part+(i===0?-1:1)];if(!next)return;saveCursor(next.start);render();navpush('activity_set_opened',label+' '+(next.start+1)+'–'+next.end);});
}
/* Allocate picture sets from usable space, rather than measuring overflowing hidden rows.
   The final short set expands across the grid; the requested item stays unchanged on refits. */
function fitPictureActivityRows({card,grid,rows,stateKey,group,label,stepAttribute}){
 card.querySelectorAll('.activity-item-pager').forEach(n=>n.remove());rows.forEach(n=>n.hidden=false);
 const split=card.classList.contains('phonics-picture-card'),minimum=split?178:210;
 let columns=grid.clientWidth>=450?2:1;
 grid.style.setProperty('grid-template-columns','repeat('+columns+',minmax(0,1fr))','important');
 grid.style.setProperty('grid-template-rows','minmax(0,1fr)','important');
 const capacity=()=>Math.max(1,Math.min(rows.length,columns*Math.max(1,Math.floor((grid.clientHeight+9)/(minimum+9)))));
 let count=capacity(),controls;
 if(count<rows.length){controls=document.createElement('nav');controls.className='sentence-part-tools activity-item-pager';controls.setAttribute('aria-label',label+' sets');controls.innerHTML='<button type="button" '+stepAttribute+'="-1">← Back</button><span aria-live="polite"></span><button type="button" '+stepAttribute+'="1">More →</button>';grid.before(controls);count=capacity();}
 const saved=group?state[stateKey]?.[state.p]?.[group]:state[stateKey]?.[state.p],cursor=Math.max(0,Math.min(Number(saved)||0,rows.length-1)),start=Math.floor(cursor/count)*count,end=Math.min(rows.length,start+count);
 rows.forEach((row,i)=>row.hidden=i<start||i>=end);
 grid.style.setProperty('grid-template-columns','repeat('+Math.min(columns,end-start)+',minmax(0,1fr))','important');
 grid.style.setProperty('grid-template-rows','repeat('+Math.ceil((end-start)/columns)+',minmax(0,1fr))','important');
 grid.dataset.visibleStart=String(start);grid.dataset.visibleEnd=String(end);
 if(!controls)return;
 controls.querySelector('span').innerHTML='<strong>'+label+' '+(start+1)+'–'+end+' of '+rows.length+'</strong><small>Set '+(Math.floor(start/count)+1)+' of '+Math.ceil(rows.length/count)+'</small>';
 const buttons=controls.querySelectorAll('button'),scope=state.startT+'|'+state.p;buttons[0].disabled=start===0;buttons[1].disabled=end===rows.length;
 buttons.forEach((button,i)=>button.onclick=()=>{commitVisibleAnswers();if(!state||state.done||state.stage!=='story'||scope!==state.startT+'|'+state.p)return;const value=i?end:Math.max(0,start-count);state[stateKey]||={};if(group){state[stateKey][state.p]||={};state[stateKey][state.p][group]=value;}else state[stateKey][state.p]=value;render();navpush('activity_set_opened',label+' '+(value+1));});
}
const pictureWordsByStory={
 'soap-box-racer':['helmet','wheel','flag','star'],
 'obstacle-course':['cone','hoop','log','tunnel'],
 'canoe-trip':['canoe','paddle','life jacket','dock'],
 'rock-collecting':['rock','brush','bag','tray']
};
const assessmentSlug=CAT_NAME.replace('adventureReading_','').replace('_eflp_v1','');
// Decode embedded art once. Blob URLs keep offline canvas exports readable and redraws small.
ART.forEach((source,i)=>{if(!source.startsWith('data:'))return;const split=source.indexOf(','),head=source.slice(0,split),raw=source.slice(split+1),bytes=head.includes(';base64')?Uint8Array.from(atob(raw),c=>c.charCodeAt(0)):new TextEncoder().encode(decodeURIComponent(raw));ART[i]=URL.createObjectURL(new Blob([bytes],{type:head.slice(5).split(';')[0]}));});
let pictureWords=pictureWordsByStory[assessmentSlug];
function pictureTask(level=state.level,p=state.p){
 const legacy={version:1,words:pictureWordsByStory[assessmentSlug],atlas:'assets/illustrations/vocabulary-pixar.png',columns:2,row:null,order:[2,0,3,1]};
 if(!['E','F','G'].includes(level)||!window.LOWER_PICTURE_SETS)return legacy;
 const saved=state?.pictureTasks?.[p];if(saved)return saved;
 const answers=state?.answers?.[p]||{};
 // Already placed or locked labels retain the exact pictures they were answered against.
 if(Object.keys(answers).some(key=>/^v\d+$/.test(key))||state?.sectionLocks?.[p]?.pictures||state?.locked?.some(lock=>lock.kind==='story'&&lock.section===p+1))return legacy;
 return {version:2,words:window.LOWER_PICTURE_SETS.groups[p],atlas:window.LOWER_PICTURE_SETS.atlas,columns:4,row:p,order:assessmentSlug==='rock-collecting'&&p===2?[0,1,2,3]:[2,0,3,1]};
}
function pictureSVG(task,n,label,prefix='object-crop'){
 if(task.crop){const[x,y,w,h]=task.crop;return '<svg class="vocabulary-picture" viewBox="'+x+' '+y+' '+w+' '+h+'" role="img" aria-label="'+escapeHTML(label)+'"><defs><clipPath id="'+prefix+'-'+n+'"><rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'"/></clipPath></defs><g clip-path="url(#'+prefix+'-'+n+')"><image href="'+task.atlas+'" width="100" height="100"/></g></svg>';}
 const col=n%task.columns,row=task.row??Math.floor(n/task.columns),size=task.columns*100,height=(task.rows||task.columns)*100,pad=task.padding||0,extent=100+pad*2;
 return '<svg class="vocabulary-picture" viewBox="'+(-pad)+' '+(-pad)+' '+extent+' '+extent+'" role="img" aria-label="'+escapeHTML(label)+'"><defs><clipPath id="'+prefix+'-'+n+'"><rect x="'+(-pad)+'" y="'+(-pad)+'" width="'+extent+'" height="'+extent+'"/></clipPath></defs><g clip-path="url(#'+prefix+'-'+n+')"><image href="'+task.atlas+'" width="'+size+'" height="'+height+'" x="'+(-100*col)+'" y="'+(-100*row)+'"/></g></svg>';
}
let reportArtworkScript=null;
loadReportArt=async function(){
 if(reportArt)return reportArt;
 if(!window.CAMP_REPORT_ART){
  if(!reportArtworkScript)reportArtworkScript=new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='report-art.js?v='+window.CAMP_REPORT_ART_VERSION;script.onload=resolve;script.onerror=()=>{reportArtworkScript=null;reject(Error('Report illustrations could not load'))};document.head.append(script);});
  await reportArtworkScript;
 }
 reportArt=await Promise.all(window.CAMP_REPORT_ART.map(async source=>{const image=new Image();image.src=source;await image.decode();return image}));return reportArt;
};
let languageView='sentences',pictureSelection=null,pictureGesture=null;
function taskLock(group,p=state.p){return !!state.sectionLocks?.[p]?.[group]}
function oldLockedPage(p){return state.locked.some(lock=>lock.kind==='story'&&lock.section===p+1)&&!state.sectionLocks?.[p]}
function pictureResponseCount(answers,level=state.level,p=state.p){const words=pictureTask(level,p).words;return words.filter((_,i)=>words.includes(answers['v'+i])).length}
function groupComplete(group,section,answers){
 if(group==='questions')return readingCompletion(section,answers).questionCount===section.mc.length;
 if(group==='language')return storyPadsComplete(section,answers)&&readingCompletion(section,answers).matchCount===section.match.rows.length;
 return pictureResponseCount(answers)===pictureWords.length;
}
function assessmentSave(group,label,section,answers){
 const locked=taskLock(group),ready=groupComplete(group,section,answers);
 return '<div class="section-save"><span>'+(locked?'Saved and locked':ready?'Ready to save':'Choose your answers, then save this section.')+'</span><button type="button" data-save-section="'+group+'" class="primary" '+(locked||!ready?'disabled':'')+'>'+(locked?'Saved ✓':'Save & lock')+'</button><span class="section-lock '+(ready&&!locked?'spin-lock':'')+'" aria-label="'+(locked?'Locked':ready?'Ready to lock':'Complete this section')+'">'+(locked?'🔒':'🔐')+'</span></div>';
}
function notebookPicture(section,cls='question-illustration'){
 return '<img class="'+cls+'" src="'+ART[storyArtPage(state.level,state.p)+1]+'" alt="'+escapeHTML(SCENE_ALTS[storyArtPage(state.level,state.p)+1])+'" draggable="false">';
}
function tickQuestionMarkup(question,i,answers){
 const locked=taskLock('questions');
 return '<fieldset class="tick-question"><legend>'+(i+1)+'. '+childText(question.prompt,state.level)+'</legend><div class="tick-question-body">'+(['E','F','G'].includes(state.level)?notebookPicture(null):'')+'<div class="tick-options">'+question.choices.map((choice,j)=>'<label class="tick-option '+(answers['m'+i]===String(j)?'chosen':'')+'"><input type="radio" name="question-'+i+'" data-tick-key="m'+i+'" value="'+j+'" '+(answers['m'+i]===String(j)?'checked':'')+' '+(locked?'disabled':'')+'><span>'+childText(choice,state.level)+'</span></label>').join('')+'</div></div></fieldset>';
}
function sentenceForBlank(section,blank){
 const marker='{{'+blank.id+'}}',paragraph=section.cloze.paragraphs.find(p=>p.includes(marker))||marker;
 const sentences=paragraph.match(/[^.!?]+[.!?]?[”"]?/g)||[paragraph];
 return (sentences.find(s=>s.includes(marker))||paragraph).trim();
}
function dropdownSentence(section,blank,index,answers){
 const disabled=taskLock('language'),sentence=sentenceForBlank(section,blank),marker='{{'+blank.id+'}}';
 const chunks=sentence.split(marker),clean=text=>childText(text.replace(/\{\{c\d+\}\}/g,m=>clozeChoice(section,answers[m.slice(2,-2)])?.word||'…'),state.level);
 return '<label class="sentence-row"><span class="sentence-number">'+(index+1)+'.</span><span>'+clean(chunks[0])+' <select data-sentence="'+blank.id+'" aria-label="Sentence '+(index+1)+' missing word" '+(disabled?'disabled':'')+'><option value="">Choose</option>'+section.cloze.bank.map(word=>'<option value="'+word.id+'" '+(answers[blank.id]===word.id?'selected':'')+'>'+escapeHTML(word.word)+'</option>').join('')+'</select> '+clean(chunks[1]||'')+'</span></label>';
}
function languageMarkup(section,answers){
 const locked=taskLock('language');
 return '<section class="test-card language-card" aria-label="Complete the sentences"><div class="test-card-head"><div><h2>Complete the sentences</h2><p>Use the story beside you.</p></div></div><div class="language-content"><div class="sentence-word-bank">'+section.cloze.bank.map(w=>'<span>'+childText(w.word,state.level)+'</span>').join('')+'</div><div class="language-fields">'+section.cloze.blanks.map((blank,i)=>dropdownSentence(section,blank,i,answers)).join('')+section.match.rows.map(([prompt],i)=>'<label class="sentence-row idea-row"><span class="sentence-number">'+(section.cloze.blanks.length+i+1)+'.</span><span>'+childText(prompt,state.level)+' <select data-idea="t'+i+'" aria-label="Match '+escapeHTML(prompt)+'" '+(locked?'disabled':'')+'><option value="">Choose an ending</option>'+section.match.options.map(option=>'<option value="'+escapeHTML(option)+'" '+(answers['t'+i]===option?'selected':'')+'>'+escapeHTML(option)+'</option>').join('')+'</select></span></label>').join('')+'</div></div>'+assessmentSave('language','Sentences',section,answers)+'</section>';
}
function pictureTile(word,placed=false){return '<button type="button" class="picture-word '+(pictureSelection===word?'selected':'')+'" data-picture-word="'+escapeHTML(word)+'" aria-pressed="'+(pictureSelection===word)+'" '+(taskLock('pictures')?'disabled':'')+'>'+childText(word,state.level)+'</button>'}
function pictureMarkup(section,answers){
 const task=pictureTask(),order=task.order;
 return '<section class="test-card picture-card" aria-label="Match words to pictures"><h2>Match words to pictures</h2><p class="picture-directions">'+(assessmentSlug==='rock-collecting'&&state.p===2&&['E','F','G'].includes(state.level)?'Drag flat rock and bumpy rock under their pictures. Match the other names too.':'Drag each word onto the pad below its picture.')+'</p><div class="picture-word-bank" data-picture-bank>'+[...pictureWords].reverse().map(word=>Object.keys(answers).some(key=>/^v\d+$/.test(key)&&answers[key]===word)?'':pictureTile(word)).join('')+'</div><div class="picture-pairs">'+order.map((n,index)=>{const word=answers['v'+n],has=pictureWords.includes(word);return '<div class="picture-pair">'+pictureSVG(task,n,'Picture '+(index+1))+'<button type="button" class="picture-pad '+(has?'filled':'')+'" data-picture-pad="v'+n+'" data-picture-value="'+escapeHTML(has?word:'')+'" aria-label="Word pad under picture '+(index+1)+': '+escapeHTML(has?word:'empty')+'" '+(taskLock('pictures')?'disabled':'')+'>'+(has?'<span class="placed-picture-word">'+childText(word,state.level)+'</span>':'<span>Drop word</span>')+'</button></div>';}).join('')+'</div><p class="picture-help" role="status">'+(pictureSelection?'Choose the pad below a picture.':'You can also tap a word, then its pad. Keyboard: choose a word, then press a pad.')+'</p>'+assessmentSave('pictures','Pictures',section,answers)+'</section>';
}
function testTools(){
 const tools=[['story','Questions'],['sentences','Sentences'],['matching','Picture matching'],['picture','Story picture']];
 return '<nav class="test-tools" aria-label="Assessment tools">'+tools.map(([id,name])=>'<button type="button" data-test-view="'+id+'" aria-pressed="'+(view===id)+'">'+name+'</button>').join('')+'</nav>';
}
const originalAssessmentRender=render;
render=function(){
 if(!state||state.done||state.stage==='bike'){originalAssessmentRender();return;}
 stopNarration(false);finishPictureGesture();
 if(!['story','sentences','matching','picture'].includes(view))view='story';
 const section=LEVELS[state.level].sections[state.p],answers=state.answers[state.p]||{};
 const task=pictureTask();pictureWords=task.words;
 if(['E','F','G'].includes(state.level)&&!state.pictureTasks?.[state.p]){state.pictureTasks||={};state.pictureTasks[state.p]=structuredClone(task);store();}
 $('app').innerHTML='<main class="shell camp-shell test-shell grade-'+state.level+'">'+topbar((state.level==='P'?'Page ':'Chapter ')+(state.p+1)+' / '+storyCount(state.level))+testTools()+'<div class="test-workspace" data-test-view="'+view+'"><article class="test-card reading-card"><div class="test-card-head"><div><h1 id="sectionTitle" tabindex="-1">'+escapeHTML(sectionTitle(state.level,state.p))+'</h1><p>Read by yourself. Choose one answer each time.</p></div><span class="test-word-count">Page: '+chapterWordCount(section)+' words<br>Story: '+wholeStoryWordCount(state.level)+' words</span></div><div class="independent-story">'+section.text.map(p=>'<p>'+childText(p,state.level)+'</p>').join('')+'</div><div class="tick-questions">'+section.mc.map((q,i)=>tickQuestionMarkup(q,i,answers)).join('')+'</div>'+assessmentSave('questions','Questions',section,answers)+'</article>'+languageMarkup(section,answers)+pictureMarkup(section,answers)+'<article class="test-card full-story-picture">'+notebookPicture(section,'full-illustration')+'<h2>'+escapeHTML(sectionTitle(state.level,state.p))+'</h2></article></div><div class="test-page-foot"><span id="answerStatus" role="status"></span><button type="button" id="nextBtn" class="primary" '+(readingReady(section,answers)?'':'hidden')+'>'+(state.p===storyCount(state.level)-1?'Open final notebook →':'Next page →')+'</button></div>'+footer()+'</main>';
 document.querySelectorAll('button[data-test-view]').forEach(b=>b.onclick=()=>{if(typeof commitVisibleAnswers==='function')commitVisibleAnswers();view=b.dataset.testView;render();navpush('view_tool',view)});
 document.querySelectorAll('[data-language-view]').forEach(b=>b.onclick=()=>{languageView=b.dataset.languageView;render();navpush('sentence_tool',languageView)});
 document.querySelectorAll('[data-tick-key]').forEach(input=>input.onchange=()=>setTestAnswer(input.dataset.tickKey,input.value,'questions'));
 document.querySelectorAll('[data-sentence]').forEach(select=>select.onchange=()=>setTestAnswer(select.dataset.sentence,select.value,'language'));
 document.querySelectorAll('[data-idea]').forEach(select=>select.onchange=()=>setTestAnswer(select.dataset.idea,select.value,'language'));
 document.querySelectorAll('[data-save-section]').forEach(button=>button.onclick=()=>saveTestSection(button.dataset.saveSection));
 $('nextBtn').onclick=requestNext;
 document.querySelector('.picture-card').dataset.longLabels=String(pictureWords.some(word=>word.includes(' ')));
 bindPicturePads();bindNarration();bindTeacherVoice();updateReadingGate();fitTestPage();timer();updateStorageNotice();
};
function setTestAnswer(key,value,group){
 if(syncLatest()||!state||state.done||taskLock(group))return;
 const answers=state.answers[state.p]||={};if(value==='')delete answers[key];else answers[key]=value;
 if(typeof noteAnswerEdit==='function')noteAnswerEdit(key,value);
 navpush('answer_changed',key);render();
 const field=document.querySelector('[data-tick-key="'+key+'"][value="'+value+'"],[data-sentence="'+key+'"],[data-idea="'+key+'"]');field?.focus({preventScroll:true});
}
function saveTestSection(group){
 if(syncLatest()||!state||state.done||taskLock(group))return;
 const section=LEVELS[state.level].sections[state.p],answers=state.answers[state.p]||{};
 if(!groupComplete(group,section,answers))return;
 savePage();state.sectionLocks||={};state.sectionLocks[state.p]||={};state.sectionLocks[state.p][group]={at:now(),revision:nextLockRevision()};navpush('section_locked',group);render();
}
function finishPictureGesture(){document.querySelector('.picture-drag-ghost')?.remove();document.querySelectorAll('.picture-drop-ready').forEach(p=>p.classList.remove('picture-drop-ready'));pictureGesture=null;}
function placePictureWord(key,word,source){
 if(syncLatest()||!state||state.done||taskLock('pictures')||!/^v[0-3]$/.test(key)||!pictureWords.includes(word))return;
 const a=state.answers[state.p]||={},previous=a[key],existing=source||Object.keys(a).find(k=>/^v\d+$/.test(k)&&a[k]===word);
 if(existing&&existing!==key){if(previous)a[existing]=previous;else delete a[existing];}
 a[key]=word;if(typeof noteAnswerEdit==='function'){noteAnswerEdit(key,word);if(existing&&existing!==key)noteAnswerEdit(existing,a[existing]);}pictureSelection=null;navpush('picture_answer_changed',key);render();
 const pad=document.querySelector('[data-picture-pad="'+key+'"]');pad?.classList.add('picture-drop-ready');pad?.focus({preventScroll:true});setTimeout(()=>pad?.classList.remove('picture-drop-ready'),650);
}
function clickPictureControl(button){
 if(button.dataset.pictureWord){pictureSelection=pictureSelection===button.dataset.pictureWord?null:button.dataset.pictureWord;render();}
 else if(pictureSelection)placePictureWord(button.dataset.picturePad,pictureSelection);
 else if(button.dataset.pictureValue){pictureSelection=button.dataset.pictureValue;render();}
}
function bindPicturePads(){
 document.querySelectorAll('[data-picture-word],[data-picture-pad]').forEach(button=>{
  button.onclick=e=>{if(e.detail===0)clickPictureControl(button)};
  button.onpointerdown=e=>{if(e.button!==0||e.isPrimary===false||button.disabled)return;e.preventDefault();stopNarration();pictureGesture={button,word:button.dataset.pictureWord||button.dataset.pictureValue,source:button.dataset.picturePad,x:e.clientX,y:e.clientY,id:e.pointerId,moved:false};try{button.setPointerCapture(e.pointerId)}catch{}};
  button.onpointermove=e=>{
   const d=pictureGesture;if(!d||d.id!==e.pointerId||!d.word)return;
   if(!d.moved&&Math.hypot(e.clientX-d.x,e.clientY-d.y)<7)return;d.moved=true;
   let ghost=document.querySelector('.picture-drag-ghost');if(!ghost){ghost=document.createElement('div');ghost.className='picture-drag-ghost';ghost.textContent=d.word;document.body.append(ghost)}
   ghost.style.left=(e.clientX-ghost.offsetWidth/2)+'px';ghost.style.top=(e.clientY-ghost.offsetHeight/2)+'px';
   const pad=document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-picture-pad]');document.querySelectorAll('.picture-drop-ready').forEach(p=>p.classList.remove('picture-drop-ready'));pad?.classList.add('picture-drop-ready');
  };
  button.onpointerup=e=>{const d=pictureGesture;if(!d||d.id!==e.pointerId)return;e.preventDefault();const pad=document.elementFromPoint(e.clientX,e.clientY)?.closest('[data-picture-pad]');finishPictureGesture();if(d.moved){if(pad)placePictureWord(pad.dataset.picturePad,d.word,d.source);}else clickPictureControl(button);};
  button.onpointercancel=finishPictureGesture;button.ondragstart=e=>e.preventDefault();
 });
}
readingReady=function(section,answers={}){return ['questions','language','pictures'].every(group=>taskLock(group)&&groupComplete(group,section,answers));};
updateReadingGate=function(){
 if(!state||state.done||state.stage!=='story')return;const section=LEVELS[state.level].sections[state.p],a=state.answers[state.p]||{},locked=['questions','language','pictures'].filter(g=>taskLock(g)).length;
 if($('nextBtn'))$('nextBtn').hidden=!readingReady(section,a);
 if($('answerStatus'))$('answerStatus').textContent=locked+' of 3 sections saved and locked'+(locked===3?' · Ready for the next page':'');updateActivityProgress();
};
guardAdvance=function(){if(!state||state.done)return false;if(state.stage==='bike')return bikeComplete();return readingReady(LEVELS[state.level].sections[state.p],state.answers[state.p]||{});};
const originalRequestNext=requestNext;
requestNext=function(){
 if(state?.stage==='bike'){originalRequestNext();return;}
 if(syncLatest()||!guardAdvance())return;stopNarration();$('lockText').textContent='All three sections are saved and locked. Save this reading page and continue?';$('confirmNext').textContent=state.p===storyCount(state.level)-1?'Open final notebook →':'Next page →';$('lockDialog').showModal();
};
const assessmentSectionMaximum=sectionMaximum;
sectionMaximum=function(level,p){return assessmentSectionMaximum(level,p)+(state&&oldLockedPage(p)?0:pictureWords.length);};
const originalProgressData=activityProgressData;
activityProgressData=function(){
 const data=originalProgressData();let addedDone=0,addedTotal=0;
 LEVELS[state.level].sections.forEach((section,p)=>{if(oldLockedPage(p))return;const words=pictureTask(state.level,p).words,done=pictureResponseCount(state.answers[p]||{},state.level,p);addedDone+=done;addedTotal+=words.length;if(state.stage==='story'&&state.p===p){data.meters[1].done+=done;data.meters[1].total+=words.length;}});
 data.meters[0].done+=addedDone;data.meters[0].total+=addedTotal;data.meters.forEach(m=>m.caption=m.done+' of '+m.total+' done');return data;
};
const originalAssessmentResults=results;
results=function(){
 const report=originalAssessmentResults();LEVELS[state.level].sections.forEach((section,p)=>{if(oldLockedPage(p))return;const a=state.answers[p]||{},task=pictureTask(state.level,p);task.words.forEach((word,i)=>report.rows.push({section:p+1,item:'V'+(i+1),type:'Picture matching',skill:'Match a word to its picture',prompt:'Name picture '+(task.order.indexOf(i)+1),options:task.words,picture:{...task,index:i},response:a['v'+i]||'',correct:word,mark:a['v'+i]===word?1:0,seconds:Math.round(state.pageTimes[p]||0)}));});
 report.score=report.rows.reduce((n,row)=>n+row.mark,0);report.total=report.rows.length;report.percent=Math.round(100*report.score/Math.max(1,report.total));report.pages.forEach(page=>{page.score=report.rows.filter(r=>r.section===page.section).reduce((n,r)=>n+r.mark,0);page.maximum=report.rows.filter(r=>r.section===page.section).length;});return report;
};
function fitTestPage(){
 const ws=document.querySelector('.test-workspace');if(!ws)return;
 const shell=document.querySelector('.test-shell'),read=ws.querySelector('.reading-card'),story=ws.querySelector('.independent-story');
 const over=node=>node&&node.getClientRects().length&&(node.scrollHeight>node.clientHeight+3||node.scrollWidth>node.clientWidth+3);
 ws.dataset.layout='all';shell.dataset.layout='all';
 const minimum={E:27,F:22,G:22,L:18,M:18,N:18,P:18,R:18}[state.level];
 let size=({E:32,F:25,G:25,L:23,M:23,N:22,P:22,R:22}[state.level])*activityTextSize/100;
 story.style.fontSize=size+'px';
 while((over(read)||over(story))&&size>minimum){size=Math.max(minimum,size-.5);story.style.fontSize=size+'px';}
 const fitAll=view!=='picture'&&![read,story,ws.querySelector('.language-card'),ws.querySelector('.language-content'),ws.querySelector('.language-fields'),ws.querySelector('.picture-card'),ws.querySelector('.picture-pairs'),...ws.querySelectorAll('.picture-pair')].some(over);
 if(!fitAll){
  // Only the answer area changes. The complete story is permanently visible.
  ws.dataset.layout='beside';shell.dataset.layout='beside';
  const questions=document.createElement('section');questions.className='test-card comprehension-card';questions.setAttribute('aria-label','Reading questions');
  questions.innerHTML='<h2>Choose an answer</h2><p>Use the story beside you.</p>';
  questions.append(read.querySelector('.tick-questions'),read.querySelector('.section-save'));ws.append(questions);
  if(['E','F','G'].includes(state.level)&&view!=='picture'){
   // Short lower-level questions share the right column with the other activities.
   ws.dataset.layout='stacked';shell.dataset.layout='stacked';
   const crowded=[questions,questions.querySelector('.tick-questions'),ws.querySelector('.language-card'),ws.querySelector('.language-fields'),ws.querySelector('.picture-card'),ws.querySelector('.picture-pairs'),...ws.querySelectorAll('.picture-pair')].some(over);
   if(crowded){ws.dataset.layout='paired';shell.dataset.layout='paired';}
  }
  size=({E:34,F:27,G:27,L:23,M:23,N:22,P:22,R:22}[state.level])*activityTextSize/100;story.style.fontSize=size+'px';
  while((over(story)||over(read))&&size>minimum){size=Math.max(minimum,size-.5);story.style.fontSize=size+'px';}
  if(over(questions)||over(questions.querySelector('.tick-questions'))){
   const items=[...questions.querySelectorAll('.tick-question')],current=Math.min(state.questionView?.[state.p]||0,items.length-1);
   if(items.length>1){
    items.forEach((item,i)=>item.hidden=i!==current);
    const controls=document.createElement('nav');controls.className='sentence-part-tools';controls.setAttribute('aria-label','Reading questions');controls.innerHTML='<button type="button" data-question-step="-1">← Back</button><span>Question '+(current+1)+' of '+items.length+'</span><button type="button" data-question-step="1">Next →</button>';
    questions.querySelector('.tick-questions').before(controls);const buttons=controls.querySelectorAll('button');buttons[0].disabled=current===0;buttons[1].disabled=current===items.length-1;buttons.forEach(button=>button.onclick=()=>{state.questionView||={};state.questionView[state.p]=current+Number(button.dataset.questionStep);render();});
   }
  }
 }
 const grid=ws.querySelector('.language-fields');grid.style.gridTemplateColumns=grid.clientWidth>=500?'repeat(2,minmax(0,1fr))':'1fr';
 fitActivityRows({card:ws.querySelector('.language-card'),grid,rows:[...grid.children],stateKey:'sentenceCursor',label:'Sentences',stepAttribute:'data-sentence-step'});
 // Use spare space for a useful story illustration, rather than an empty frame.
 const spare=read.clientHeight-[...read.children].reduce((n,node)=>n+node.getBoundingClientRect().height,0)-45;
 if(spare>105){const picture=document.createElement('div');picture.className='inline-story-picture';picture.innerHTML=notebookPicture(null,'inline-illustration');story.after(picture);}
}
// Same teacher gate is available on the landing screen and every assessment screen.
bindTeacherVoice();
