// (()=>{
// const $=s=>document.querySelector(s),PRICE=999,WA='919999999999'; // <-- your WhatsApp number, country code first, no +
// const SHAPES=['Round','Almond','Coffin','Square'],LENS=['Short','Medium','Long'];
// const COLORS=[['Milky Pink','#f6d5de'],['Dusty Rose','#dba7b5'],['Lavender','#d9cdf0'],['Mint','#cfeadf'],['Butter','#fbeec1'],['Peach','#fbd5c0'],['Baby Blue','#cfe3f5'],['Nude','#e8cdbd'],['Lilac Grey','#c9c1d6'],['Sage','#d3dfc8']];
// const FIN=['Glossy','Matte','Chrome','Velvet','Pearl','Glazed'];
// const DES=[['French','♡'],['Chrome','✦'],['Floral','❀'],['Aura','☾'],['Glitter','✧'],['Gemstones','♢'],['Swirls','〰'],['Hearts','♡'],['Minimal','＋'],['Custom','🎨']];
// const GL={Floral:'❀',Gemstones:'♢',Swirls:'〰',Hearts:'♡',Custom:'✎',Chrome:''};
// const FING=['Pinky','Ring','Middle','Index','Thumb'];
// const IDEAS=['Soft pink aura + pearl accents + chrome French tips','Lavender velvet short squares with tiny silver hearts','Mint glazed almonds with delicate white florals','Butter yellow coffin set with swirls and gemstones','Nude matte French with one glitter accent nail'];
// const S={shape:'Almond',length:'Medium',color:COLORS[0],finish:'Glossy',nails:Array(10).fill('Minimal'),sel:null,vision:'',note:'',img:''};
// const bag=[];
// const pick=a=>a[Math.floor(Math.random()*a.length)];
// const nail=(o={})=>`<span class="nail s-${o.shape||S.shape} l-${o.length||S.length} f-${o.finish||S.finish}" style="--c:${o.color||S.color[1]}"><i class="d d-${o.design||'Minimal'}">${GL[o.design]||''}</i></span>`;

// // hero decoration
// $('#heroNails').innerHTML=['#f6d5de','#d9cdf0','#cfeadf','#fbd5c0','#cfe3f5'].map((c,i)=>nail({shape:SHAPES[i%4],length:'Long',color:c,design:i%2?'Minimal':'French'})).join('');
// $('#yr').textContent=new Date().getFullYear();

// // routes
// document.querySelectorAll('.route').forEach(b=>b.onclick=()=>{
//   document.querySelectorAll('.route').forEach(x=>x.classList.toggle('on',x===b));
//   const up=b.dataset.route==='upload';$('#uploadPanel').hidden=!up;$('#createPanel').hidden=up;
//   (up?$('#uploadPanel'):$('#createPanel')).scrollIntoView({behavior:'smooth',block:'start'});render();
// });

// // upload
// const drop=$('#drop'),file=$('#file');
// function load(f){
//   if(!f||!/^image\/(jpeg|png|webp)$/.test(f.type))return alert('Please upload a JPG, PNG or WEBP image.');
//   const r=new FileReader();r.onload=e=>{S.img=f.name;$('#inspoImg').src=e.target.result;$('#polaroid').hidden=false};r.readAsDataURL(f);
// }
// file.onchange=()=>load(file.files[0]);
// drop.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();file.click()}};
// ['dragover','dragenter'].forEach(v=>drop.addEventListener(v,e=>{e.preventDefault();drop.classList.add('over')}));
// ['dragleave','drop'].forEach(v=>drop.addEventListener(v,e=>{e.preventDefault();drop.classList.remove('over')}));
// drop.addEventListener('drop',e=>load(e.dataTransfer.files[0]));
// $('#addUpload').onclick=()=>{
//   const t=$('#recreate').value.trim();
//   if(!S.img&&!t)return alert('Upload an image or describe what you want us to recreate.');
//   add({type:'Inspiration set',desc:t,img:S.img||''});
// };

// // builder render
// function render(){
//   $('#shapeOpts').innerHTML=SHAPES.map(s=>`<button class="opt ${S.shape===s?'on':''}" data-k="shape" data-v="${s}">${nail({shape:s,length:'Short',color:'#f6d5de'})}${s}</button>`).join('');
//   $('#lenOpts').innerHTML=LENS.map(s=>`<button class="opt ${S.length===s?'on':''}" data-k="length" data-v="${s}" style="grid-column:span 1">${nail({length:s,color:'#f6d5de'})}${s}</button>`).join('');
//   $('#lenOpts').style.gridTemplateColumns='repeat(3,1fr)';
//   $('#swatches').innerHTML=COLORS.map(c=>`<button class="${S.color[1]===c[1]?'on':''}" style="background:${c[1]}" title="${c[0]}" aria-label="${c[0]}" data-c="${c[0]}"></button>`).join('')+`<label>＋ Pick your own colour<input type="color" id="cp" value="${S.color[1]}"></label>`;
//   $('#cp').oninput=e=>{S.color=['Custom '+e.target.value,e.target.value];render()};
//   $('#finOpts').innerHTML=FIN.map(f=>`<button class="chip ${S.finish===f?'on':''}" data-k="finish" data-v="${f}">${f}</button>`).join('');
//   $('#desOpts').innerHTML=DES.map(d=>`<button class="chip ${S.sel===null?(S.nails.every(n=>n===d[0])?'on':''):(S.nails[S.sel]===d[0]?'on':'')}" data-d="${d[0]}">${d[1]} ${d[0]}</button>`).join('');
//   $('#applyTo').innerHTML=S.sel===null?'Applying to all nails':`Applying to ${fname(S.sel)} · <button class="link" id="allBtn">use all nails</button>`;
//   if(S.sel!==null)$('#allBtn').onclick=()=>{S.sel=null;render()};
//   const hand=(a,b,label)=>`<div><p class="hint" style="text-align:center">${label}</p><div class="hand big-n">${[...Array(5)].map((_,j)=>{const i=a+(b>0?j:-j);return `<button class="fin ${S.sel===i?'sel':''}" data-n="${i}" aria-label="${fname(i)}: ${S.nails[i]}"><span class="h">♡</span>${nail({design:S.nails[i]})}${fname(i).split(' ')[1]}</button>`}).join('')}</div></div>`;
//   $('#canvas').innerHTML=hand(4,-1,'Left hand')+hand(5,1,'Right hand');
//   $('#summary').innerHTML=sumHTML();
// }
// const fname=i=>i<5?'Left '+FING[i]:'Right '+FING[9-i],fn=fname;
// function designs(){return [...new Set(S.nails)].join(' + ')}
// function sumHTML(){return `<h4>✦ Your dream set ✦</h4><div><span>Shape</span>${S.shape}</div><div><span>Length</span>${S.length}</div><div><span>Colour</span>${S.color[0]}</div><div><span>Finish</span>${S.finish}</div><div><span>Design</span>${designs()}</div>`}

// document.addEventListener('click',e=>{
//   const t=e.target.closest('[data-k],[data-c],[data-d],[data-n]');if(!t||$('#createPanel').hidden)return;
//   if(t.dataset.k)S[t.dataset.k]=t.dataset.v;
//   else if(t.dataset.c)S.color=COLORS.find(c=>c[0]===t.dataset.c);
//   else if(t.dataset.d){S.sel===null?S.nails.fill(t.dataset.d):S.nails[S.sel]=t.dataset.d}
//   else if(t.dataset.n){const n=+t.dataset.n;S.sel=S.sel===n?null:n}
//   render();
// });
// $('#vision').oninput=e=>S.vision=e.target.value;
// $('#inspire').onclick=()=>{S.vision=pick(IDEAS);$('#vision').value=S.vision};

// // surprise
// let sur=null;
// function surprise(){
//   sur={shape:pick(SHAPES),length:pick(LENS),color:pick(COLORS),finish:pick(FIN),acc:pick(['Tiny pearl accents','Gemstone accents','Glitter accents','Chrome accents']),d:pick(DES)[0]};
//   Object.assign(S,{shape:sur.shape,length:sur.length,color:sur.color,finish:sur.finish,sel:null});S.nails.fill(sur.d);render();
//   const el=$('#surprise');el.hidden=false;
//   el.innerHTML=`<strong>Your surprise set</strong><span>${sur.shape} × ${sur.length}<br>${sur.color[0]} · ${sur.finish} finish<br>${sur.d} design · ${sur.acc}</span><div class="row"><button class="btn" id="love">♡ I love it, add to bag</button><button class="btn ghost" id="again">↻ Try another</button></div>`;
//   $('#love').onclick=()=>{S.vision=S.vision||`${sur.d} with ${sur.acc.toLowerCase()}`;addSet();el.hidden=true};$('#again').onclick=surprise;
// }
// $('#surpriseBtn').onclick=surprise;
// function addSet(){add({type:'Custom set',shape:S.shape,length:S.length,color:S.color[0],finish:S.finish,design:designs(),perNail:S.nails.map((d,i)=>fn(i)+': '+d).join(', '),desc:S.vision})}
// $('#addBtn').onclick=addSet;

// // bag
// function add(item){bag.push(item);updBag();$('#drawer').hidden=false}
// function updBag(){
//   $('#bagCount').textContent=bag.length;$('#bagTotal').textContent='₹'+bag.length*PRICE;
//   $('#bagItems').innerHTML=bag.length?bag.map((b,i)=>`<div class="item"><strong>${b.type} · ₹${PRICE}</strong>${b.shape?`<span>${b.shape}, ${b.length}, ${b.color}, ${b.finish}</span><span>${b.design}</span>`:`<span>${b.img?'Image: '+b.img:'Description only'}</span>`}<button data-rm="${i}">Remove</button></div>`).join(''):'<p>Your bag is empty. Design a set to begin.</p>';
// }
// $('#bagItems').onclick=e=>{if(e.target.dataset.rm){bag.splice(+e.target.dataset.rm,1);updBag()}};
// $('#bagOpen').onclick=()=>$('#drawer').hidden=false;$('#bagClose').onclick=()=>$('#drawer').hidden=true;
// $('#checkout').onclick=()=>{
//   if(!bag.length)return;
//   let m='CUSTOM NAIL ORDER 💅\n';
//   bag.forEach((b,i)=>{
//     m+=`\n*Set ${i+1}*\n`;
//     if(b.shape)m+=`Shape: ${b.shape}\nLength: ${b.length}\nBase colour: ${b.color}\nFinish: ${b.finish}\nDesign: ${b.design}\nPer nail: ${b.perNail}\n`;
//     m+=`Customer description:\n"${b.desc||'-'}"\nInspiration image: ${b.img?'Attached by customer separately ('+b.img+')':'None'}\n`;
//   });
//   m+=`\nEstimated price: ₹${bag.length*PRICE}\nHi! I'd like to order this personalised nail set. ✨`;
//   window.open(`https://wa.me/${WA}?text=${encodeURIComponent(m)}`,'_blank','noopener');
// };
// updBag();render();
// })();

(()=>{
const $=s=>document.querySelector(s),PRICE=999,WA='919999999999'; // <-- your WhatsApp number, country code first, no +
const SHAPES=['Round','Almond','Coffin','Square'],LENS=['Short','Medium','Long'];
const COLORS=[['Milky Pink','#f6d5de'],['Dusty Rose','#dba7b5'],['Lavender','#d9cdf0'],['Mint','#cfeadf'],['Butter','#fbeec1'],['Peach','#fbd5c0'],['Baby Blue','#cfe3f5'],['Nude','#e8cdbd'],['Lilac Grey','#c9c1d6'],['Sage','#d3dfc8']];
const FIN=['Glossy','Matte','Chrome','Velvet','Pearl','Glazed'];
const DES=[['French','♡'],['Chrome','✦'],['Floral','❀'],['Aura','☾'],['Glitter','✧'],['Gemstones','♢'],['Swirls','〰'],['Hearts','♡'],['Minimal','＋'],['Custom','🎨']];
const GL={Floral:'❀',Gemstones:'♢',Swirls:'〰',Hearts:'♡',Custom:'✎',Chrome:''};
const FING=['Pinky','Ring','Middle','Index','Thumb'];
const IDEAS=['Soft pink aura + pearl accents + chrome French tips','Lavender velvet short squares with tiny silver hearts','Mint glazed almonds with delicate white florals','Butter yellow coffin set with swirls and gemstones','Nude matte French with one glitter accent nail'];
const S={shape:'Almond',length:'Medium',color:COLORS[0],finish:'Glossy',nails:Array(10).fill('Minimal'),sel:null,vision:'',note:'',img:''};
const bag=[];
const pick=a=>a[Math.floor(Math.random()*a.length)];
const nail=(o={})=>`<span class="nail s-${o.shape||S.shape} l-${o.length||S.length} f-${o.finish||S.finish}" style="--c:${o.color||S.color[1]}"><i class="d d-${o.design||'Minimal'}">${GL[o.design]||''}</i></span>`;

// hero decoration
$('#heroNails').innerHTML=['#f6d5de','#d9cdf0','#cfeadf','#fbd5c0','#cfe3f5'].map((c,i)=>nail({shape:SHAPES[i%4],length:'Long',color:c,design:i%2?'Minimal':'French'})).join('');
$('#yr').textContent=new Date().getFullYear();

// routes
document.querySelectorAll('.route').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.route').forEach(x=>x.classList.toggle('on',x===b));
  const up=b.dataset.route==='upload';$('#uploadPanel').hidden=!up;$('#createPanel').hidden=up;
  (up?$('#uploadPanel'):$('#createPanel')).scrollIntoView({behavior:'smooth',block:'start'});render();
});

// upload
const drop=$('#drop'),file=$('#file');
function load(f){
  if(!f||!/^image\/(jpeg|png|webp)$/.test(f.type))return alert('Please upload a JPG, PNG or WEBP image.');
  const r=new FileReader();r.onload=e=>{S.img=f.name;$('#inspoImg').src=e.target.result;$('#polaroid').hidden=false};r.readAsDataURL(f);
}
file.onchange=()=>load(file.files[0]);
drop.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();file.click()}};
['dragover','dragenter'].forEach(v=>drop.addEventListener(v,e=>{e.preventDefault();drop.classList.add('over')}));
['dragleave','drop'].forEach(v=>drop.addEventListener(v,e=>{e.preventDefault();drop.classList.remove('over')}));
drop.addEventListener('drop',e=>load(e.dataTransfer.files[0]));
$('#addUpload').onclick=()=>{
  const t=$('#recreate').value.trim();
  if(!S.img&&!t)return alert('Upload an image or describe what you want us to recreate.');
  add({type:'Inspiration set',desc:t,img:S.img||''});
};

// builder render
function render(){
  $('#shapeOpts').innerHTML=SHAPES.map(s=>`<button class="opt ${S.shape===s?'on':''}" data-k="shape" data-v="${s}">${nail({shape:s,length:'Short',color:'#f6d5de'})}${s}</button>`).join('');
  $('#lenOpts').innerHTML=LENS.map(s=>`<button class="opt ${S.length===s?'on':''}" data-k="length" data-v="${s}" style="grid-column:span 1">${nail({length:s,color:'#f6d5de'})}${s}</button>`).join('');
  $('#lenOpts').style.gridTemplateColumns='repeat(3,1fr)';
  $('#swatches').innerHTML=COLORS.map(c=>`<button class="${S.color[1]===c[1]?'on':''}" style="background:${c[1]}" title="${c[0]}" aria-label="${c[0]}" data-c="${c[0]}"></button>`).join('')+`<label>＋ Pick your own colour<input type="color" id="cp" value="${S.color[1]}"></label>`;
  $('#cp').oninput=e=>{S.color=['Custom '+e.target.value,e.target.value];render()};
  $('#finOpts').innerHTML=FIN.map(f=>`<button class="chip ${S.finish===f?'on':''}" data-k="finish" data-v="${f}">${f}</button>`).join('');
  $('#desOpts').innerHTML=DES.map(d=>`<button class="chip ${S.sel===null?(S.nails.every(n=>n===d[0])?'on':''):(S.nails[S.sel]===d[0]?'on':'')}" data-d="${d[0]}">${d[1]} ${d[0]}</button>`).join('');
  $('#applyTo').innerHTML=S.sel===null?'Applying to all nails':`Applying to ${fname(S.sel)} · <button class="link" id="allBtn">use all nails</button>`;
  if(S.sel!==null)$('#allBtn').onclick=()=>{S.sel=null;render()};
  const hand=(a,b,label)=>`<div><p class="hint" style="text-align:center">${label}</p><div class="hand big-n">${[...Array(5)].map((_,j)=>{const i=a+(b>0?j:-j);return `<button class="fin ${S.sel===i?'sel':''}" data-n="${i}" aria-label="${fname(i)}: ${S.nails[i]}"><span class="h">♡</span>${nail({design:S.nails[i]})}${fname(i).split(' ')[1]}</button>`}).join('')}</div></div>`;
  $('#canvas').innerHTML=hand(4,-1,'Left hand')+hand(5,1,'Right hand');
  $('#summary').innerHTML=sumHTML();
}
const fname=i=>i<5?'Left '+FING[i]:'Right '+FING[9-i],fn=fname;
function designs(){return [...new Set(S.nails)].join(' + ')}
function sumHTML(){return `<h4>✦ Your dream set ✦</h4><div><span>Shape</span>${S.shape}</div><div><span>Length</span>${S.length}</div><div><span>Colour</span>${S.color[0]}</div><div><span>Finish</span>${S.finish}</div><div><span>Design</span>${designs()}</div>`}

document.addEventListener('click',e=>{
  const t=e.target.closest('[data-k],[data-c],[data-d],[data-n]');if(!t||$('#createPanel').hidden)return;
  if(t.dataset.k)S[t.dataset.k]=t.dataset.v;
  else if(t.dataset.c)S.color=COLORS.find(c=>c[0]===t.dataset.c);
  else if(t.dataset.d){S.sel===null?S.nails.fill(t.dataset.d):S.nails[S.sel]=t.dataset.d}
  else if(t.dataset.n){const n=+t.dataset.n;S.sel=S.sel===n?null:n}
  render();
});
$('#vision').oninput=e=>S.vision=e.target.value;
$('#inspire').onclick=()=>{S.vision=pick(IDEAS);$('#vision').value=S.vision};

// surprise
let sur=null;
function surprise(){
  sur={shape:pick(SHAPES),length:pick(LENS),color:pick(COLORS),finish:pick(FIN),acc:pick(['Tiny pearl accents','Gemstone accents','Glitter accents','Chrome accents']),d:pick(DES)[0]};
  Object.assign(S,{shape:sur.shape,length:sur.length,color:sur.color,finish:sur.finish,sel:null});S.nails.fill(sur.d);render();
  const el=$('#surprise');el.hidden=false;
  el.innerHTML=`<strong>Your surprise set</strong><span>${sur.shape} × ${sur.length}<br>${sur.color[0]} · ${sur.finish} finish<br>${sur.d} design · ${sur.acc}</span><div class="row"><button class="btn" id="love">♡ I love it, add to bag</button><button class="btn ghost" id="again">↻ Try another</button></div>`;
  $('#love').onclick=()=>{S.vision=S.vision||`${sur.d} with ${sur.acc.toLowerCase()}`;addSet();el.hidden=true};$('#again').onclick=surprise;
}
$('#surpriseBtn').onclick=surprise;
function addSet(){add({type:'Custom set',shape:S.shape,length:S.length,color:S.color[0],finish:S.finish,design:designs(),perNail:S.nails.map((d,i)=>fn(i)+': '+d).join(', '),desc:S.vision})}
$('#addBtn').onclick=addSet;

// bag
function add(item){bag.push(item);updBag();$('#drawer').hidden=false}
const total=()=>bag.reduce((a,b)=>a+(b.price||PRICE),0);
function updBag(){
  $('#bagCount').textContent=bag.length;$('#bagTotal').textContent='₹'+total();
  $('#bagItems').innerHTML=bag.length?bag.map((b,i)=>`<div class="item"><strong>${b.type} · ₹${b.price||PRICE}</strong>${b.shape?`<span>${b.shape}, ${b.length}, ${b.color}, ${b.finish}</span><span>${b.design}</span>`:`<span>${b.img?'Image: '+b.img:'Description only'}</span>`}<button data-rm="${i}">Remove</button></div>`).join(''):'<p>Your bag is empty. Design a set to begin.</p>';
}
$('#bagItems').onclick=e=>{if(e.target.dataset.rm){bag.splice(+e.target.dataset.rm,1);updBag()}};
$('#bagOpen').onclick=()=>$('#drawer').hidden=false;$('#bagClose').onclick=()=>$('#drawer').hidden=true;
$('#checkout').onclick=()=>{
  if(!bag.length)return;
  let m='CUSTOM NAIL ORDER 💅\n';
  bag.forEach((b,i)=>{
    m+=`\n*Set ${i+1}${b.type.startsWith('Ready')?' - '+b.type:''}* (₹${b.price||PRICE})\n`;
    if(b.shape)m+=`Shape: ${b.shape}\nLength: ${b.length}\nBase colour: ${b.color}\nFinish: ${b.finish}\nDesign: ${b.design}\nPer nail: ${b.perNail}\n`;
    m+=`Customer description:\n"${b.desc||'-'}"\nInspiration image: ${b.img?'Attached by customer separately ('+b.img+')':'None'}\n`;
  });
  m+=`\nEstimated price: ₹${total()}\nHi! I'd like to order this personalised nail set. ✨`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(m)}`,'_blank','noopener');
};
// ready-made catalogue
document.querySelectorAll('.card').forEach(c=>c.addEventListener('click',e=>{
  const a=e.target.dataset.act;if(!a)return;const d=c.dataset;
  if(a==='add')add({type:'Ready-made: '+d.name,shape:d.shape,length:d.length,color:d.color,finish:d.finish,design:d.design,perNail:'All nails: '+d.design,desc:'',price:+d.price});
  else{Object.assign(S,{shape:d.shape,length:d.length,color:[d.color,d.hex],finish:d.finish,sel:null,vision:'Based on "'+d.name+'"'});S.nails.fill(d.design);
    document.querySelector('[data-route=create]').click();$('#vision').value=S.vision;render()}
}));
updBag();render();
})();
