 let menuBTN=document.getElementById("menuBTN");
let navbar=document.getElementById("navbar");
let Mobileview=document.getElementById("Mobileview");
let contener=document.getElementById("contener");
let backbtn=document.getElementById("backbtn");


menuBTN.addEventListener("click",function(){
    navbar.style.display="none";
    contener.style.display="none";
    Mobileview.style.display="flex"

});

backbtn.addEventListener("click",function(){
    Mobileview.style.display="none"
    navbar.style.display="flex";
    contener.style.display="flex";
    

});







a=true;
var typed = new Typed('#codetext', {
     strings: ['"Hello world"', '  I am Anuj Zanje. ',' A frontend Developer ','Python Developer','Video Editor','Photo Editor', 'Git Hub: AnujZanje1142',
    'Linkedin: Anuj Zanje'],
     typeSpeed: 100,
     loop:true
   });

   //auto text//

 


// function copyToClipBoard()   

const typing = new AutoTyping('#demo', ['This is an auto text effect!'], {
    speed: 50,
  });
  
  typing.start();





 let sections=document.querySelectorAll('section')
 window.onscroll= () =>{
     sections.forEach(sec =>{
         let top = window.scrollY;
         let offset =sec.offsetTop -150;
         let height=sec.offsetHeight;

         if(top >= offset && top<offset + height){
             sec.classList.add('show-animate');
         }
         else{
             sec.classList.remove('show-animate');
         }
     })
 }
