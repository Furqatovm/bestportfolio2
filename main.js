
let themeMode =document.getElementById("theme-mode");
let bodyy =document.querySelector("body");

themeMode.addEventListener("click", function(){
  if (document.body.classList.contains("darkmodee")) {
    header.style.backgroundColor = "#303030"; // dark background
  } else {
    header.style.backgroundColor = "#ffffff"; // light background
 }
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

window.addEventListener("scroll", function () {
  const circle = document.getElementById("circle");
  const theme = document.getElementById("theme-mode");

  if (window.scrollY > 0) {
    header.classList.add("sticky");
    circle.classList.add("circle2");

    if (document.body.classList.contains("darkmodee")) {
      header.style.backgroundColor = "#303030";
      header.style.boxShadow ="2px 3px 10px rgba(0, 0, 0, 0.607)"
    } else {
      header.style.backgroundColor = "#ffffff";
      header.style.boxShadow =" 2px 3px 10px lightgray"
    }
  } else {
    header.classList.remove("sticky");
    circle.classList.remove("circle2");

    if (document.body.classList.contains("darkmodee")) {
      header.style.backgroundColor = "#1f1f1f";
      header.style.boxShadow ="none";
    } else {
      header.style.backgroundColor = "#e6e6e6"; // MUHIM: Qayta tiklash
      header.style.boxShadow ="none";
    }

    theme.style.backgroundColor = "#fff";
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



document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const duration = 3000;
    const startTime = performance.now();

    function animate(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = value;
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        counter.textContent = target;
      }
    }

    requestAnimationFrame(animate);
  });
});



function ozgar(){
  document.body.classList.toggle("darkmodee");
}

const scrollBtn = document.getElementById('circle');

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });