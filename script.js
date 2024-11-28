
// Функция для получения параметров из URL
function getURLParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// Объект с данными для каждой секции
const sectionData = {
    pr: {
        main_image: "images/pr.png",
        main_text: "Промо кампании онлайн и офлайн",
        second_left: "НЕОРДИНАРНЫЕ РЕШЕНИЯ И РЕКЛАМНЫЕ ТЕХНОЛОГИИ",
        second_up: "ПОЭТОМУ МЫ НЕ РАБОТАЕМ ПО КЛИШИРОВАННЫМ СХЕМАМ И ОЧЕНЬ РАДЫ НЕСТАНДАРТНЫМ, КРЕАТИВНЫМ ЗАДАЧАМ. ДЛЯ ВАШЕГО УДОБСТВА МЫ ПРЕДОСТАВЛЯЕМ ТИПИЧНЫЙ ПЕРЕЧЕНЬ ФОРМАТОВ И УСЛУГ, НО ЕСЛИ ВАШ ПРОЕКТ ТРЕБУЕТ НЕОРДИНАРНЫХ РЕШЕНИЙ, ВЫСШЕЙ СТЕПЕНИ ХУДОЖЕСТВЕННОСТИ И К НЕМУ НЕЛЬЗЯ ПОДОБРАТЬ РЕФЕРЕНСЫ — ПРОСТО ОПИШИТЕ ВАШУ ЗАДАЧУ В ФОРМЕ НИЖЕ И МЫ ВМЕСТЕ РАЗРАБОТАЕМ УНИКАЛЬНЫЙ ПРОЕКТ, НЕ ИМЕЮЩИЙ АНАЛОГОВ.",
        second_down: "",
        third_text: "МЫ ПРЕДОСТАВЛЯЕМ УСЛУГИ ПО РАЗРАБОТКЕ АУДИО-ВИЗУАЛЬНОГО КОНТЕНТА ЛЮБЫХ ТЕМАТИК ПОД КЛЮЧ",
    },
    prod: {
        main_image: "images/production.png",
        main_text: "Разработка аудиовизуального контента",
        second_left: "АУДИОВИЗУАЛЬНЫЙ КОНТЕНТ — ЭТО ИСКУССТВО",
        second_up: "ПОЭТОМУ МЫ НЕ РАБОТАЕМ ПО КЛИШИРОВАННЫМ СХЕМАМ И ОЧЕНЬ РАДЫ НЕСТАНДАРТНЫМ, КРЕАТИВНЫМ ЗАДАЧАМ. ДЛЯ ВАШЕГО УДОБСТВА МЫ ПРЕДОСТАВЛЯЕМ ТИПИЧНЫЙ ПЕРЕЧЕНЬ ФОРМАТОВ И УСЛУГ, НО ЕСЛИ ВАШ ПРОЕКТ ТРЕБУЕТ НЕОРДИНАРНЫХ РЕШЕНИЙ, ВЫСШЕЙ СТЕПЕНИ ХУДОЖЕСТВЕННОСТИ И К НЕМУ НЕЛЬЗЯ ПОДОБРАТЬ РЕФЕРЕНСЫ — ПРОСТО ОПИШИТЕ ВАШУ ЗАДАЧУ В ФОРМЕ НИЖЕ И МЫ ВМЕСТЕ РАЗРАБОТАЕМ УНИКАЛЬНЫЙ ПРОЕКТ, НЕ ИМЕЮЩИЙ АНАЛОГОВ.",
        second_down: "",
        third_text: "МЫ ПРЕДОСТАВЛЯЕМ УСЛУГИ ПО РАЗРАБОТКЕ АУДИО-ВИЗУАЛЬНОГО КОНТЕНТА ЛЮБЫХ ТЕМАТИК ПОД КЛЮЧ",
    },
    web: {
        main_image: "images/web.png",
        main_text: "Создание сайтов и приложений",
        second_left: "АУДИОВИЗУАЛЬНЫЙ КОНТЕНТ — ЭТО ИСКУССТВО",
        second_up: "ПОЭТОМУ МЫ НЕ РАБОТАЕМ ПО КЛИШИРОВАННЫМ СХЕМАМ И ОЧЕНЬ РАДЫ НЕСТАНДАРТНЫМ, КРЕАТИВНЫМ ЗАДАЧАМ. ДЛЯ ВАШЕГО УДОБСТВА МЫ ПРЕДОСТАВЛЯЕМ ТИПИЧНЫЙ ПЕРЕЧЕНЬ ФОРМАТОВ И УСЛУГ, НО ЕСЛИ ВАШ ПРОЕКТ ТРЕБУЕТ НЕОРДИНАРНЫХ РЕШЕНИЙ, ВЫСШЕЙ СТЕПЕНИ ХУДОЖЕСТВЕННОСТИ И К НЕМУ НЕЛЬЗЯ ПОДОБРАТЬ РЕФЕРЕНСЫ — ПРОСТО ОПИШИТЕ ВАШУ ЗАДАЧУ В ФОРМЕ НИЖЕ И МЫ ВМЕСТЕ РАЗРАБОТАЕМ УНИКАЛЬНЫЙ ПРОЕКТ, НЕ ИМЕЮЩИЙ АНАЛОГОВ.",
        second_down: "",
        third_text: "МЫ ПРЕДОСТАВЛЯЕМ УСЛУГИ ПО РАЗРАБОТКЕ АУДИО-ВИЗУАЛЬНОГО КОНТЕНТА ЛЮБЫХ ТЕМАТИК ПОД КЛЮЧ",
    },
    smm: {
        main_image: "images/smm.png",
        main_text: "Продвижение в youtube и instagram",
        second_left: "ЗРИТЕЛЬ ПОКУПАЕТ ГЛАЗАМИ! ФАКТ ИЗВЕСТНЫЙ",
        second_up: "НО У КАЖДОГО «ПРОДУКТА», БУДЬ ТО ЭЛИТНАЯ НЕДВИЖИМОСТЬ, ТЕХНИКА ДЛЯ ПЕРЕРАБОТКИ ОТХОДОВ ИЛИ МУЗЫКАЛЬНАЯ ГРУППА, СВОЙ ЗРИТЕЛЬ, СООТВЕТСТВЕННО, И ВИДИТ ОН ПО-СВОЕМУ. ПОЭТОМУ МЕТОД ПРОДВИЖЕНИЯ, УСПЕШНО ПРОДАЮЩИЙ ОБОРУДОВАНИЕ ДЛЯ ПЕРЕРАБОТКИ ОТХОДОВ, ВРЯД ЛИ СРАБОТАЕТ ПРИ ПРОДВИЖЕНИИ МУЗЫКАЛЬНОЙ ГРУППЫ.",
        second_down: "СОЗДАНИЕ КОМПЛЕКСНОЙ СТРАТЕГИИ ДЛЯ УСПЕШНОГО ПРОДВИЖЕНИЯ БРЕНДА — ЭТО, СВОЕГО РОДА, ИСКУССТВО, КОТОРОЕ НЕ ТЕРПИТ ТРИВИАЛЬНЫХ ПОДХОДОВ. ИНДИВИДУАЛЬНЫЙ МЕТОД ПРОДВИЖЕНИЯ ДЛЯ КАЖДОГО КЛИЕНТА, А В РЕЗУЛЬТАТЕ ТОЧНОЕ ПОПАДАНИЕ В ЦЕЛЕВУЮ АУДИТОРИЮ ИДЕАЛЬНО РАЗРАБОТАННЫМ КОНТЕНТОМ — ОСНОВНОЙ ПРИНЦИП РАБОТЫ +7 GROUP.",
        third_text: "   МЫ ПРЕДОСТАВЛЯЕМ УСЛУГИ ПО ВЕДЕНИЮ INSTAGRAM АККАУНТОВ И YOUTUBE КАНАЛОВ ЛЮБЫХ ТЕМАТИК ПОД КЛЮЧ",
    },
};

// Получаем текущую секцию из URL
const section = getURLParameter("section");

// Находим элементы на странице для замены
const mainPhoto = document.querySelector("main .image img");
const mainText = document.querySelector("main .text p");
const secondLeft = document.querySelector(".second .text .left");
const secondUp = document.querySelector(".second .text .right .up");
const secondDown = document.querySelector(".second .text .right .down");
const thirdText = document.querySelector(".third .text");

// Обновляем содержимое в зависимости от секции
if (section && sectionData[section]) {
    mainPhoto.src = sectionData[section].main_image;
    mainText.textContent = sectionData[section].main_text;
    secondLeft.textContent = sectionData[section].second_left;
    secondUp.textContent = sectionData[section].second_up;
    secondDown.textContent = sectionData[section].second_down;
    thirdText.textContent = sectionData[section].third_text;
} else {
    mainPhoto.src = "images/smm.png";
    mainText.textContent = "Error";
    secondLeft.textContent = "Error";
    secondUp.textContent = "Error";
    secondDown.textContent = "Error";
    thirdText.textContent = "Error";
}


const videos = [
  'video/video1.mp4',
  'video/video2.mp4',
  'video/video3.mp4',
  'video/video4.mp4',
  'video/video5.mp4'
];

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
    // video.pause();
    // video.currentTime = 0;
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
