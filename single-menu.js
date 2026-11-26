(()=>{
 const data=JSON.parse(document.getElementById('menuData').textContent),$=id=>document.getElementById(id),cards=[...document.querySelectorAll('[data-story]')],params=new URLSearchParams(location.search);
 const ids=['Maple Leaf','Pine Cone','Acorn','Birch Tree','Pine Tree','Red Squirrel','Chipmunk','Owl','Woodpecker','Fox','Bear','Deer','Robin','Mushroom','Fern','Pebble','Lake','Lantern','Warm Mittens','Trail Sign'];
 ids.forEach(id=>{const option=document.createElement('option');option.value=id.replaceAll(' ','-');option.textContent=id;$('menuStudent').append(option);});
 let slug=data[params.get('story')]?params.get('story'):'obstacle-course';
 if(data[slug][params.get('level')])$('menuLevel').value=params.get('level');
 const range=book=>{const words=Object.values(book).map(b=>b.words);return Math.min(...words)+'–'+Math.max(...words)+' words';};
 function update(){const level=$('menuLevel').value;cards.forEach(card=>{card.setAttribute('aria-pressed',String(card.dataset.story===slug));card.querySelector('strong').textContent=level?data[card.dataset.story][level].words+' words · Level '+level:range(data[card.dataset.story])+' · choose a level';});$('selectedStory').textContent=cards.find(c=>c.dataset.story===slug).querySelector('h2').textContent;$('selectedWords').textContent=level?data[slug][level].words+' words · '+data[slug][level].pages+' pages':range(data[slug])+' · choose a level';$('watchCourse').hidden=slug!=='obstacle-course'||!level;}
 cards.forEach(card=>{card.onclick=e=>{e.preventDefault();slug=card.dataset.story;update();};card.onkeydown=e=>{if(e.key===' '){e.preventDefault();card.click();}};});$('menuLevel').onchange=update;
 $('launchStory').onsubmit=e=>{e.preventDefault();location.href=slug+'/index.html?level='+$('menuLevel').value+'&studentId='+encodeURIComponent($('menuStudent').value)+'&begin=1';};
 $('menuAudit').onclick=()=>{location.href=slug+'/index.html?level='+($('menuLevel').value||'E')+'&audit=1';};
 let paused=false;const preview=$('coursePreview'),image=$('previewAnimation');
 $('watchCourse').onclick=()=>{const level=$('menuLevel').value;$('previewTitle').textContent='Obstacle Course · Level '+level;image.src='obstacle-course/assets/animations/level-'+level+'.gif';image.hidden=false;paused=false;$('pausePreview').textContent='Pause animation';preview.showModal();};
 $('closePreview').onclick=()=>preview.close();preview.addEventListener('close',()=>image.removeAttribute('src'));
 $('pausePreview').onclick=()=>{paused=!paused;image.src='obstacle-course/assets/animations/level-'+$('menuLevel').value+(paused?'-poster.png':'.gif');$('pausePreview').textContent=paused?'Play animation':'Pause animation';};
 update();
})();
