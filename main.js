
let themeMode =document.getElementById("theme-mode");

themeMode.addEventListener("click", function(){
    if (themeMode.textContent ==="☀️"){
        themeMode.textContent ="🌜";
        themeMode.style.background ="black";
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