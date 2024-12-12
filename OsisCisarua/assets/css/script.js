
const container = document.getElementById('container');
document.getElementById('register').addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
document.getElementById('login').addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
