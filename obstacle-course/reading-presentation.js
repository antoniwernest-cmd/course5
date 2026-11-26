/* Small reading cues, with no change to the words or independent-reading audio. */
const compoundStarts={notebook:'note',notebooks:'note',homemade:'home',sunnyday:'sunny',sunlight:'sun',sunshine:'sun',stopwatch:'stop',teamwork:'team',classroom:'class',playground:'play',backpack:'back',sandstone:'sand',limestone:'lime',tabletop:'table',footprint:'foot',footprints:'foot',waterproof:'water',downhill:'down',uphill:'up',someone:'some',something:'some',everyone:'every',everything:'every',afternoon:'after',anyone:'any',outside:'out',inside:'in'};
childText=function(text,level){
 const value=String(text);if(!['E','F','G'].includes(level))return escapeHTML(value);
 let offset=0;
 return value.split(/([A-Za-z]+(?:[’'][A-Za-z]+)?)/).map((word,index)=>{
  const fromInText=offset;offset+=word.length;
  if(index%2===0)return escapeHTML(word);const lower=word.toLowerCase(),styles=Array.from(word,()=>({bold:false,mark:''}));
  const first=compoundStarts[lower];if(first)for(let i=0;i<first.length;i++)styles[i].bold=true;
  if(/^(?:soap[- ]box|life[- ]jacket|hand[- ]lens|dry[- ]bag|finish[- ]line)\b/i.test(value.slice(fromInText)))styles.forEach(style=>style.bold=true);
  const blend=/^(scr|spl|spr|squ|str|shr|thr|bl|br|cl|cr|dr|fl|fr|gl|gr|pl|pr|sc|sk|sl|sm|sn|sp|st|sw|tr|tw)(?=[a-z])/i.exec(word);
  if(blend)for(let i=0;i<blend[0].length;i++)styles[i].mark='blend';
  for(let at=lower.indexOf('ch');at>=0;at=lower.indexOf('ch',at+2))for(let i=at;i<at+2;i++)styles[i].mark='ch';
  const ending=/(ck|th|sh|ch|ng|nk|nd|nt|st|mp|ft|ld|lt|sk|sp|pt|ct|lp|lk|lf|rk|rt|ll|ff|ss|zz)(?:s|es|ed|ing)?$/i.exec(word);
  if(ending)for(let i=ending.index;i<ending.index+ending[1].length;i++)styles[i].bold=true;
  for(let at=lower.indexOf('ing');at>=0;at=lower.indexOf('ing',at+3))for(let i=at;i<at+3;i++)styles[i].bold=true;
  let html='',from=0;while(from<word.length){let to=from+1;while(to<word.length&&styles[to].bold===styles[from].bold&&styles[to].mark===styles[from].mark)to++;
   let part=escapeHTML(word.slice(from,to));if(styles[from].bold)part='<strong class="reading-bold">'+part+'</strong>';if(styles[from].mark)part='<mark class="reading-'+styles[from].mark+'">'+part+'</mark>';html+=part;from=to;
  }return html;
 }).join('');
};
