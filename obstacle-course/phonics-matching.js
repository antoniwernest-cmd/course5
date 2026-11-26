/* Word parts remain on their pads and may be moved again until saved. */
const wordSplits={flag:['fl','ag'],star:['st','ar'],wheel:['wh','eel'],helmet:['hel','met'],cone:['c','one'],hoop:['h','oop'],log:['l','og'],tunnel:['tun','nel'],canoe:['ca','noe'],paddle:['pad','dle'],dock:['d','ock'],rock:['r','ock'],brush:['br','ush'],bag:['b','ag'],tray:['tr','ay'],seat:['s','eat'],car:['c','ar'],rope:['r','ope'],nut:['n','ut'],spanner:['span','ner'],axle:['ax','le'],hill:['h','ill'],sun:['s','un'],lens:['l','ens'],box:['b','ox'],hand:['h','and'],notebook:['note','book'],pencil:['pen','cil'],label:['la','bel'],collection:['collec','tion'],foot:['f','oot'],arms:['ar','ms'],grass:['gr','ass'],beam:['b','eam'],head:['h','ead'],smile:['sm','ile'],pal:['p','al'],pals:['p','als'],path:['p','ath'],clip:['cl','ip'],water:['wa','ter'],ripples:['rip','ples'],duck:['d','uck'],reeds:['r','eeds'],wind:['w','ind'],bay:['b','ay']};
function splitPictureWord(word){if(word.includes(' ')){const at=word.indexOf(' ');return [word.slice(0,at+1),word.slice(at+1)];}return wordSplits[word]||[word.slice(0,1),word.slice(1)];}
const wholePictureTask=pictureTask;
pictureTask=function(level=state.level,p=state.p){
 const saved=state?.level===level?state.pictureTasks?.[p]:null;if(saved?.split)return saved;
 const task=wholePictureTask(level,p);if(task.split)return task;
 const closed=state?.level===level&&(state.sectionLocks?.[p]?.pictures||state.locked?.some(l=>l.kind==='story'&&l.section===p+1));if(closed)return task;
 return {...task,version:3,split:true,parts:task.words.flatMap((word,i)=>splitPictureWord(word).map((text,half)=>({id:'part'+i+'-'+half,text,wordIndex:i,half})))};
};
function picturePartKeys(task){return task.words.flatMap((_,i)=>['v'+i+'a','v'+i+'b']);}
function picturePartResponse(task,answers,n){const left=task.parts.find(p=>p.id===answers['v'+n+'a']),right=task.parts.find(p=>p.id===answers['v'+n+'b']);return {left,right,complete:!!left&&!!right,word:((left?.text||'')+(right?.text||'')).trim()};}
function picturePartReport(task,answers,n){const r=picturePartResponse(task,answers,n);return {response:r.left||r.right?[(r.left?.text||'_').trim(),(r.right?.text||'_').trim()].join(' + ')+(r.complete?' = '+r.word:''):'',correct:splitPictureWord(task.words[n]).map(s=>s.trim()).join(' + ')+' = '+task.words[n],mark:r.complete&&r.word===task.words[n]?1:0};}
function migratePictureParts(task,answers){
 if(!task.split)return;for(let n=0;n<task.words.length;n++)if(answers['v'+n]&&answers['v'+n+'a']===undefined&&answers['v'+n+'b']===undefined){const i=task.words.indexOf(answers['v'+n]);if(i>=0){answers['v'+n+'a']='part'+i+'-0';answers['v'+n+'b']='part'+i+'-1';noteAnswerEdit('v'+n+'a',answers['v'+n+'a']);noteAnswerEdit('v'+n+'b',answers['v'+n+'b']);}}
}
let selectedPicturePart=null,picturePartScope='';
const wholePictureMarkup=pictureMarkup;
pictureMarkup=function(section,answers){
 const task=pictureTask();if(!task.split)return wholePictureMarkup(section,answers);
 state.pictureTasks||={};state.pictureTasks[state.p]=structuredClone(task);migratePictureParts(task,answers);
 const scope=state.startT+'|'+state.p;if(scope!==picturePartScope){selectedPicturePart=null;picturePartScope=scope;}
 const locked=taskLock('pictures'),used=new Set(picturePartKeys(task).map(k=>answers[k]).filter(Boolean));
 const partText=part=>{const text=part.text.trim();return /^(fl|st|br|bl|cl|cr|dr|fr|gr|gl|pl|pr|sl|sm|sn|sp|sw|tr|tw|wh)$/i.test(text)?'<mark class="reading-blend">'+escapeHTML(text)+'</mark>':childText(text,state.level);};
 const bank=[...task.parts.filter(p=>p.half===1).reverse(),...task.parts.filter(p=>p.half===0)];
 return '<section class="test-card picture-card phonics-picture-card"><h2>3. Build the words</h2><p class="picture-directions">Drag two word parts onto each picture pad.</p><div class="picture-word-bank">'+bank.filter(p=>!used.has(p.id)).map(part=>'<button type="button" class="picture-word word-part '+(part.id===selectedPicturePart?'selected':'')+'" data-picture-word="'+part.id+'" '+(locked?'disabled':'')+'>'+partText(part)+'</button>').join('')+'</div><div class="picture-pairs">'+task.order.map(n=>'<div class="picture-pair">'+pictureSVG(task,n,'Picture '+(task.order.indexOf(n)+1),'phonics')+'<div class="picture-pad joined-word-pad '+(picturePartResponse(task,answers,n).complete?'filled':'')+'" data-picture-pad="v'+n+'" tabindex="0" role="group" aria-label="Picture '+(task.order.indexOf(n)+1)+' word pad">'+['a','b'].map((half,i)=>{const part=task.parts.find(p=>p.id===answers['v'+n+half]);return '<button type="button" class="picture-part-pad '+(part?'has-part':'')+'" data-phonics-slot="v'+n+half+'" data-piece-id="'+(part?.id||'')+'" aria-label="Picture '+(task.order.indexOf(n)+1)+', '+(i?'last':'first')+' word part" '+(locked?'disabled':'')+'>'+(part?partText(part):'<span>'+(i?'Last part':'First part')+'</span>')+'</button>';}).join('<span class="join-sign" aria-hidden="true">+</span>')+'</div></div>').join('')+'</div><p class="picture-help">You can drag a part again, or tap a part and then a box.</p>'+assessmentSave('pictures','Picture matching',section,answers)+'</section>';
};
function placePicturePart(key,piece){
 if(syncLatest()||!state||state.done||taskLock('pictures'))return;const task=pictureTask(),answers=state.answers[state.p]||={};if(!task.parts?.some(p=>p.id===piece)||!picturePartKeys(task).includes(key))return;
 const changed=moveAnswerPiece(answers,picturePartKeys(task),key,piece);for(const k of changed)noteAnswerEdit(k,answers[k]);
 for(const n of new Set(changed.map(k=>Number(k.slice(1,-1))))){const r=picturePartResponse(task,answers,n);if(r.complete)answers['v'+n]=r.word;else delete answers['v'+n];noteAnswerEdit('v'+n,answers['v'+n]);}
 selectedPicturePart=null;navpush('word_part_moved',key);render();document.querySelector('[data-phonics-slot="'+key+'"]')?.focus({preventScroll:true});
}
const bindWholePicturePads=bindPicturePads;
bindPicturePads=function(){
 const task=pictureTask();if(!task.split){bindWholePicturePads();return;}const text=id=>task.parts.find(p=>p.id===id)?.text.trim()||'';
 const tap=control=>{if(control.dataset.pictureWord){selectedPicturePart=selectedPicturePart===control.dataset.pictureWord?null:control.dataset.pictureWord;render();}else if(selectedPicturePart)placePicturePart(control.dataset.phonicsSlot,selectedPicturePart);else if(control.dataset.pieceId){selectedPicturePart=control.dataset.pieceId;render();}};
 bindPieceDrag({bank:'[data-picture-word]',pads:'[data-phonics-slot]',pieceOf:n=>n.dataset.pictureWord||n.dataset.pieceId,textOf:text,tap,place:(pad,piece)=>placePicturePart(pad.dataset.phonicsSlot,piece)});
 document.querySelectorAll('.joined-word-pad').forEach(pad=>pad.onkeydown=e=>{if(e.target!==pad||!['Enter',' '].includes(e.key))return;e.preventDefault();const target=[...pad.querySelectorAll('[data-phonics-slot]')].find(n=>!n.dataset.pieceId)||pad.querySelector('[data-phonics-slot]');if(selectedPicturePart)placePicturePart(target.dataset.phonicsSlot,selectedPicturePart);});
};
const wholePictureCount=pictureResponseCount;
pictureResponseCount=function(answers={},level=state.level,p=state.p){const task=pictureTask(level,p);return task.split?task.words.filter((_,i)=>picturePartResponse(task,answers,i).complete).length:wholePictureCount(answers,level,p);};
const wordPartGroupComplete=groupComplete;
groupComplete=function(group,section,answers){if(group==='pictures'&&pictureTask().split)return pictureResponseCount(answers)===pictureTask().words.length;return wordPartGroupComplete(group,section,answers);};
function fitPhonicsPictures(){
 const card=document.querySelector('.phonics-picture-card');if(!card?.getClientRects().length)return;const ws=card.closest('.test-workspace'),over=n=>n&&n.getClientRects().length&&(n.scrollHeight>n.clientHeight+3||n.scrollWidth>n.clientWidth+3),grid=card.querySelector('.picture-pairs');
 card.classList.toggle('media-tight',card.clientWidth<450||card.clientHeight<430);
 card.querySelector('h2').textContent=extraSectionNumber('pictures')+'. Build the words';grid.style.gridTemplateRows='none';grid.style.gridAutoRows='minmax(0,1fr)';
 if([card,grid,...grid.children].some(over)&&ws.dataset.layout!=='beside'){ws.dataset.layout='beside';document.querySelector('.test-shell').dataset.layout='beside';fitPersistentStory();}
 fitActivityRows({card,grid,rows:[...grid.children],stateKey:'pictureCursor',label:'Pictures',stepAttribute:'data-picture-step'});
}
const wordPartsResults=results;
results=function(){const report=wordPartsResults();for(const row of report.rows.filter(r=>r.type==='Picture matching')){const p=row.section-1,n=Number(row.item.slice(1))-1,task=pictureTask(state.level,p);if(task.split){const answer=picturePartReport(task,state.answers[p]||{},n);Object.assign(row,answer,{prompt:'Build the word for picture '+(task.order.indexOf(n)+1)+' using two word parts.',options:task.parts.map(part=>part.text.trim()),wordParts:true});}}
 report.score=report.rows.reduce((n,r)=>n+r.mark,0);report.percent=Math.round(100*report.score/Math.max(1,report.total));return report;};
