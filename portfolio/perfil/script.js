let estrellas=document.getElementById ('estrellas');
let skills=document.getElementById ('skills');
let otoño=document.getElementById ('otoño');


window.addEventListener('scroll', function() {
    let value = window.scrollY;
   
    estrellas.style.left = value * 0.25 + 'px';
    skills.style.top = value * 1.05 + 'px';
    otoño.style.top = value * 0 + 'px';
    
  
})