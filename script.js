document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'url("image/SenrenBanka.jpg")',
        'url("image/sabbat of the which.jpg")',
    ];
    
    let currentIndex = 0;
    const backgroundDiv = document.querySelector('.background');
    
    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        backgroundDiv.style.backgroundImage = images[currentIndex];
    }
    
    setInterval(changeBackground, 5000); // 每5秒更換一次背景
});