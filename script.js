let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentIndex].style.display = 'block';
}

function prevSlide() {
    currentIndex--;
    showSlide(currentIndex);
}

function nextSlide() {
    currentIndex++;
    showSlide(currentIndex);
}

showSlide(currentIndex);

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
