const humborgerMenu = document.querySelector(".humborger");
const xMark = document.querySelector(".x-mark");
const bars = document.querySelector(".bars");
const listItems = document.querySelector(".navbar nav ul");

humborgerMenu.addEventListener("click", function () {
     xMark.classList.toggle("active");
     bars.classList.toggle("active");
     listItems.classList.toggle("active")
})