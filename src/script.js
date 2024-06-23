let deploymentBtn = document.querySelectorAll('.deployment');

console.log(deploymentBtn)

deploymentBtn.forEach(element => {
    element.addEventListener('click', () => {
        alert("hello world");
    });
});