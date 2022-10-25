const header = document.querySelector('header');

const stickHeader = () => {
    const scroll = window.scrollY;

    if (scroll > 0) {
        header.classList.add('active1');
    } else {
        header.classList.remove('active1');
    }
}

window.addEventListener('scroll', stickHeader);

const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.rozwijanie');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active1');
    menu.classList.toggle('active1');
});

let activeimgnumber = 1;
let arrowleft = document.querySelector('#arrow-left');
let arrowright = document.querySelector('#arrow-right');

let hideActiveimg = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
};

let showimg = (imgNumber) => {
    hideActiveimg();
    document.querySelector('#img'+imgNumber).classList.add('active');
}

let shownextimg = () => {
    if(activeimgnumber === 3) {
        activeimgnumber = 1;
    } else {
        activeimgnumber = activeimgnumber + 1;
    }
    showimg(activeimgnumber);
}

let showpreviousimg = () => {
    if(activeimgnumber === 1) {
        activeimgnumber = 3;
    } else {
        activeimgnumber = activeimgnumber - 1;
    }
    showimg(activeimgnumber);
}

for(let i = 1; i <= 3; i++) {
    let showimgi = () => {
        activeimgnumber = i;
        showimg(i);
    }
    document.querySelector('#dot'+i).addEventListener('click', showimgi);
}

arrowright.addEventListener('click', shownextimg);
arrowleft.addEventListener('click', showpreviousimg);
