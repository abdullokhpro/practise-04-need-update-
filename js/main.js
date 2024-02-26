let navBar = document.getElementById ("header__nav-buttons__menu");
let navList = document.getElementById ("header__nav__list");
let backtop = document.getElementById ("backtop");
let body = document.querySelector("body");
let darkMode = document.querySelector(".dark-mode");
let navshrink = document.getElementById ("navshrink")


darkMode.addEventListener("click", function(){
    body.classList.toggle("dark");
})
window.addEventListener("scroll", function() {
    showBacktop();
    showNavShrink();
})


navBar.addEventListener("click", function() {
    navList.classList.toggle("show-nav__list")
})

function showBacktop(){
    if (scrollY>200){
        backtop.classList.add("show-backtop")
    }

    else {
        backtop.classList.remove("show-backtop")
    }
} 

function showNavShrink(){
    if (scrollY>0){
        navshrink.classList.add("show-navshrink")
    }

    else {
        navshrink.classList.remove("show-navshrink")
    }
} 

$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHover: true,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        }
    );
});