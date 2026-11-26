/* Run after both student and audit toolbars have their final dimensions. */
function fitVisualActivities(){
 const ws=document.querySelector('.test-workspace');if(!ws||!state||state.stage!=='story')return;
 const lower=['E','F','G'].includes(state.level),read=ws.querySelector('.reading-card');
 if(lower&&['story','sentences','matching'].includes(view)&&ws.dataset.layout!=='beside'){
  const image=ws.querySelector('.question-illustration'),pairs=ws.querySelector('.picture-pairs');
  if((image?.getClientRects().length&&image.clientHeight<150)||(pairs?.getClientRects().length&&pairs.clientHeight<240)){
   if(!ws.querySelector('.comprehension-card')){const card=document.createElement('section');card.className='test-card comprehension-card';card.innerHTML='<h2>'+extraSectionNumber('questions')+'. Questions</h2><p>Use the story beside you.</p>';card.append(read.querySelector('.tick-questions'),read.querySelector('.section-save'));ws.append(card);}
   ws.dataset.layout='beside';document.querySelector('.test-shell').dataset.layout='beside';ws.style.gridTemplateColumns='minmax(0,.45fr) minmax(0,.55fr)';fitPersistentStory();
  }
 }
 const card=ws.querySelector('.comprehension-card');
 if(lower&&view==='story'&&card?.getClientRects().length){card.classList.add('illustrated-questions');fitCoreQuestions();}
 if(view==='matching')fitPhonicsPictures();
 if(view==='spelling')fitSpellingCard();
 const extra=ws.querySelector('[data-extra-card]');if(extra?.matches('.picture-descriptions'))fitExtraActivity(extra);
}
