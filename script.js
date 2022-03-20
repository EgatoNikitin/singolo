const borger = document.querySelector(".header--boorger")
if (borger) {
    const menu = document.querySelector(".burger--menu");
    borger.addEventListener("click", function (e) {
        borger.classList.toggle('_active');
        menu.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
}