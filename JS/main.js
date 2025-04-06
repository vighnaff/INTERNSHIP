// active navbar
let nav = document.queryselector(".bg-body-tertiary");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classlist.add("scroll-on");
    }else{
        nav.classlist.remove("scroll-on");
    }
}

// nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollape = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classlist.remove("show");
    })
})

// Counter Design
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let hasAnimated = false;

    function startCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const speed = target / 100; // Adjust speed here

            const updateCounter = () => {
                if (count < target) {
                    count += speed;
                    counter.textContent = Math.floor(count);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            updateCounter();
        });
    }

    function checkScroll() {
        const sectionPos = document.getElementById("counter").getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionPos < screenHeight / 1.2 && !hasAnimated) {
            hasAnimated = true;
            startCounters();
        }
    }

    window.addEventListener("scroll", checkScroll);
});
