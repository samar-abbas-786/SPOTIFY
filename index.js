const display = document.getElementById('display');

display.addEventListener('click', function () {
    display.style.opacity = 1;
    document.querySelector('.navleft img').style.display = 'none';
});