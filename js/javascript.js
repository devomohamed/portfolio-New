//link swipe in the section from links & icons

let tabs = document.querySelectorAll("nav .container ul li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll("section");
let divsArray = Array.from(divs);
tabsArray.forEach((ele) => {
    ele.addEventListener("click", function(e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
        document.querySelector(e.currentTarget.dataset.cont).classList.add("active");
        $("body").css("overflow", "auto");
    });
});

// toggle menu turn on and of with active class 
$("nav .container .ToggleMenu").click(function() {
    $("nav .container ul").toggleClass("active");
});

// close button  remove class active
$(".closebutton").click(function() {
    divsArray.forEach((div) => {
        div.style.display = "none";
        div.classList.remove("active");
    });
    $(".home").css("display", "block");
    $("body").css("overflow", "hidden");
    // $("section").classList.remove("active");
});
// owl carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})

// type script writer
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Developer')
    .pauseFor(3000)
    .deleteAll()
    .typeString('Designer')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Freelancer')
    .pauseFor(1000)
    .start();

// calc inner height
// $(document).ready(function() {
//     $(".home").css("height", window.innerHeight);
//     if (window.innerHeight < 90) {
//         let y = window.innerHeight;
//         let x = 577 - y;
//         let b = $(".home .left").css("bottom");
//         let g = parseInt(b.slice(0, 5));
//         let c = g + x;
//         $(".home .left").css("bottom", c + 89);
//         $(".home .right").css("bottom", c + 62);
//     }
//     $("body").css("height", window.innerHeight);
// });