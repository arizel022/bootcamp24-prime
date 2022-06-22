const burger = document.querySelector(".burger-btn");
const menu = document.querySelector(".menu");
    burger.addEventListener("click", (e) => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
});
