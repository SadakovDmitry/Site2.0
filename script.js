const photos = [
  "../images/pr_article1.jpg",
  "../images/pr_article2.jpg",
  "../images/pr_article3.jpg",
  "../images/image4.jpg",
  "../images/image5.jpg",
];


function generatePhotoHTML(photoPath, customerName, year, index) {
  return `<div class="photo-item photo${index + 1}" draggable="true">
            <img class="photo" src="${photoPath}" alt="Фото ${index + 1}" />
            <div class="photo-overlay" onclick="openPhoto('${photoPath}')">&#x26F6;</div>
            <div class="text">
              <p class="customer">${customerName}</p>
              <p class="year">${year}</p>
            </div>
          </div>`;
}

function generatePhotoGallery(photos) {
  if (!Array.isArray(photos) || photos.length === 0) {
    console.error("Передан пустой или некорректный массив фото");
    return "";
  }
  const galleryHTML = photos
    .map((photo, index) =>
      generatePhotoHTML(photo.path, photo.customer, photo.year, index)
    )
    .join("");

  return `${galleryHTML}`;
}


let currentIndex = 0; // Индекс текущей фотографии

// Получаем все элементы изображений
const photoElements = document.querySelectorAll(".photo");

// photoElements.forEach((photo, index) => {
//   if (index !== currentIndex) {
//     photo.style.filter = "grayscale(100%)"; // Добавляем черно-белый фильтр
//   } else {
//     photo.style.filter = "none"; // Снимаем фильтр для текущего фото
//   }
// });

// Функция для отображения текущего фото в модальном окне
function openPhoto(photoPath) {
  const modal = document.getElementById("photoModal");
  const modalPhoto = document.getElementById("modalPhoto");
  modal.style.display = "flex"; // Открыть модальное окно
  modalPhoto.src = photoPath; // Установить источник фотографии
}

// Закрытие модального окна
const closeModalBtn = document.getElementById("closeModalBtn");
closeModalBtn.addEventListener("click", function () {
  const modal = document.getElementById("photoModal");
  modal.style.display = "none";
});

// Добавляем обработчики событий для изменения фильтра при наведении мыши
// photoElements.forEach((photo, index) => {
//   photo.addEventListener("mouseover", () => {
//     photoElements[currentIndex].style.filter = "grayscale(100%)"; // Применяем фильтр для старого фото
//     currentIndex = index; // Обновляем индекс текущего фото
//     photo.style.filter = "none"; // Снимаем фильтр для нового фото
//   });
//
//   photo.addEventListener("mouseout", () => {
//     photoElements[currentIndex].style.filter = "none"; // Убираем фильтр с текущего фото
//   });
// });

// Закрытие модального окна по клику вне фотографии
window.addEventListener("click", (event) => {
  const modal = document.getElementById("photoModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
