/* Presentation and interaction helpers; story data and assessment rules are unchanged. */
let activityTextSize=100,clearClozeLimit=0,clearClozeKey='',clearClozeFitKey='';
try{const saved=Number(localStorage.getItem('adventureReading_obstacle-course_textSize'));if(saved>=90&&saved<=140)activityTextSize=saved}catch{}
document.documentElement.style.setProperty('--activity-scale',activityTextSize/100);
function bindTextSizeControls(){
 const host=document.querySelector('.top-info')||document.querySelector('.landing-footer');
 if(!host||document.getElementById('textSizeTools'))return;
 const tools=document.createElement('div');tools.className='text-size-tools';tools.id='textSizeTools';tools.setAttribute('role','group');tools.setAttribute('aria-label','Text size');
 tools.innerHTML='<button type="button" id="smallerText" aria-label="Make text smaller" title="Make text smaller">A−</button><output aria-live="polite">'+activityTextSize+'%</output><button type="button" id="largerText" aria-label="Make text larger" title="Make text larger">A+</button>';
 host.append(tools);
 const change=step=>{activityTextSize=Math.max(90,Math.min(140,activityTextSize+step));document.documentElement.style.setProperty('--activity-scale',activityTextSize/100);try{localStorage.setItem('adventureReading_obstacle-course_textSize',activityTextSize)}catch{}clearClozeKey='';clearClozeLimit=0;clozeCompact=false;stopNarration();finishClozeDrag();finishReadingDrag();finishBikeDrag();if(state)render();else landing();document.getElementById(step>0?'largerText':'smallerText')?.focus({preventScroll:true})};
 tools.querySelector('#smallerText').onclick=()=>change(-10);tools.querySelector('#largerText').onclick=()=>change(10);
 tools.querySelector('#smallerText').disabled=activityTextSize===90;tools.querySelector('#largerText').disabled=activityTextSize===140;
}
function chunkStoryText(text,limit){const tokens=text.match(/\S+\s*/g)||[];const parts=[];for(let i=0;i<tokens.length;i+=limit)parts.push(tokens.slice(i,i+limit).join(''));return parts.length?parts:[text]}
function clozeDisplayParts(section){
 const key=clozeScope+'|'+innerWidth+'|'+innerHeight+'|'+activityTextSize;
 if(clearClozeKey!==key){clearClozeKey=key;clearClozeLimit=0}
 return clearClozeLimit?chunkStoryText(section.cloze.paragraphs.join('\n\n'),clearClozeLimit):section.cloze.parts;
}
function sizeClozeTiles(panel){
 const choice=panel.querySelector('.cloze-word');if(!choice)return;
 const font=18*activityTextSize/100;panel.style.setProperty('--choice-font',font+'px');
 const context=document.createElement('canvas').getContext('2d');context.font='700 '+font+'px Arial';
 const section=LEVELS[state.level].sections[state.p];const width=Math.ceil(Math.max(...section.cloze.bank.map(word=>context.measureText(word.word).width))+42),height=Math.max(44,Math.ceil(font*1.22)+16);
 panel.style.setProperty('--cloze-tile-width',width+'px');panel.style.setProperty('--cloze-pad-width',(width+14)+'px');panel.style.setProperty('--cloze-tile-height',height+'px');panel.style.setProperty('--cloze-pad-height',(height+10)+'px');
 panel.style.setProperty('--passage-base',({'E':28,'F':27,F:26,L:22,M:22,N:22,P:22,R:21})[state.level]+'px');
}
function allClozePartsFit(panel,passage,section,parts){
 const style=getComputedStyle(panel),tools=panel.querySelector('.cloze-part-tools'),bank=panel.querySelector('.cloze-bank');
 const available=panel.clientHeight-tools.getBoundingClientRect().height-(state.level==='P'&&view==='story'&&innerWidth>=950?0:bank.getBoundingClientRect().height)-2*(parseFloat(style.rowGap)||0)-(parseFloat(style.paddingTop)||0)-(parseFloat(style.paddingBottom)||0)-(parseFloat(getComputedStyle(tools).marginBottom)||0);
 const key=clearClozeKey+'|'+clearClozeLimit+'|'+Math.floor(available)+'|'+passage.clientWidth;
 if(key===clearClozeFitKey)return true;
 const probe=passage.cloneNode(false);probe.removeAttribute('aria-label');probe.setAttribute('aria-hidden','true');probe.style.cssText='position:absolute;visibility:hidden;pointer-events:none;top:0;left:0;width:'+passage.clientWidth+'px';probe.style.setProperty('font-size',getComputedStyle(passage).fontSize,'important');probe.style.setProperty('line-height',getComputedStyle(passage).lineHeight,'important');panel.append(probe);
 const answers=state.answers[state.p]||{};
 const fits=parts.every(text=>{probe.innerHTML=compactClozeText(section,text,answers);return probe.getBoundingClientRect().height<=available+2&&probe.scrollWidth<=probe.clientWidth+2});
 probe.remove();if(fits)clearClozeFitKey=key;return fits;
}
function fitClearClozePanel(){
 const panel=$('clozePanel');if(!panel||!panel.clientWidth||!panel.clientHeight)return;
 sizeClozeTiles(panel);const passage=panel.querySelector('.cloze-passage'),section=LEVELS[state.level].sections[state.p];
 const over=()=>panel.scrollHeight>panel.clientHeight+2||passage.scrollHeight>passage.clientHeight+2||passage.scrollWidth>passage.clientWidth+2;
 if(over()&&!clozeCompact){clozeCompact=true;redrawCloze();return}
 if(clozeCompact){const current=clozeDisplayParts(section);if(!allClozePartsFit(panel,passage,section,current)){const words=Math.max(...current.map(part=>(part.match(/\S+/g)||[]).length));const next=Math.max(8,Math.floor(words*.72));if(!clearClozeLimit||next<clearClozeLimit){clearClozeLimit=next;redrawCloze();return}}}
 panel.dataset.fullStory=String(!clozeCompact);panel.dataset.storyBlankCount=String(section.cloze.blanks.length);
 const heading=$('sectionTitle');if(heading)heading.dataset.clozeGuide=clozeCompact?'Read each text part and fill its blanks.':'Read the whole story page.';
}
function setDragTargets(button,pads){document.documentElement.classList.add('drag-in-progress');button.classList.add('drag-source');pads.forEach(pad=>pad.classList.add('drop-eligible'))}
function clearDragTargets(){document.documentElement.classList.remove('drag-in-progress');document.querySelectorAll('.drag-source,.drop-eligible').forEach(el=>el.classList.remove('drag-source','drop-eligible'))}
function flashLandingPad(selector,message){
 const pad=document.querySelector(selector);if(!pad)return;pad.classList.add('drop-flash');
 setTimeout(()=>pad.classList.remove('drop-flash'),1150);
 const help=pad.closest('#clozePanel')?.querySelector('.cloze-help')||document.querySelector(state?.stage==='bike'?'#bikeHelp':'.reading-drag-help');if(help&&message)help.textContent=message;
}
function enhanceDragLayout(){
 document.querySelectorAll('#nextBtn,#finishBike').forEach(button=>{
  if(button.parentElement.classList.contains('ready-save'))return;
  const group=document.createElement('span');group.className='ready-save';
  const icon=document.createElement('span');icon.className='ready-lock';icon.setAttribute('aria-hidden','true');icon.textContent='🔒';
  button.before(group);group.append(icon,button);
 });
 document.querySelectorAll('.reading-question').forEach(question=>{
  const choices=Array.from(question.querySelectorAll('.reading-choice')),bank=question.querySelector('.reading-bank');
  if(!question.classList.contains('reading-match')&&bank&&choices.some(tile=>tile.getBoundingClientRect().height>85))bank.style.gridTemplateColumns='1fr';
  const height=Math.max(0,...choices.map(tile=>tile.getBoundingClientRect().height));
  question.querySelectorAll('.reading-pad').forEach(pad=>{pad.style.setProperty('min-height',pad.classList.contains('filled')?'48px':'54px','important')});
  if(question.classList.contains('reading-match')){
   question.classList.remove('single-pair');question.classList.add('all-pairs');
   if(question.clientHeight&&question.scrollHeight>question.clientHeight+2){question.classList.remove('all-pairs');question.classList.add('single-pair');const current=state.matchView?.[state.p]||0;question.querySelectorAll('.reading-match-row').forEach((row,i)=>row.classList.toggle('pair-visible',i===current));const singleHeight=Math.max(0,...choices.map(tile=>tile.getBoundingClientRect().height));question.querySelectorAll('.reading-pad').forEach(pad=>pad.style.setProperty('min-height',(pad.classList.contains('filled')?48:54)+'px','important'))}
  }
 });
 const stage=document.querySelector('.bike-stage');if(stage){
  const tiles=Array.from(document.querySelectorAll('.bike-choice')),box=stage.getBoundingClientRect(),width=Math.max(0,...tiles.map(tile=>tile.getBoundingClientRect().width))+14,height=Math.max(0,...tiles.map(tile=>tile.getBoundingClientRect().height))+10;
  document.querySelectorAll('.bike-pad').forEach((pad,i)=>{const part=bikeParts(state.level)[i],w=Math.max(part.w/1000*box.width,width),h=Math.max(54,height);pad.style.width=w+'px';pad.style.height=h+'px';pad.style.left=Math.max(0,Math.min(box.width-w,(part.x+part.w/2)/1000*box.width-w/2))+'px';pad.style.top=Math.max(0,Math.min(box.height-h,(part.y+26)/620*box.height-h/2))+'px'});
 }
}

/* Keep the active notebook readable and fully inside its available height. */
const originalNotebookLayout=enhanceDragLayout;
enhanceDragLayout=function(){
 originalNotebookLayout();
 const diagramBank=document.querySelector('.bike-bank');
 if(diagramBank){
  const tiles=[...diagramBank.querySelectorAll('.bike-choice')];
  for(let step=0;step<24&&diagramBank.scrollHeight>diagramBank.clientHeight+2;step++){
   diagramBank.style.gap='4px';
   let changed=false;tiles.forEach(node=>{const size=parseFloat(getComputedStyle(node).fontSize);if(size>16){node.style.setProperty('font-size',Math.max(16,size-.5)+'px','important');changed=true;}});
   if(!changed)break;
  }
  originalNotebookLayout();
  const size=Math.min(...tiles.map(node=>parseFloat(getComputedStyle(node).fontSize)));
  document.querySelectorAll('.bike-pad').forEach(node=>node.style.setProperty('font-size',Math.min(size,parseFloat(getComputedStyle(node).fontSize))+'px','important'));
  const diagram=document.querySelector('.bike-stage');
  if(diagram)document.querySelectorAll('.bike-pad').forEach((node,i)=>{
   const part=bikeParts(state.level)[i],style=getComputedStyle(node),label=node.querySelector('span'),number=node.querySelector('small');
   const content=label.scrollWidth+number.offsetWidth+(parseFloat(style.gap)||0)+(parseFloat(style.paddingLeft)||0)+(parseFloat(style.paddingRight)||0)+(parseFloat(style.borderLeftWidth)||0)+(parseFloat(style.borderRightWidth)||0)+8;
   const width=Math.min(diagram.clientWidth,Math.max(110,part.w/1000*diagram.clientWidth,content)),height=Math.max(54,Math.ceil(parseFloat(style.fontSize)*1.3)+18);
   node.style.width=width+'px';node.style.height=height+'px';
   node.style.left=Math.max(0,Math.min(diagram.clientWidth-width,(part.x+part.w/2)/1000*diagram.clientWidth-width/2))+'px';
   node.style.top=Math.max(0,Math.min(diagram.clientHeight-height,(part.y+26)/620*diagram.clientHeight-height/2))+'px';
  });
 }
 const question=[...document.querySelectorAll('.reading-question')].find(n=>n.getClientRects().length);
 if(!question)return;
 const assessment=question.closest('.assessment');
 if(question.scrollHeight>question.clientHeight+2)assessment.style.setProperty('gap','3px','important');
 const text=[...question.querySelectorAll('h3,.reading-choice,.reading-pad,.reading-match-row>span')];
 for(let step=0;step<28&&question.scrollHeight>question.clientHeight+2;step++){
  let changed=false;
  text.forEach(node=>{const size=parseFloat(getComputedStyle(node).fontSize),minimum=node.tagName==='H3'?18:16;if(size>minimum){node.style.setProperty('font-size',Math.max(minimum,size-.5)+'px','important');changed=true;}});
  if(!changed)break;
 }
 if(question.scrollHeight>question.clientHeight+2){const help=question.querySelector('.reading-match-help');if(help)help.style.setProperty('display','none','important');}
 if(question.scrollHeight>question.clientHeight+2){question.style.setProperty('gap','4px','important');question.style.setProperty('padding-top','4px','important');const bank=question.querySelector('.reading-bank');if(bank)bank.style.gap='4px';}
 if(question.scrollHeight>question.clientHeight+2){
  const workspace=document.querySelector('.workspace');workspace.dataset.notebookFit='full';
  text.forEach(node=>node.style.removeProperty('font-size'));
  if(view==='story'){clozeCompact=false;clearClozeLimit=0;redrawCloze();}
  for(let step=0;step<28&&question.getClientRects().length&&question.scrollHeight>question.clientHeight+2;step++)text.forEach(node=>{const size=parseFloat(getComputedStyle(node).fontSize),minimum=node.tagName==='H3'?18:16;if(size>minimum)node.style.setProperty('font-size',Math.max(minimum,size-.5)+'px','important');});
 }
};
