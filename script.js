window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        let navbar = document.getElementById("navbar")
        let logo = document.getElementById("logo")

        navbar.style.backgroundColor = "#272525";
        navbar.style.padding = "20px 100px";

        logo.style.fontSize = "30px"


    } else {

        navbar.style.backgroundColor = "";
        navbar.style.padding = "40px 100px"

        logo.style.fontSize = "45px"


    }
}