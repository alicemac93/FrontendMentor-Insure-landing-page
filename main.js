
const hamburger = document.getElementById("icon-hamburger");
const dropNav = document.getElementById("drop-content");
const hamburgerSrc = "file:///Users/alicemaciejewska/Desktop/Projects/tryouts/frontend_mentor/insure-landing-page-master%202/images/icon-hamburger.svg"

hamburger.addEventListener("click", function () {
    dropNav.classList.toggle("active");
    changeButton();
}
);

function changeButton(){
    if (hamburger.src === hamburgerSrc)
        {hamburger.setAttribute("src", "./images/icon-close.svg")
        } else {hamburger.setAttribute("src", "./images/icon-hamburger.svg");
    }
};
    