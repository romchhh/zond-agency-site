const shots=[...document.querySelectorAll('.image-button')];
const modal=document.querySelector('#lightbox');
const large=document.querySelector('#large-image');
const caption=document.querySelector('#large-caption');
let current=0;
function show(index){current=(index+shots.length)%shots.length;const thumb=shots[current].querySelector('img');large.src=thumb.src;large.alt=thumb.alt;caption.textContent=`${String(current+1).padStart(2,'0')} / ${shots.length} — ${thumb.alt}`;}
shots.forEach((button,index)=>button.addEventListener('click',()=>{show(index);modal.showModal();document.body.style.overflow='hidden';}));
modal.querySelector('.close').addEventListener('click',()=>modal.close());
modal.querySelector('.previous').addEventListener('click',()=>show(current-1));
modal.querySelector('.next').addEventListener('click',()=>show(current+1));
modal.addEventListener('close',()=>{document.body.style.overflow='';shots[current].focus();});
modal.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'){event.preventDefault();show(current-1);}if(event.key==='ArrowRight'){event.preventDefault();show(current+1);}});
