const videos = [
  "../video/video1.mp4",
  "../video/video2.mp4",
  "../video/video3.mp4",
  "../video/video4.mp4",
  "../video/video5.mp4",
];

let currentIndex = 0; // Индекс текущего видео

// Получаем все элементы видео
const videoElements = document.querySelectorAll(".video");

videoElements.forEach((video, index) => {
  console.log("now video index: ", index);
  if (index !== currentIndex) {
    video.pause(); // Останавливаем все видео
  } else {
    video.muted = true; // Запускаем первое видео без звука
    video.play();
  }
});

// Функция для запуска текущего видео
function playCurrentVideo() {
  videoElements[currentIndex].muted = true; // Убедитесь, что видео без звука
  videoElements[currentIndex].play(); // Запуск текущего видео

  // Добавляем обработчик события завершения видео
  videoElements[currentIndex].addEventListener("ended", onVideoEnded);
}

// Обработчик завершения видео
function onVideoEnded() {
  videoElements[currentIndex].currentTime = 0; // Сброс текущего видео на начало
  videoElements[currentIndex].removeEventListener("ended", onVideoEnded); // Удаляем обработчик события
  currentIndex = (currentIndex + 1) % videoElements.length; // Переход к следующему видео
  playCurrentVideo(); // Запуск следующего видео
}

// Инициализация: запуск первого видео
playCurrentVideo();

document.addEventListener("DOMContentLoaded", function () {
  const modalVideo = document.getElementById("modalVideo");
  if (modalVideo) {
    modalVideo.addEventListener("loadedmetadata", adjustModalSize);
  } else {
    console.error("Элемент с ID 'modalVideo' не найден.");
  }
});

window.addEventListener("resize", adjustModalSize);

function adjustModalSize() {
  const modalContent = document.getElementById("modalContent");
  if (!modalVideo || !modalVideo.videoWidth || !modalVideo.videoHeight) {
    console.warn("Видео еще не загрузилось.");
    return;
  }

  const videoWidth = modalVideo.videoWidth;
  const videoHeight = modalVideo.videoHeight;

  const videoAspectRatio = videoWidth / videoHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  if (windowWidth / windowHeight > videoAspectRatio) {
    modalContent.style.width = `${windowHeight * videoAspectRatio}px`;
    modalContent.style.height = `${windowHeight}px`;
  } else {
    modalContent.style.width = `${windowWidth}px`;
    modalContent.style.height = `${windowWidth / videoAspectRatio}px`;
  }
}

if (modalVideo.readyState >= 1) {
  adjustModalSize();
} else {
  modalVideo.addEventListener("loadedmetadata", adjustModalSize);
}

const closeModalBtn = document.getElementById("closeModalBtn");

closeModalBtn.addEventListener("click", function () {
  videoModal.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0;
});

// Добавляем обработчики событий для запуска видео при наведении мыши
videoElements.forEach((video, index) => {
  video.addEventListener("mouseover", () => {
    // Останавливаем текущее воспроизводимое видео
    videoElements[currentIndex].pause();
    videoElements[currentIndex].currentTime = 0;

    // Обновляем индекс текущего видео
    currentIndex = index;

    // Запускаем видео под курсором
    video.muted = true; // Без звука
    video.play();
  });

  video.addEventListener("mouseout", () => {
    // video.pause();
    // video.currentTime = 0;
    playCurrentVideo();
  });
});

// Функция для открытия видео в модальном окне
function openVideo(index) {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const modalVideoSource = document.getElementById("modalVideoSource");

  modal.style.display = "flex"; // Открыть модальное окно
  modalVideoSource.src = videos[index]; // Установить видео источник
  modalVideo.load(); // Перезагрузить видео
  modalVideo.play(); // Запустить видео
}

// Закрытие модального окна
function closeModal() {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");

  modal.style.display = "none"; // Закрыть модальное окно
  modalVideo.pause(); // Остановить видео
}
