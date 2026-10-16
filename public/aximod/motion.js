(()=>{'use strict';
const header=document.querySelector('header');let ticking=false;
function updateHeader(){header.classList.toggle('scrolled',scrollY>24);ticking=false}
addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(updateHeader)}},{passive:true});updateHeader();
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if(reduced.matches||!('IntersectionObserver' in window))return;
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.08});
const nodes=document.querySelectorAll('.about-main,.kits>h2,.kits>.section-intro,.kit-card,.engineering-copy,.vehicle-applications>h2,.vehicle-card,.process>h2,.process-grid article,.brand-story>div,.brief-inputs>div,.brief-inputs li,.faq>div,.contact>div');
nodes.forEach(node=>{if(node.matches('.kit-card,.vehicle-card,.process-grid article'))node.style.setProperty('--reveal-delay',`${Array.from(node.parentElement.children).indexOf(node)*90}ms`);node.classList.add('reveal-pending');observer.observe(node)});
reduced.addEventListener('change',e=>{if(e.matches){observer.disconnect();nodes.forEach(node=>node.classList.add('is-visible'))}});
})();
