document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = [
        "images/pexels-atul-patel-18509065.jpg",
        'images/pexels-eberhard-grossgasteiger-4406352.jpg',
        'images/pexels-engin-akyurt-1486861.jpg',
        'images/pexels-lumn-1410224.jpg'
    ];

    function showSlide(index) {
        document.querySelector('.hero').style.backgroundImage = `url(${slides[index]})`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 4000); // Change background every 2 seconds
});
