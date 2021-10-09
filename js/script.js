let iconHamburger = document.querySelector(".icon-hamburger");

iconHamburger.addEventListener("click", () => {
    let nav = document.querySelector(".nav");
    nav.classList.toggle("nav-activo")
    if(nav.classList[1] == "nav-activo"){
        document.querySelector("body").style.overflow = "hidden";
        iconHamburger.src = "./images/icon-close.svg";
    }else{
        document.querySelector("body").style.overflow = "auto";
        iconHamburger.src = "./images/icon-hamburger.svg";
    }
})