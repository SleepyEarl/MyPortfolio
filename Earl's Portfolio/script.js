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

// Image Gallery Modal Functionality
var modal = document.getElementById("imageModal");
var modalImage = document.getElementById("modalImage");
var closeBtn = document.querySelector(".close-btn");

// Open modal when gallery image is clicked
document.querySelectorAll(".gallery-image").forEach(function(img) {
    img.addEventListener("click", function() {
        modal.classList.add("show");
        modalImage.src = this.src;
        document.body.style.overflow = "hidden";
    });
});

// Close modal when close button is clicked
closeBtn.addEventListener("click", function() {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
});

// Close modal when clicking outside the image
modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
    }
});