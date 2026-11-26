const teacherReport={scope:'',unlocked:false,pages:null,report:null};
function parentReportTotal(report){return 2+report.pages.length}
function teacherScope(report){return report.level+'|'+report.student_id+'|'+report.submitted_at}
function teacherHandoff(report){
if(teacherReport.scope!==teacherScope(report)){teacherReport.scope=teacherScope(report);teacherReport.unlocked=false;teacherReport.pages=null}
teacherReport.report=report;
if(teacherReport.unlocked){teacherReceipt(report);return}
$('app').innerHTML='<main class="completion">'+scene(storyCount(report.level)-1)+'<div class="receipt"><span class="eyebrow">STORY COMPLETE</span><h1>All done!</h1><p class="call-teacher" role="status">Please call your teacher.</p><p>Your story words and question answers are locked. Your teacher will open your results.</p><div class="receipt-meta"><b>Student ID:</b> '+escapeHTML(report.student_id.replace(/-/g,' '))+'<br><b>Level:</b> '+report.level+' · '+LEVELS[report.level].grade+'<br><b>Finished:</b> all '+storyCount(report.level)+' story pages and the picture notebook</div><button id="teacherAccess" class="quiet">Teacher access</button><form id="teacherCodeForm" class="teacher-code-form" hidden><label for="teacherCode">Teacher code</label><div><input id="teacherCode" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="3" autocomplete="off" aria-label="Teacher code"><button type="submit" class="primary">Open results</button></div><p id="teacherCodeStatus" class="status" role="status"></p></form><small>'+escapeHTML(attemptStorage.mode==='memory'?'Keep this tab open until your teacher saves the results.':'Your teacher can save a parent report and clear the activity for the next student.')+'</small></div></main>';
$('teacherAccess').onclick=()=>{$('teacherCodeForm').hidden=false;$('teacherAccess').hidden=true;$('teacherCode').focus()};
bindScreenTools();
$('teacherCodeForm').onsubmit=e=>{e.preventDefault();if($('teacherCode').value.trim()!=='259'){$('teacherCodeStatus').textContent='Please ask your teacher to enter the code.';$('teacherCode').value='';$('teacherCode').focus();return}teacherReport.unlocked=true;navpush('teacher_results_opened');teacherReceipt(report)};
}

/* The assessment has one document export: a complete, searchable PDF. */
function reportDate(iso){if(!iso)return 'Not submitted';try{return new Intl.DateTimeFormat('en-CA',{year:'numeric',month:'long',day:'numeric',timeZone:'America/Toronto'}).format(new Date(iso));}catch{return String(iso).slice(0,10);}}
function teacherReceipt(report){
 const combined=report.score+report.clozeScore+report.bikeScore,total=report.total+report.clozeTotal+report.bikeTotal;
 $('app').innerHTML='<main class="completion">'+scene(storyCount(report.level)-1)+'<div class="receipt teacher-receipt"><span class="eyebrow">TEACHER ASSESSMENT</span><h1>Your PDF report</h1><p>The PDF contains the complete story, every question and activity item, all choices, the student’s answer, the correct answer and marks.</p><div class="receipt-meta"><b>Student ID:</b> '+escapeHTML(report.student_id.replace(/-/g,' '))+'<br><b>Reading level:</b> '+escapeHTML(report.level)+'<br><b>Assessment score:</b> '+combined+' / '+total+'<br><b>Reading pages:</b> '+storyCount(report.level)+'</div><div class="teacher-tools"><button id="previewParent" class="primary">Download detailed PDF</button><a class="quiet teacher-pdf-library" href="../assessment-pdfs/'+assessmentSlug+'/index.html">Teacher PDF library</a><button id="endReset" class="quiet">Clear for next student</button></div><p id="downloadStatus" class="saved-state" role="status">Download the PDF before clearing this attempt.</p></div></main>';
 $('previewParent').onclick=async()=>{const button=$('previewParent');button.disabled=true;$('downloadStatus').textContent='Preparing the complete PDF assessment…';try{await downloadAssessmentPdf(report);$('downloadStatus').textContent='Your detailed PDF has downloaded. It includes every question and both answers.';}catch(error){$('downloadStatus').textContent='The PDF could not download. Your answers are saved; please try again.';console.error(error);}finally{button.disabled=false;}};
 $('endReset').onclick=requestReset;try{sessionStorage.setItem('adventureReadingTeacherPdf','enabled');}catch{}bindScreenTools();
}
function reportQuestionGroups(report,p){
 const rows=report.rows.filter(row=>row.section===p+1),groups=[];
 for(const type of ['Listening glossary','Listen to sentences','Listen and fill','Picture sentences',...(p===0?['Spelling']:[])]){const items=rows.filter(row=>row.type===type);if(items.length)groups.push([type,items]);}
 groups.push(['Questions',rows.filter(row=>row.type==='Multiple choice')],['Complete the sentences',[...report.clozeRows.filter(row=>row.section===p+1),...rows.filter(row=>row.type==='Matching')]],['Build picture words',rows.filter(row=>row.type==='Picture matching')]);
 for(const type of ['Picture descriptions','Rock descriptions','More cloze','Grammar','Contractions','Tenses','Who, what, where & why','Why questions',...(p===0?[]:['Spelling'])]){const items=rows.filter(row=>row.type===type);if(items.length)groups.push([type,items]);}
 const known=new Set(groups.flatMap(group=>group[1]));if(rows.some(row=>!known.has(row)))throw Error('An assessment question has not been assigned to the PDF.');return groups.filter(g=>g[1].length);
}
function reportSectionLabel(title,p){const core={'Questions':'questions','Complete the sentences':'language','Build picture words':'pictures'},group=core[title]||Object.keys(extraTasksAt(p)).find(g=>extraTasksAt(p)[g].label===title);if(!group)return title;const suffix={glossary:'a',listenSentences:'b',listenFill:'c'}[group]||'';return extraSectionNumber(group,p)+suffix+'. '+title;}
function printableFullReport(report){
 const esc=escapeHTML,master=!!report.teacherMaster,questionTotal=report.total+report.clozeTotal+report.bikeTotal;let number=0;
 const records=rows=>'<table class="pdf-response-table"><thead><tr><th>Question and choices</th><th>Student response</th><th>Correct answer</th></tr></thead><tbody>'+rows.map(row=>{
  number++;const id=report.level+'-'+row.section+'-'+row.item;
  return '<tr data-report-question="'+id+'"><td>'+(row.picture?'<div class="pdf-response-picture">'+pictureSVG(row.picture,row.picture.index,'Question picture','pdf-'+id)+'</div>':'')+'<div class="pdf-question-number">Question '+number+' ('+esc(row.item)+')</div><b>'+esc(row.prompt)+'</b><p class="pdf-choices">'+(row.listening?'Audio button: '+esc(row.audioWord):'Choices: '+row.options.map((option,i)=>String.fromCharCode(65+i)+') '+esc(option)).join(' · '))+'</p></td><td>'+esc(master?'________________':row.response||'No response')+(master?'':'<p class="pdf-mark">Mark: '+row.mark+' / 1</p>')+'</td><td><b>'+esc(row.correct)+'</b></td></tr>';
 }).join('')+'</tbody></table>';
 const sections=LEVELS[report.level].sections.map((section,p)=>{
  const groups=reportQuestionGroups(report,p);
  const people=p===0&&report.characters?.length?'<div class="pdf-character-intro"><h3>1. Meet the characters</h3><div class="pdf-character-grid">'+report.characters.map((person,i)=>'<div>'+pictureSVG(person.picture,person.picture.index,person.name,'pdf-person-'+i)+'<strong>'+esc(person.name)+'</strong><small>'+(master?'Name audio is optional.':'Name heard: '+person.plays+' full plays (optional).')+'</small></div>').join('')+'</div></div>':'';
  return '<section class="pdf-chapter" data-report-story-page="'+p+'"><h2>Reading page '+(p+1)+' - '+esc(sectionTitle(report.level,p))+'</h2>'+people+'<div class="pdf-original-story"><img class="pdf-story-art" src="'+ART[storyArtPage(report.level,p)+1]+'" alt="Story illustration"><h3>Complete story text</h3>'+section.text.map(paragraph=>'<p data-original-paragraph>'+childText(paragraph,report.level)+'</p>').join('')+'</div>'+groups.filter(group=>group[1].length).map(group=>'<h3>'+esc(reportSectionLabel(group[0],p))+'</h3>'+records(group[1])).join('')+'</section>';
 }).join('');
 const diagram='<section class="pdf-chapter"><h2>Final diagram assessment</h2><p>Drag each word to its numbered pad. Every diagram label is listed below.</p><div class="pdf-diagram">'+bikeDiagramSVG(report.level,report.bikeRows)+'</div>'+records(report.bikeRows)+'</section>';
 if(number!==questionTotal)throw Error('PDF question count does not match the assessment: '+number+' / '+questionTotal);
 return '<section class="pdf-summary" data-report-level="'+report.level+'"><div class="pdf-eyebrow">ADVENTURE READING</div><h1>'+esc(report.activity)+'</h1><h2>Reading level '+report.level+'</h2><p class="pdf-report-kind">'+(master?'Complete assessment and correct-answer key':'Detailed student assessment report')+'</p>'+(master?'<p><b>Teacher copy:</b> all questions, answer choices and correct answers are included.</p>':'<p><b>Student:</b> '+esc(report.student_id.replace(/-/g,' '))+'<br><b>Completed:</b> '+esc(reportDate(report.submitted_at))+'<br><b>Score:</b> '+(report.score+report.clozeScore+report.bikeScore)+' / '+questionTotal+'</p>')+'<p><b>Story length:</b> '+wholeStoryWordCount(report.level)+' words across '+storyCount(report.level)+' reading pages.<br><b>Assessment items:</b> '+questionTotal+', including the final diagram.</p><p>Every reading page below includes its complete story text, followed by every question, all answer choices and the correct answer. Student reports also include each recorded response and mark.</p></section>'+sections+diagram;
}
function prepareFullPrintReport(report){
 let host=$('parentPrintReport');if(!host){host=document.createElement('div');host.id='parentPrintReport';document.body.append(host);}host.className='native-reading-report';host.innerHTML=printableFullReport(report);
 if(!$('fullStoryPrintStyles')){const style=document.createElement('style');style.id='fullStoryPrintStyles';style.textContent=`
 #parentPrintReport.native-reading-report{display:none}
 @media print{
  @page{size:letter landscape;margin:12mm}
  html:has(body.printing-parent-report),body.printing-parent-report{height:auto!important;min-height:0!important;max-height:none!important;overflow:visible!important;width:auto!important;display:block!important;margin:0!important;padding:0!important;background:white!important}
  body.printing-parent-report> :not(#parentPrintReport){display:none!important}
  body.printing-parent-report #parentPrintReport.native-reading-report{display:block!important;position:static!important;float:none!important;width:100%!important;height:auto!important;max-height:none!important;overflow:visible!important;margin:0!important;padding:0!important;color:#183c32!important;background:white!important;font:11pt/1.4 Andika,Arial,sans-serif!important}
  #parentPrintReport.native-reading-report *{box-sizing:border-box;max-height:none!important;overflow:visible!important;font-family:Andika,Arial,sans-serif!important}
  #parentPrintReport.native-reading-report h1{font-size:25pt;line-height:1.2;margin:0 0 12pt}
  #parentPrintReport.native-reading-report h2{font-size:18pt;line-height:1.2;margin:0 0 12pt;break-after:avoid}
  #parentPrintReport.native-reading-report h3{font-size:12pt;line-height:1.25;margin:13pt 0 7pt;break-after:avoid}
  #parentPrintReport.native-reading-report p{font-size:11pt;line-height:1.4;margin:0 0 8pt;orphans:3;widows:3}
  #parentPrintReport.native-reading-report .pdf-eyebrow{font-size:9pt;letter-spacing:2pt;margin-bottom:10pt}
  #parentPrintReport.native-reading-report .pdf-report-kind{font-size:15pt;font-weight:700;margin:12pt 0}
  #parentPrintReport.native-reading-report .pdf-summary{break-before:page}
  #parentPrintReport.native-reading-report .pdf-chapter{display:block!important;position:static!important;height:auto!important;width:100%!important;break-before:page;margin:0!important;padding:0!important}
  #parentPrintReport.native-reading-report .pdf-original-story{display:flow-root;break-inside:avoid;margin-bottom:14pt}
  #parentPrintReport.native-reading-report .pdf-story-art{display:block!important;float:right!important;width:25%!important;height:auto!important;max-width:180pt!important;margin:0 0 10pt 16pt!important;object-fit:contain}
  #parentPrintReport.native-reading-report .pdf-response-table{width:100%;border-collapse:collapse;table-layout:fixed;font-size:9.5pt;line-height:1.35;margin:0 0 14pt;break-inside:auto}
  #parentPrintReport.native-reading-report .pdf-response-table th,#parentPrintReport.native-reading-report .pdf-response-table td{border:1px solid #b6cbb8;text-align:left;vertical-align:top;padding:7pt;overflow-wrap:anywhere;white-space:normal}
  #parentPrintReport.native-reading-report .pdf-response-table th:first-child{width:58%}
  #parentPrintReport.native-reading-report .pdf-response-table th{background:#edf3e7;font-size:10pt}
  #parentPrintReport.native-reading-report .pdf-response-table tr{break-inside:avoid}
  #parentPrintReport.native-reading-report .pdf-response-table thead{display:table-header-group}
  #parentPrintReport.native-reading-report .pdf-question-number{font-size:8pt;color:#476b54;margin-bottom:4pt}
  #parentPrintReport.native-reading-report .pdf-choices{font-size:9pt;line-height:1.35;margin:5pt 0 0}
  #parentPrintReport.native-reading-report .pdf-mark{font-size:8pt;margin:7pt 0 0}
  #parentPrintReport.native-reading-report .pdf-response-picture{float:left;width:80pt;height:68pt;margin:0 9pt 5pt 0}
  #parentPrintReport.native-reading-report .pdf-response-picture svg{width:100%;height:100%;display:block}
  #parentPrintReport.native-reading-report .pdf-character-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12pt;margin-bottom:12pt;break-inside:avoid}
  #parentPrintReport.native-reading-report .pdf-character-grid>div{display:grid;grid-template-columns:65pt 1fr;gap:3pt 8pt;align-items:center}
  #parentPrintReport.native-reading-report .pdf-character-grid svg{width:65pt;height:65pt;grid-row:1/3}
  #parentPrintReport.native-reading-report .pdf-character-grid small{font-size:8pt}
  #parentPrintReport.native-reading-report .pdf-diagram{width:72%;margin:0 auto 12pt}
  #parentPrintReport.native-reading-report .pdf-diagram svg{display:block;width:100%;height:auto}
 }
 `;document.head.append(style);}return host;
}
async function printParentReport(){
 if(!teacherReport.unlocked||!teacherReport.report)return;const host=prepareFullPrintReport(teacherReport.report);
 const images=[...host.querySelectorAll('img')].map(image=>image.decode());const atlases=[...new Set(teacherReport.report.rows.filter(row=>row.picture).map(row=>row.picture.atlas))];
 await Promise.all([...images,...atlases.map(async source=>{const image=new Image();image.src=source;await image.decode();})]);await document.fonts.ready;
 const previousTitle=document.title;document.title='Reading assessment - '+assessmentSlug+' - '+teacherReport.report.level+' - '+teacherReport.report.student_id;
 document.body.classList.add('printing-parent-report');try{window.print();}finally{document.body.classList.remove('printing-parent-report');document.title=previousTitle;}
}
