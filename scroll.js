const header = document.getElementById("header");

function scrollPage(target) {
    const element = document.getElementById(target);
    window.scrollTo(0, element.offsetTop - header.offsetHeight);
}