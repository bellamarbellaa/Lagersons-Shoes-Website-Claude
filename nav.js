(function(){function init(){var t=document.querySelector('.navtoggle'),n=document.querySelector('.hdr nav');if(!t||!n)return;function set(o){n.classList.toggle('open',o);t.setAttribute('aria-expanded',o?'true':'false');t.innerHTML=o?'&#10005;':'&#9776;';t.setAttribute('aria-label',o?'Tutup menu':'Buka menu')}
t.addEventListener('click',function(e){e.stopPropagation();set(!n.classList.contains('open'))});
n.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
document.addEventListener('click',function(e){if(n.classList.contains('open')&&!n.contains(e.target)&&e.target!==t)set(false)});
document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
window.addEventListener('resize',function(){if(window.innerWidth>760)set(false)});}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',init):init();})();
