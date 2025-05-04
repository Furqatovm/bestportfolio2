
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
    const theme =  this.document.getElementById("theme-mode");
    if (window.scrollY > 0) { // When scrolled more than 100px
      header.classList.add('sticky');
      circle.classList.add("circle2");
      theme.style.backgroundColor ="#e6e6e6";
    } else {
      header.classList.remove('sticky');
      circle.classList.remove("circle2");
      theme.style.backgroundColor ="#fff";
    }
  });
  


function changeSkills(){
  let skills =document.getElementById("skills");
  let Tool =document.getElementById("Tool");
  let right1 =document.getElementById("right1");
  let right2 = document.getElementById("right2");


  skills.addEventListener("click", function(){
    right1.style.display ="flex";
    right2.style.display ='none';
    skills.classList.add("skill-tugma");
    Tool.classList.remove("skill-tugma");
    skills.classList.remove("none-tugma");
    console.log(skills)
  })
    Tool.addEventListener("click", function(){
      right1.style.display ="none";
      right2.style.display ="flex";
      skills.classList.remove("skill-tugma");
      skills.classList.add("none-tugma");
      Tool.classList.add("skill-tugma");
    })
};


changeSkills();