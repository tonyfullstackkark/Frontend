let headerMain = document.querySelector('.header-main');
let togglerLabel = document.querySelector('.toggler__label');

let counter = 2;
togglerLabel.addEventListener('click', function () {
    if (counter % 2 == 0) {
        headerMain.style.visibility = 'hidden';
    } else {
        headerMain.style.visibility = 'visible';
    }
    counter++;
})