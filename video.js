const videoElement = document.getElementById("video_");
const sourceElement = document.getElementById("videoSource_");

sourceElement.setAttribute("src", newVideoSrc);
videoElement.load();
videoElement.play();
const videoModal_ = document.getElementById("videoModal_");

document.addEventListener("DOMContentLoaded", function () {
  const modalVideo_ = document.getElementById("modalVideo_");
  if (modalVideo_) {
    modalVideo_.addEventListener("loadedmetadata", adjustModalSize_);
  } else {
    console.error("Элемент с ID 'modalVideo_' не найден.");
  }
});

window.addEventListener("resize", adjustModalSize_);

function adjustModalSize_() {
  const modalContent_ = document.getElementById("modalContent_");
  if (!modalVideo_ || !modalVideo_.videoWidth || !modalVideo_.videoHeight) {
    console.warn("Видео еще не загрузилось.");
    return;
  }

  const videoWidth = modalVideo_.videoWidth;
  const videoHeight = modalVideo_.videoHeight;

  const videoAspectRatio = videoWidth / videoHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  if (windowWidth / windowHeight > videoAspectRatio) {
    modalContent_.style.width = `${windowHeight * videoAspectRatio}px`;
    modalContent_.style.height = `${windowHeight}px`;
  } else {
    modalContent_.style.width = `${windowWidth}px`;
    modalContent_.style.height = `${windowWidth / videoAspectRatio}px`;
  }
}

if (modalVideo_.readyState >= 1) {
  adjustModalSize_();
} else {
  modalVideo_.addEventListener("loadedmetadata", adjustModalSize_);
}

const closeModalBtn_ = document.getElementById("closeModalBtn_");

closeModalBtn_.addEventListener("click", function () {
  videoModal_.style.display = "none";
  modalVideo_.pause();
  modalVideo_.currentTime = 0;
});

function openVideo_(index) {
  const modal = document.getElementById("videoModal_");
  const modalVideo_ = document.getElementById("modalVideo_");
  const modalVideoSource = document.getElementById("modalVideoSource_");

  modal.style.display = "flex"; // Открыть модальное окно
  modalVideoSource.src = newVideoSrc; // Установить видео источник
  modalVideo_.load(); // Перезагрузить видео
  modalVideo_.play(); // Запустить видео
}

// Закрытие модального окна
function closeModal_() {
  const modal = document.getElementById("videoModal_");
  const modalVideo_ = document.getElementById("modalVideo_");

  modal.style.display = "none"; // Закрыть модальное окно
  modalVideo_.pause(); // Остановить видео
}

document.querySelectorAll(".item").forEach((item) => {
  item.addEventListener("click", () => openVideo_());
});
