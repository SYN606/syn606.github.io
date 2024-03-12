const menuBtn = document.querySelector("#menu");
const menuContent = document.querySelector("#menu-content");

menuBtn.addEventListener("click", () => {
    menuContent.classList.toggle("hidden");
    if (menuContent.classList != "hidden") {
        console.log('hath jod ke modi sahab se gujarish hai code work karo')
        menuBtn.innerHTML = '<i class="fa-brands fa-xing"></i>';
    }
});

const body = document.querySelector('#body');
const darkMode = document.querySelector('#dark_mode');

darkMode.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList != "darkMode") {
        console.log('hoja bc');
        darkMode.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
    else {
        darkMode.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
})
