let menu = document.querySelector(".open-menu");
let openmenu = document.querySelector(".left-menu");
let close = document.querySelector(".close-btn");

openmenu.addEventListener('click', openBlock);
function openBlock() {
    menu.style.display = 'block'
}

close.addEventListener('click', closeBlock);
function closeBlock() {
    menu.style.display = 'none';
}