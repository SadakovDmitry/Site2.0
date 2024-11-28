
// Массив с видео источниками


// Функция для получения параметров из URL
function getURLParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Объект с данными для каждой секции
const sectionData = {
    pr: {
        main_image: "images/123 1.png",
        // description: "Описание для PR проектов",
        // image: "images/pr.png",
    },
    prod: {
        main_image: "images/123 1.png",
        // description: "Описание для Production проектов",
        // image: "images/production.png",
    },
    web: {
        main_image: "images/smm.png",
        // description: "Описание для Web Development проектов",
        // image: "images/web.png",
    },
    smm: {
        main_image: "images/123 1.png",
        // description: "Описание для SMM проектов",
        // image: "images/smm.png",
    },
};

// Получаем текущую секцию из URL
const section = getURLParameter("section");

// Находим элементы на странице для замены
const titleElement = document.querySelector(".text p");
const imageElement = document.querySelector(".image img");

// Обновляем содержимое в зависимости от секции
if (section && sectionData[section]) {
    titleElement.textContent = sectionData[section].description;
    imageElement.src = sectionData[section].image;
} else {
    // Данные по умолчанию
    titleElement.textContent = "Выберите проект.";
    imageElement.src = "images/default.png";
}


const videos = [
  'video/video1.mp4',
  'video/video2.mp4',
  'video/video3.mp4',
  'video/video4.mp4',
  'video/video5.mp4'
];

// let currentIndex = 0; // Индекс текущего видео
//
// // Автоматический запуск видео
// const videoElements = document.querySelectorAll('.video');
// // videoElements[currentIndex].muted = false; // Размутить первое видео
//
//
// videoElements.forEach((video, index) => {
//     console.log("now index: ", index);
//   if (index !== currentIndex) {
//     video.pause(); // Останавливаем все видео
//   } else {
//     video.muted = true; // Запускаем первое видео без звука
//     video.play();
//   }
// });
//
// // Автоматическое переключение между видео
// setInterval(() => {
//   videoElements[currentIndex].pause(); // Остановить текущее видео
//   videoElements[currentIndex].currentTime = 0;
//   currentIndex = (currentIndex + 1) % videoElements.length; // Переключиться на следующее
//   videoElements[currentIndex].muted = true; // Убедитесь, что новое видео тоже без звука
//   videoElements[currentIndex].play(); // Запуск нового видео
// }, 5000);


let currentIndex = 0; // Индекс текущего видео

// Получаем все элементы видео
const videoElements = document.querySelectorAll('.video');

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
  videoElements[currentIndex].addEventListener('ended', onVideoEnded);
}

// Обработчик завершения видео
function onVideoEnded() {
  videoElements[currentIndex].currentTime = 0; // Сброс текущего видео на начало
  videoElements[currentIndex].removeEventListener('ended', onVideoEnded); // Удаляем обработчик события
  currentIndex = (currentIndex + 1) % videoElements.length; // Переход к следующему видео
  playCurrentVideo(); // Запуск следующего видео
}

// Инициализация: запуск первого видео
playCurrentVideo();

        document.addEventListener('DOMContentLoaded', function () {
          const modalVideo = document.getElementById('modalVideo');
          if (modalVideo) {
            modalVideo.addEventListener('loadedmetadata', adjustModalSize);
          } else {
            console.error("Элемент с ID 'modalVideo' не найден.");
          }
        });

        window.addEventListener('resize', adjustModalSize);

        function adjustModalSize() {
            const modalContent = document.getElementById('modalContent');
            if (!modalVideo || !modalVideo.videoWidth || !modalVideo.videoHeight) {
                console.warn('Видео еще не загрузилось.');
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
            modalVideo.addEventListener('loadedmetadata', adjustModalSize);
        }


const closeModalBtn = document.getElementById('closeModalBtn');

closeModalBtn.addEventListener('click', function () {
          videoModal.style.display = 'none';
          modalVideo.pause();
          modalVideo.currentTime = 0;
      });

// const videoElements = document.querySelectorAll('.video');
// let currentIndex = 0; // Индекс текущего видео
//
// // Функция для воспроизведения текущего видео
// function playCurrentVideo() {
//   const currentVideo = videoElements[currentIndex];
//   currentVideo.play();
//
//   // Установить обработчик на окончание видео
//   currentVideo.onended = () => {
//     // Перейти к следующему видео
//     video.currentTime = 0;
//     currentIndex = (currentIndex + 1) % videoElements.length;
//     playCurrentVideo(); // Запуск следующего видео
//   };
// }
//
// // Инициализация: запуск первого видео
// playCurrentVideo();

// Добавляем обработчики событий для запуска видео при наведении мыши
videoElements.forEach((video, index) => {
  video.addEventListener('mouseover', () => {
    // Останавливаем текущее воспроизводимое видео
    videoElements[currentIndex].pause();
    videoElements[currentIndex].currentTime = 0;

    // Обновляем индекс текущего видео
    currentIndex = index;

    // Запускаем видео под курсором
    video.muted = true; // Без звука
    video.play();
  });

  video.addEventListener('mouseout', () => {
    // Останавливаем видео, если указатель уходит
    // video.pause();
    // video.currentTime = 0;

    // Возвращаемся к автоматическому воспроизведению текущего видео
    playCurrentVideo();
  });
});



// Функция для открытия видео в модальном окне
function openVideo(index) {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  const modalVideoSource = document.getElementById('modalVideoSource');

  modal.style.display = 'flex'; // Открыть модальное окно
  modalVideoSource.src = videos[index]; // Установить видео источник
  modalVideo.load(); // Перезагрузить видео
  modalVideo.play(); // Запустить видео
}

// Закрытие модального окна
function closeModal() {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');

  modal.style.display = 'none'; // Закрыть модальное окно
  modalVideo.pause(); // Остановить видео
}
