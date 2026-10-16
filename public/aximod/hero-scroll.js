/* Scroll-driven assembly over an always-visible city photograph. */
(()=>{'use strict';
const hero=document.querySelector('.city-hero'),stage=hero?.querySelector('.city-stage'),canvas=document.querySelector('#assembly-canvas');if(!hero||!canvas)return;
const ctx=canvas.getContext('2d');if(!ctx)return;
const fallback=hero.querySelector('.assembly-fallback'),buttons=[...hero.querySelectorAll('[data-stage]')],bar=hero.querySelector('.assembly-progress i'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
const rotor=new Image(),caliper=new Image(),car=new Image();let ready=false,W=0,H=0,dpr=1,top=0,travel=1,raf=0,manual=.98;
const clamp=v=>Math.max(0,Math.min(1,v)),ease=v=>{v=clamp(v);return v*v*(3-2*v)},mix=(a,b,p)=>a+(b-a)*p;
function measure(){W=stage.clientWidth;H=stage.clientHeight;dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);top=hero.getBoundingClientRect().top+scrollY;travel=Math.max(1,hero.offsetHeight-H);request()}
function drawPart(img,cx,cy,r,opacity=1,offset=0){if(opacity<=0)return;ctx.save();ctx.globalAlpha=opacity;const scale=r/573.57;ctx.translate(cx+offset,cy);ctx.drawImage(img,-631*scale,-624.65*scale,img.naturalWidth*scale,img.naturalHeight*scale);ctx.restore()}
function render(){raf=0;if(!ready||!W)return;const p=reduced.matches?manual:clamp((scrollY-top)/travel),mobile=W<760;
const pad=ease((p-.15)/.16),wheel=ease((p-.39)/.17),zoom=ease((p-.59)/.21),body=ease((p-.73)/.14);
const carWidth=W*(mobile?.96:.65),s=carWidth/1672,carLeft=W*(mobile?.02:.33),ground=mobile?H-Math.max(H,W*1870/841)*.07:H*.81,endX=carLeft+1366*s,endY=ground-134*s;
const startR=mobile?W*.35:Math.min(W*.18,H*.28),cx=mix(W*(mobile?.50:.76),endX,zoom),cy=mix(mobile?H-W*.43:H*.60,endY,zoom),r=mix(startR,134*s,zoom);
ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);
// A soft contact shadow makes the staged assembly sit within the city scene.
ctx.save();ctx.globalAlpha=(1-body)*.28;const shadow=ctx.createRadialGradient(cx,cy+r,1,cx,cy+r,r);shadow.addColorStop(0,'#000');shadow.addColorStop(1,'#0000');ctx.translate(0,(cy+r)*.8);ctx.scale(1,.2);ctx.fillStyle=shadow;ctx.fillRect(cx-r,cy,2*r,2*r);ctx.restore();
drawPart(rotor,cx,cy,r*.78,1-body);drawPart(caliper,cx,cy,r*.78,pad*(1-body),-(1-pad)*r*.6);
// Use the exact front wheel of the final car: the last two phases share geometry.
if(wheel>0&&body<1){ctx.save();ctx.globalAlpha=wheel*(1-body);ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.clip();const ws=r/134;ctx.drawImage(car,cx-1366*ws,cy-620*ws,1672*ws,941*ws);ctx.restore()}
if(body>0){ctx.save();ctx.globalAlpha=body;ctx.drawImage(car,carLeft,endY-620*s,carWidth,941*s);ctx.restore()}
const phase=p<.15?0:p<.39?1:p<.73?2:3;buttons.forEach((b,i)=>{b.classList.toggle('active',i===phase);if(i===phase)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current')});if(bar)bar.style.transform=`scaleX(${p})`;canvas.dataset.phase=String(phase+1);canvas.dataset.progress=p.toFixed(3);canvas.dataset.frame=String(Math.round(p*360));
}
function request(){if(!raf)raf=requestAnimationFrame(render)}
buttons.forEach(b=>b.addEventListener('click',()=>{let i=Number(b.dataset.stage),p=[.02,.31,.57,.96][i];manual=p;if(reduced.matches){request();return}window.scrollTo({top:top+travel*p,behavior:'smooth'})}));
addEventListener('scroll',request,{passive:true});addEventListener('resize',measure,{passive:true});reduced.addEventListener('change',measure);
rotor.src='assets/scroll-rotor.webp';caliper.src='assets/scroll-caliper.webp';car.src='assets/city-car.webp';
Promise.all([rotor.decode(),caliper.decode(),car.decode()]).then(()=>{ready=true;measure();render();canvas.hidden=false;fallback.hidden=true;hero.classList.add('assembly-ready')}).catch(()=>{canvas.hidden=true;fallback.hidden=false});measure();
})();
