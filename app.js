var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
} 


myDropDowns = document.querySelectorAll(".myDropDown");
myDropMenus = document.querySelectorAll(".myDropMenu");

for (let i = 0; i < myDropDowns.length; i++) {
  myDropDowns[i].addEventListener("click", (e)=>{
    e.preventDefault();
    let target = myDropMenus[i]
    if(target.classList.contains("oculto") == true ){
      target.classList.remove("oculto")
    }else{
      target.classList.add("oculto")
    }
  })
}

 async function instagram(){
  await window.open('https://instagram.com/larimeedominicana?igshid=4cnn76fg0byt');
 }
