var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

if (togglebtn) {
    togglebtn.addEventListener("click", function() {
        this.classList.toggle("click");
        if (nav) nav.classList.toggle("open");
    });
}

document.querySelectorAll('.navlinks a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
        if (nav && nav.classList.contains('open')){
            nav.classList.remove('open');
            if (togglebtn) togglebtn.classList.remove('click');
        }
    });
});

if (window.Typed) {
    var typed = new Typed(".input", {
        strings:["Frontend Developer","Graphic Designer","Web Developer"],
        typeSpeed: 70,
        backSpeed: 55,
        loop: true 
    });
}