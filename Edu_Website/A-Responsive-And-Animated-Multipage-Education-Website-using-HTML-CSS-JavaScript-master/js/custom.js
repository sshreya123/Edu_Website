//change nav-bar when scroll

window.addEventListener('scroll', () => {
    document.querySelector('.nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
});

//show the answers of questions

const faqs = document.querySelectorAll('.FAQs_card');

faqs.forEach(myFunction);

function myFunction(element) {
    element.addEventListener('click', () => {
        element.classList.toggle('open');
    });
}

//side navigation bar
var menu = document.querySelector('.fa-bars');
var sidebar = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
    if (menu.className === "fa fa-bars") {
        sidebar.style.display = "block";
    }
    else {
        sidebar.style.display = "none";
    };

    if (menu.className === "fa fa-bars") {
        menu.className = "fa fa-times"
    }
    else {
        menu.className = "fa fa-bars"
    };

});
window.onresize = function () {
    if (window.innerWidth > 1024) {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
        menu.className = "fa fa-bars"
    }
}