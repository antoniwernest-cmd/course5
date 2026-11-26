/* Give long chapters the reading space before dividing them into text parts. */
function chapterWordCount(section){return (section.text.join(' ').match(/\S+/g)||[]).length;}
function wholeStoryWordCount(level=state?.level||chosenLevel){return LEVELS[level].sections.reduce((total,section)=>total+chapterWordCount(section),0);}
function showStoryWordCounts(){
 const panel=$('clozePanel');if(!panel||!state||state.stage!=='story')return;
 const tools=panel.querySelector('.cloze-part-tools');if(!tools)return;
 const section=LEVELS[state.level].sections[state.p],label=tools.querySelector('span');
 if(label){label.classList.add('story-word-count');label.textContent=(state.level==='P'?'Page ':'Chapter ')+(state.p+1)+': '+chapterWordCount(section)+' words · Whole story: '+wholeStoryWordCount()+' words'+(clozeCompact?' · Part '+(clozePart(section)+1)+' of '+clozeDisplayParts(section).length:'');}
 tools.classList.add('with-word-count');
}
function paintWholeChapter(panel,section){
 clozeCompact=false;
 const template=document.createElement('template');template.innerHTML=clozeMarkup(section);
 for(const selector of ['.cloze-part-tools','.cloze-passage'])panel.querySelector(selector)?.replaceWith(template.content.querySelector(selector));
 const bank=panel.querySelector('.cloze-bank'),nextBank=template.content.querySelector('.cloze-bank');if(bank&&nextBank)bank.className=nextBank.className;
 bindCloze();showStoryWordCounts();
}
const fitOriginalChapter=fitClearClozePanel;
let fittingStoryParts=false;
fitClearClozePanel=function(){
 const panel=$('clozePanel');if(!panel||!panel.clientWidth||!panel.clientHeight||!state)return;
 if(fittingStoryParts){const passage=panel.querySelector('.cloze-passage');if(passage){passage.style.setProperty('font-size',((state.level==='E'?24:state.level==='F'?22:18)*activityTextSize/100)+'px','important');passage.style.setProperty('line-height','1.32','important');}showStoryWordCounts();fitOriginalChapter();showStoryWordCounts();return;}
 const section=LEVELS[state.level].sections[state.p],workspace=panel.closest('.workspace');
 let long=chapterWordCount(section)>70||workspace?.dataset.longStory==='true';
 if(view!=='story'){showStoryWordCounts();fitOriginalChapter();showStoryWordCounts();return;}
 if(!long){showStoryWordCounts();fittingStoryParts=true;try{fitOriginalChapter();}finally{fittingStoryParts=false;}if(!clozeCompact){showStoryWordCounts();return;}workspace.dataset.longStory='true';long=true;}
 sizeClozeTiles(panel);clearClozeLimit=0;clearClozeFitKey='';
 if(clozeCompact)paintWholeChapter(panel,section);else showStoryWordCounts();
 const passage=panel.querySelector('.cloze-passage');
 passage.innerHTML=section.cloze.paragraphs.map(paragraph=>'<p>'+clozeTextWithBlanks(section,paragraph,state.answers[state.p]||{})+'</p>').join('');bindCloze();
 const selected=activityTextSize/100,base={E:28,F:26,L:22,M:22,N:22,P:22,R:21}[state.level],minimum=state.level==='P'?18:(state.level==='E'?24:state.level==='F'?22:18)*selected;
 let font=base*selected;passage.style.setProperty('font-size',font+'px','important');passage.style.setProperty('line-height','1.32','important');
 const overflow=()=>panel.scrollHeight>panel.clientHeight+2||passage.scrollHeight>passage.clientHeight+2||passage.scrollWidth>passage.clientWidth+2;
 while(overflow()&&font>minimum){font=Math.max(minimum,font-.5);passage.style.setProperty('font-size',font+'px','important');}
 if(!overflow()){
  clozeCompact=false;panel.dataset.fullStory='true';panel.dataset.storyBlankCount=String(section.cloze.blanks.length);
  const title=$('sectionTitle');if(title)title.dataset.clozeGuide='Read the whole page. Drag words into the blanks.';
  showStoryWordCounts();return;
 }
 // Keep the selected readable size on smaller screens; use parts only when required.
 fittingStoryParts=true;try{fitOriginalChapter();}finally{fittingStoryParts=false;}showStoryWordCounts();
};
