let iconHamburger = document.querySelector(".nav__icon-hamburger");

iconHamburger.addEventListener("click", () => {
    let nav = document.querySelector(".nav");
    nav.classList.toggle("nav-activo")
    if(nav.classList[1] == "nav-activo"){
        document.querySelector("body").style.overflow = "hidden"
    }else{
        document.querySelector("body").style.overflow = "auto"
    }
})