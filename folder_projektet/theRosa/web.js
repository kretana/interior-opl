const selectElement = function (element) {
    return document.querySelector(element);

};
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click',function () {
    body.classList.toggle('open');
});

window.sr = scrollReveal();

sr.reveal('.animate-left', {
origin: 'left',
duration:100,
distance:'25rem',
delay:300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration:100,
    distance:'25rem',
    delay:600
    });

sr.reveal('.animate-top', {
        origin: 'top',
        duration:100,
        distance:'25rem',
        delay:600
        });

 sr.reveal('.animate-bottom', {
            origin: 'bottom',
            duration:100,
            distance:'25rem',
            delay:600
            });

            const selectElement = function (element) {
                return document.querySelector(element);
            
            };
            let menuToggler = selectElement('.menu-toggle');
            let body = selectElement('body');
            
            menuToggler.addEventListener('click',function () {
                body.classList.toggle('open');
            });