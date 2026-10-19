(function(){var d=document,h=d.documentElement;h.classList.add('js');
var st=d.getElementById('strip'),hd=d.getElementById('head'),ft=d.getElementById('foot');
function m(){h.style.setProperty('--strip-h',st.offsetHeight+'px');h.style.setProperty('--head-h',hd.offsetHeight+'px');if(ft)h.style.setProperty('--ft',ft.offsetHeight+'px')}
m();addEventListener('resize',m);addEventListener('load',m);if(d.fonts&&d.fonts.ready)d.fonts.ready.then(m);
/* menu */
var tg=d.querySelector('.tog'),sh=d.getElementById('sheet'),y=0,bs=d.body.style;
function open(){y=scrollY;sh.hidden=false;tg.setAttribute('aria-expanded','true');tg.setAttribute('aria-label','Закрыть меню');bs.position='fixed';bs.top=-y+'px';bs.left='0';bs.right='0';h.style.overflow='hidden'}
function close(f){if(sh.hidden)return;sh.hidden=true;tg.setAttribute('aria-expanded','false');tg.setAttribute('aria-label','Открыть меню');bs.position='';bs.top='';bs.left='';bs.right='';h.style.overflow='';scrollTo(0,y);if(f!==false)tg.focus()}
tg.addEventListener('click',function(){if(sh.hidden)open();else close()});
d.addEventListener('keydown',function(e){if(sh.hidden)return;if(e.key==='Escape'){close();return}
 if(e.key==='Tab'){var f=[tg].concat([].slice.call(sh.querySelectorAll('a'))),i=f.indexOf(d.activeElement);
  if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&(i===f.length-1||i<0)){e.preventDefault();f[0].focus()}}});
[].forEach.call(sh.querySelectorAll('a'),function(a){a.addEventListener('click',function(e){var p=a.getAttribute('href').split('#'),t=p[1]&&d.getElementById(p[1]);
 if(!t){close(false);return}e.preventDefault();close(false);t.scrollIntoView();history.replaceState(null,'','#'+p[1])})});
addEventListener('resize',function(){if(innerWidth>960)close(false)});
/* sliders */
[].forEach.call(d.querySelectorAll('.car'),function(c){var r=c.querySelector('.car-rail'),it=[].slice.call(r.children),ctl=c.querySelector('.car-ctl'),pv=c.querySelector('.car-prev'),nx=c.querySelector('.car-next'),dots=c.querySelector('.car-dots');
 function stp(){return it.length>1?it[1].offsetLeft-it[0].offsetLeft:r.clientWidth}
 function upd(){var mx=r.scrollWidth-r.clientWidth,i=Math.round(r.scrollLeft/stp());[].forEach.call(dots.children,function(b,k){if(k===i)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current')});pv.disabled=r.scrollLeft<=2;nx.disabled=r.scrollLeft>=mx-2}
 function build(){var mx=r.scrollWidth-r.clientWidth;ctl.hidden=mx<4;dots.innerHTML='';var n=Math.max(1,it.length-Math.round(r.clientWidth/stp())+1);
  for(var i=0;i<n;i++)(function(i){var b=d.createElement('button');b.type='button';b.setAttribute('aria-label','Фото '+(i+1));b.addEventListener('click',function(){r.scrollTo({left:i*stp(),behavior:'smooth'})});dots.appendChild(b)})(i);upd()}
 pv.addEventListener('click',function(){r.scrollBy({left:-stp(),behavior:'smooth'})});nx.addEventListener('click',function(){r.scrollBy({left:stp(),behavior:'smooth'})});
 r.addEventListener('scroll',function(){requestAnimationFrame(upd)});
 r.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();nx.click()}else if(e.key==='ArrowLeft'){e.preventDefault();pv.click()}});
 addEventListener('resize',build);addEventListener('load',build);build()});
/* reveal: opacity only */
var fx=[].slice.call(d.querySelectorAll('.fx'));
function on(e){e.classList.add('on')}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){on(e.target);io.unobserve(e.target)}})},{threshold:0});fx.forEach(function(e){io.observe(e)})}else fx.forEach(on);
setTimeout(function(){fx.forEach(on)},2500);
/* map on click */
var mb=d.querySelector('button.map-load');if(mb)mb.addEventListener('click',function(){var f=d.createElement('iframe');f.src=mb.getAttribute('data-src');f.title='Карта: Арт Нейл, улица Степана Разина, 2';f.setAttribute('allowfullscreen','');var bx=d.getElementById('mapbox');bx.innerHTML='';bx.appendChild(f)});
})();
