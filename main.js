
let themeMode =document.getElementById("theme-mode");

themeMode.addEventListener("click", function(){
    if (themeMode.textContent ==="☀️"){
        themeMode.textContent ="🌜";
        themeMode.style.background ="hsl(0, 0%, 19%)";
        themeMode.style.paddingLeft ="0";
        themeMode.style.paddingRight ="30px";
    } 
    else{
        themeMode.textContent ="☀️";
        themeMode.style.backgroundColor ="#fff";
        themeMode.style.paddingRight ="0";
        themeMode.style.paddingLeft ="30px";
    }
})


window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const circle =this.document.getElementById("circle");
    if (window.scrollY > 1) { // When scrolled more than 100px
      header.classList.add('sticky');
      circle.classList.add("circle2");
    } else {
      header.classList.remove('sticky');
      circle.classList.remove("circle2");
    }
  });
  