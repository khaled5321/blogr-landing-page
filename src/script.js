
let accordion = document.querySelectorAll(".accordion");
let hamMenu=document.querySelector('#ham-menu');
let mobileMenu=document.querySelector('#mobile-menu');
let hamChildren=hamMenu.children;
//ham-menu
hamMenu.addEventListener('click',function(){
    mobileMenu.classList.toggle('scale-0');
    hamChildren[0].classList.toggle('span1');
    hamChildren[1].classList.toggle('scale-0');
    hamChildren[2].classList.toggle('span3');
});

//accordion menu
for (let i = 0; i < accordion.length; i++) {

  accordion[i].addEventListener("click", function() {
    let panel = this.nextElementSibling;
    accordion[i].classList.toggle('rotate');
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.paddingBottom = '0px';
        panel.style.paddingTop = '0px';
      } else {
        panel.style.maxHeight = 'min-content';
        panel.style.paddingBottom = '1.25rem';
        panel.style.paddingTop = '1.25rem';
      } 
  });
} 