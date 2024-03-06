const menuBtn = document.querySelector("#menu");
const menuContent = document.querySelector("#menu-content");

menuBtn.addEventListener("click", () => {
    menuContent.classList.toggle("hidden");
    if (menuContent.classList != "hidden") {
        menuBtn.innerHTML = '<i class="fa-brands fa-xing"></i>';
    }
});