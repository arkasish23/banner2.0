const sidenav = document.querySelector('.sidenav');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const content = document.querySelector('.content');

openBtn.addEventListener('click', () => {
    sidenav.style.width = '75px';
    content.style.marginLeft = '50px';
});

closeBtn.addEventListener('click', () => {
    sidenav.style.width = '0';
    content.style.marginLeft = '0';
});

