document.addEventListener('DOMContentLoaded', function () {
  function updateImageURLs() {
    const png_1920 = document.getElementById('png_1920');

    if (window.innerWidth <= 800) {
      png_1920.src = '../images_375/bg.png';
    } else if (window.innerWidth <= 1125) {
      png_1920.src = '../images_1024/1024.png';
    } else if (window.innerWidth <= 1551) {
      png_1920.src = '../images_1440/1440.png';
    } else {
      png_1920.src = '../images/1920.png';
    }
  }
  updateImageURLs();

  window.addEventListener('resize', function () {
    updateImageURLs();
  });
});
