let estrellas=document.getElementById ('estrellas');
let luna=document.getElementById ('luna');
let paisaje=document.getElementById ('paisaje');
let text=document.getElementById ('text');
let zorro=document.getElementById ('zorro');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    text.style.marginRight = value * 4 + 'px';
    estrellas.style.left = value * 0.25 + 'px';
    luna.style.top = value * 1.05 + 'px';
    paisaje.style.top = value * 0 + 'px';
    
  
})