const cat = document.querySelector('.cat');
const button = document.querySelector('.button');
const eye1 = document.querySelector('.eye1');
const eye2 = document.querySelector('.eye2');
const pupil1 = document.querySelector('.pupil1');
const pupil2 = document.querySelector('.pupil2');



button.addEventListener('click', (ev) => {
    cat.classList.toggle('anima');
});

document.addEventListener('mousemove', (ev) => {
    let x = ev.x - 570;
    let y = ev.y - 287;
    function arcctg (x,y) {
        if(x > 0 && y > 0)return Math.PI / 2 - Math.atan(x / y);
        if(x < 0 && y > 0)return Math.PI / 2 - Math.atan(x / y);
        if(x < 0 && y < 0)return Math.PI + Math.abs(Math.atan(y / x));
        if(x > 0 && y < 0)return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
    }
    eye1.style.transform = 'rotate('+ 57.2957795131*arcctg(x,y) +'deg)';

});

document.addEventListener('mousemove', (ev) => {
    let x = ev.x - 635;
    let y = ev.y - 287;
    function arcctg (x,y) {
        if(x > 0 && y > 0)return Math.PI / 2 - Math.atan(x / y);
        if(x < 0 && y > 0)return Math.PI / 2 - Math.atan(x / y);
        if(x < 0 && y < 0)return Math.PI + Math.abs(Math.atan(y / x));
        if(x > 0 && y < 0)return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
    }
    eye2.style.transform = 'rotate('+ 57.2957795131*arcctg(x,y) +'deg)';

});