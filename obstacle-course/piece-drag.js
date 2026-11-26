/* The same visible pads support dragging, tapping and keyboard placement. */
function bindPieceDrag({bank,pads,pieceOf,textOf,tap,place}){
 let drag=null;
 const clear=()=>{document.querySelector('.piece-drag-ghost')?.remove();document.querySelectorAll('.piece-drop-ready').forEach(n=>n.classList.remove('piece-drop-ready'));drag=null;};
 document.querySelectorAll(bank+','+pads).forEach(control=>{
  control.onclick=e=>{if(e.detail===0&&!control.disabled)tap(control);};
  control.onpointerdown=e=>{if(e.button!==0||e.isPrimary===false||control.disabled)return;e.preventDefault();stopNarration();drag={control,piece:pieceOf(control),x:e.clientX,y:e.clientY,id:e.pointerId,moved:false};try{control.setPointerCapture(e.pointerId);}catch{}};
  control.onpointermove=e=>{const d=drag;if(!d||d.id!==e.pointerId||!d.piece)return;if(!d.moved&&Math.hypot(e.clientX-d.x,e.clientY-d.y)<7)return;d.moved=true;let ghost=document.querySelector('.piece-drag-ghost');if(!ghost){ghost=document.createElement('div');ghost.className='piece-drag-ghost';ghost.textContent=textOf(d.piece);document.body.append(ghost);}ghost.style.left=(e.clientX-ghost.offsetWidth/2)+'px';ghost.style.top=(e.clientY-ghost.offsetHeight/2)+'px';document.querySelectorAll('.piece-drop-ready').forEach(n=>n.classList.remove('piece-drop-ready'));document.elementFromPoint(e.clientX,e.clientY)?.closest(pads)?.classList.add('piece-drop-ready');};
  control.onpointerup=e=>{const d=drag;if(!d||d.id!==e.pointerId)return;e.preventDefault();const target=document.elementFromPoint(e.clientX,e.clientY)?.closest(pads);clear();if(d.moved){if(target)place(target,d.piece);}else tap(control);};
  control.onpointercancel=clear;control.ondragstart=e=>e.preventDefault();
 });
}
function moveAnswerPiece(answers,keys,target,piece){
 const source=keys.find(key=>answers[key]===piece),previous=answers[target];if(source===target)return [];
 const changed=[target];if(source){changed.push(source);if(previous)answers[source]=previous;else delete answers[source];}answers[target]=piece;return changed;
}
