

// Функция для получения параметров из URL
function getURLParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

// Объект с данными для каждой секции
const sectionData = {
  pr: {
    main_image: "../images/pr.png",
    main_text: "Промо кампании онлайн и офлайн",
    second_left: "<<СКРОМНЫ ТОЛЬКО БЕЗДАРНОСТИ>> И.В. ГЕТЕ",
    second_up:
      "ДЕТАЛЬНО ИЗУЧАЕМ БРЕНД И ПСИХОЛОГИЧЕСКИЙ ПОРТРЕТ СПИКЕРА. ОПРЕДЕЛЯЕМ PR-СТРАТЕГИЮ С УЧЕТОМ ЗАДАЧ БИЗНЕСА, ПСИХОЛОГИЧЕСКОГО ПОРТРЕТА И ЛИЧНЫХ АМБИЦИОЗНЫХ ЦЕЛЕЙ СПИКЕРА. ОРГАНИЗУЕМ ПУБЛИКАЦИИ И ТВ-ИНТЕРВЬЮ ВО ВСЕХ СМИ. РАСПОЛАГАЕМ ОДНОЙ ИЗ КРУПНЕЙШИХ БАЗ ТЕПЛЫХ КОНТАКТОВ В СМИ НА РЫНКЕ — БОЛЕЕ 1600 КОНТАКТОВ.",
    second_down: "",
    third_text:
      "ОРГАНИЧЕСКОЕ ПРОДВИЖЕНИЕ И ПОЗИЦИОНИРОВАНИЕ БРЕНДА В ФЕДЕРАЛЬНЫХ И ТЕМАТИЧЕСКИХ СМИ",
    photograph_images: [ "../images/11zon_cropped.webp", "../images/11zon_cropped (1).webp",
    "../images/11zon_cropped (2).webp", "../images/11zon_cropped (3).webp",
      "../images/11zon_cropped (4).webp", "../images/11zon_cropped (5).webp"],
    thesis_1: "Создаем имидж бренда в медиасфере",
    thesis_2: "Выводим спикеров в ТОП-экспертов федеральных СМИ",
    thesis_3: "Организуем посев бренда во все новостные агрегаторы",
    thesis_4: "Размещаем «под ключ» эксклюзивные публикации с кейсами компании и лица бренда",
    thesis_5: "Пресс-поддержка мероприятий",
    thesis_6: "Участие в крупнейших международных и отечественных форумах, включая ПМЭФ и «Россия Зовет»",
    photo_sequence:[
      { path: "../images/pr_article1.jpg", customer: "Вирусные статьи для PR-продвижения строительной компании", year: "", href: "https://workspace.ru/cases/virusnye-stati-dlya-pr-prodvizheniya-stroitelnoy-kompanii/" },
      { path: "../images/pr_article2.jpg", customer: "Личный бренд как локомотив корпоративного PR", year: "", href: "https://workspace.ru/cases/lichnyy-brend-kak-lokomotiv-korporativnogo-pr/" },
      { path: "../images/pr_article3.jpg", customer: "PR как альтернатива SEO-продвижению: до +450% прироста к трафику за один день", year: "", href: "https://workspace.ru/cases/pr-i-brend-bidding-kak-alternativa-seo-prodvizheniyu-do-450-prirosta-k-trafiku-za-odin-den/" }
    ]
  },
  prod: {
    main_image: "../images/production.png",
    main_text: "Разработка аудиовизуального контента",
    second_left: "ХАРИЗМА ЕСТЬ У КАЖДОГО ГЕРОЯ: БУДЬ ТО МИНИСТР ИЛИ ЖК БИЗНЕС-КЛАССА.",
    second_up:
      "ПРОДАЮЩЕЕ ВИДЕОПРОИЗВОДСТВО — ЭТО ИНСТРУМЕНТ ОРГАНИЧЕСКОГО ПРОДВИЖЕНИЯ ПРОДУКТА ПРИ ПОМОЩИ ЕГО ОБРАЗА И ХАРИЗМЫ.",
    second_down: "ДЛЯ НАС ПРОДУКТ — САМОБЫТНЫЙ ГЕРОЙ. КЕМ БЫ ОН НИ БЫЛ: КАНДИДАТОМ В ГОСДУМУ ИЛИ ПРЕДМЕТОМ ИНТЕРЬЕРНОГО ДЕКОРА. РАСКРЫТЬ ХАРИЗМУ И СОЗДАТЬ ОБРАЗ, КОТОРЫЙ «ЗАХВАТИТ» ЦЕЛЕВУЮ АУДИТОРИЮ — НАША ОСНОВНАЯ ЗАДАЧА И ТВОРЧЕСКАЯ ПОБЕДА.",
    third_text:
      "СОЗДАНИЕ МЕДИАКОНТЕНТА ПОЛНОГО ЦИКЛА: ОТ РАЗРАБОТКИ ИДЕИ ДО ПОСТПРОДАКШЕНА.",
    photograph_images: [ "../images/11zon_cropped.webp", "../images/11zon_cropped (11).webp",
    "../images/11zon_cropped (12).webp", "../images/11zon_cropped (13).webp",
      "../images/11zon_cropped (14).webp", "../images/11zon_cropped (15).webp",
      "../images/11zon_cropped (6).webp", "../images/11zon_cropped (7).webp",
      "../images/11zon_cropped (8).webp", "../images/11zon_cropped 0.webp"],
    thesis_1: "ГЕНЕРАЦИЯ ФОРМАТОВ, КОТОРЫЕ ЗАЦЕПЯТ ВАШУ ЦЕЛЕВУЮ АУДИТОРИЮ НА РАЗНЫХ ПЛОЩАДКАХ",
    thesis_2: "СОЗДАНИЕ АУДИОВИЗУАЛЬНОГО КОНТЕНТА ЛЮБОЙ СЛОЖНОСТИ (ПРОДАЮЩИЙ, ВИРАЛЬНЫЙ, РЕКЛАМНЫЙ, ИГРОВОЙ, ДОКУМЕНТАЛЬНЫЙ, СОЦСЕТИЙНЫЙ)",
    thesis_3: "",
    thesis_4: "",
    thesis_5: "",
    thesis_6: "",
    photo_sequence:[
      { path: "../images/prod_article1.jpg", customer: "YouTube как лидген для продукта с чеком от 10 000 000 ₽", year: "", href: "https://workspace.ru/cases/youtube-kak-lidgen-dlya-produkta-s-chekom-ot-10-000-000/" },
      { path: "../images/prod_article2.jpg", customer: "Рекламный видеоролик банной печи для Европейского рынка", year: "", href: "https://workspace.ru/cases/reklamnyy-videorolik-bannoy-pechi-dlya-evropeyskogo-rynka/" },
      { path: "../images/prod_article3.jpg", customer: "Создание контента для Лакокрасочных изделий", year: "", href: "https://workspace.ru/cases/sozdanie-kontenta-dlya-lakokrasochnyh-izdeliy/" },
      { path: "../images/prod_article4.png", customer: "УМНЫЙ ДОМ ИЗ БРУСА: как технологии превращают его в идеальное место для жизни", year: "",href: "https://www.youtube.com/watch?v=03T0egxLPWY" },
      { path: "../images/prod_article5.png", customer: "Одноэтажные каркасные дома в лесной экозоне", year: "", href: "https://www.youtube.com/watch?v=jfJbV8c5muE" }
    ]
},
  web: {
    main_image: "../images/web.png",
    main_text: "Создание сайтов и приложений",
    second_left: "НЕ БЫВАЕТ НЕРЕШАЕМОЙ ЗАДАЧИ. ТОЛЬКО НЕВЕРНО ЗАДАННЫЕ УСЛОВИЯ.",
    second_up:
      "СОЗДАЕМ ГИБКИЕ WEB-ПРОДУКТЫ, КОТОРЫЕ УСПЕШНО РАЗВИВАЮТСЯ ВМЕСТЕ С БИЗНЕСОМ. ПРИВЛЕКАЕМ К РАБОТЕ СПЕЦИАЛИСТОВ В PR, МАРКЕТИНГЕ, ВИДЕОПРОИЗВОДСТВЕ И SMM. ПРОЕКТИРУЕМ ЦИФРОВУЮ ЭКОСИСТЕМУ И ВОПЛОЩАЕМ ЕЕ В РЕАЛЬНОСТЬ.",
    second_down: "",
    third_text:
      "РАЗРАБОТКА САЙТОВ И ЛЕНДИНГОВ С ПРИМЕНЕНИЕМ СОВРЕМЕННЫХ ТЕХНОЛОГИЙ: REACT, GPT-4, ДЕГЕНЕРАТИВНЫЕ МОДЕЛИ ИИ.",
    photograph_images: [ "../images/11zon_cropped.webp", "../images/11zon_cropped (1).webp",
    "../images/11zon_cropped (2).webp", "../images/11zon_cropped (3).webp",
      "../images/11zon_cropped (4).webp", "../images/11zon_cropped (5).webp"],
    thesis_1: "Погружаемся в позиционирование продукта заказчика",
    thesis_2: "Проводим внутренний брейншторминг с привлечением пула смежных профессионалов креативных индустрий — PR-директора, Моушен-продюсера, Шеф-редактора",
    thesis_3: "Составляем референс решений и презентацию со структурой WEB-продукта",
    thesis_4: "Утверждаем дизайн-макет и проводим прототипирование",
    thesis_5: "Разрабатываем и имплементируем решение под ключ",
    thesis_6: "Организуем пост-поддержку и доработку продукта в рамках последующих итераций",
    photo_sequence:[
      { path: "../images/web_article1.png", customer: "MRC-club: Сервис журналистских запросов", year: "", href: "https://mrc-club.ru/" },
      { path: "../images/web_article2.jpg", customer: "HalleHouse: Строительство домов под ключ", year: "", href: "https://halle-house.ru/" }
    ]
  },
  smm: {
    main_image: "../images/smm.png",
    main_text: "Продвижение в youtube и instagram",
    second_left: "ЛУЧШЕ 1000 ПОДПИСЧИКОВ, КОТОРЫЕ ХОТЯТ КУПИТЬ, ЧЕМ 1 000 000, КОТОРЫЙ СПОСОБЕН ТОЛЬКО СМОТРЕТЬ.",
    second_up:
      "ЗАДАЧА SMM — ПРОДАВАТЬ, А НЕ ПРОСТО ПОКАЗЫВАТЬ. МЫ СОЗДАЕМ МУЛЬТИКАНАЛЬНЫЕ ВОРОНКИ, ИНТЕГРИРУЕМ В НИХ АККАУНТЫ В СОЦИАЛЬНЫХ СЕТЯХ И НА ВИДЕОХОСТИНГАХ. НАША ЦЕЛЬ — ПРИВЛЕЧЕНИЕ ТОЛЬКО ЦЕЛЕВОЙ АУДИТОРИИ. СТРАТЕГИЯ ЭФФЕКТИВНА КАК ДЛЯ РАБОТЫ С МАСС-МАРКЕТОМ, ТАК И ДЛЯ ПРОДУКТОВ С ВЫСОКИМ СРЕДНИМ ЧЕКОМ.",
    second_down: "",
    third_text:
      "УНИКАЛЬНЫЕ МУЛЬТИКАНАЛЬНЫЕ СТРАТЕГИИ ПРОДВИЖЕНИЯ БРЕНДА В СОЦИАЛЬНЫХ СЕТЯХ.",
    photograph_images: [ "../images/11zon_cropped.webp", "../images/11zon_cropped (1).webp",
    "../images/11zon_cropped (2).webp", "../images/11zon_cropped (3).webp",
      "../images/11zon_cropped (4).webp", "../images/11zon_cropped (5).webp"],
    thesis_1: "РАЗРАБОТКА СТРАТЕГИЙ ПО ПРИВЛЕЧЕНИЮ ЦЕЛЕВОЙ АУДИТОРИИ	",
    thesis_2: "СОЗДАНИЕ ОСМЫСЛЕННЫХ КОНТЕНТ-ПЛАНОВ С ПРУФАМИ",
    thesis_3: "ГЕНЕРАЦИЯ КОНТЕНТА, В ТОМ ЧИСЛЕ, ВИДЕО",
    thesis_4: "ПОСТИНГ И ЕГО АНАЛИТИКА ",
    thesis_5: "ПРИВЛЕЧЕНИЕ ДОПОЛНИТЕЛЬНЫХ ИСТОЧНИКОВ ТРАФИКА ",
    thesis_6: "",
    photo_sequence:[
      { path: "../images/prod_article1.jpg", customer: "YouTube как лидген для продукта с чеком от 10 000 000 ₽", year: "", href: "https://workspace.ru/cases/youtube-kak-lidgen-dlya-produkta-s-chekom-ot-10-000-000/" },
      { path: "../images/smm_article2.jpg", customer: "SMM-продвижение строительного бренда через Instagram", year: "", href: "https://workspace.ru/cases/seo-prodvizhenie-stroitelnogo-brenda-cherez-instagram/" },
      { path: "../images/smm_article3.jpg", customer: "Срочное повышение продаж регионального магазина детской обуви", year: "", href: "https://workspace.ru/cases/srochnoe-povyshenie-prodazh-regionalnogo-magazina-detskoy-obuvi/" }
    ]
  },
};

let images = [
  "../images/IMG_4653.png",
  "../images/1I8A9580.png",
  "../images/7L8A4657.png",
  "../images/7L8A4661.png",
  "../images/IMG_4447.png",
  "../images/IMG_4656.png",
  // "../images/image7.png",
];

// Получаем текущую секцию из URL
const section = getURLParameter("section");

// Находим элементы на странице для замены
const mainPhoto = document.querySelector("main .image img");
const mainText = document.querySelector("main .text h1");
const secondLeft = document.querySelector(".second .text .left");
const secondUp = document.querySelector(".second .text .describe .top");
const secondDown = document.querySelector(".second .text .describe .bottom");
const thirdText = document.querySelector(".third .text");
const photographContainer = document.querySelector(".photographs");
const thesis_1 = document.querySelector(".fifth .first_str .text");
const thesis_2 = document.querySelector(".fifth .second_str .text");
const thesis_3 = document.querySelector(".fifth .third_str .text");
const thesis_4 = document.querySelector(".fifth .fourth_str .text");
const thesis_5 = document.querySelector(".fifth .fifth_str .text");
const thesis_6 = document.querySelector(".fifth .sixth_str .text");
const photo_gallery = document.querySelector(".photo-gallery");


// Обновляем содержимое в зависимости от секции
if (section && sectionData[section]) {
  mainPhoto.src = sectionData[section].main_image;
  mainText.textContent = sectionData[section].main_text;
  secondLeft.textContent = sectionData[section].second_left;
  secondUp.textContent = sectionData[section].second_up;
  secondDown.textContent = sectionData[section].second_down;
  thirdText.textContent = sectionData[section].third_text;
  thesis_1.textContent = sectionData[section].thesis_1;
  thesis_2.textContent = sectionData[section].thesis_2;
  thesis_3.textContent = sectionData[section].thesis_3;
  thesis_4.textContent = sectionData[section].thesis_4;
  thesis_5.textContent = sectionData[section].thesis_5;
  thesis_6.textContent = sectionData[section].thesis_6;

  images = sectionData[section].photograph_images;
  if (photographContainer) {
    photographContainer.innerHTML = ""; // Очищаем текущие изображения

    // Перебираем массив фотографий и добавляем изображения в контейнер
    images.forEach(imageSrc => {
      const imgElement = document.createElement("img");
      imgElement.src = imageSrc;
      photographContainer.appendChild(imgElement);
    });
  }

  // photo_gallery.innerHTML = "";
  photo_gallery.innerHTML = generatePhotoGallery(sectionData[section].photo_sequence);

//   article_photo = sectionData[section].photo_sequence;
//   if (photographContainer) {
//     photographContainer.innerHTML = ""; // Очищаем текущие изображения
//
//     // Перебираем массив фотографий и добавляем изображения в контейнер
//     article_photo.forEach(imageSrc => {
//       const imgElement = document.createElement("img");
//       imgElement.src = imageSrc;
//       photographContainer.appendChild(imgElement);
//     });
//   }
} else {
  mainPhoto.src = "../images/smm.png";
  mainText.textContent = "Error";
  secondLeft.textContent = "Error";
  secondUp.textContent = "Error";
  secondDown.textContent = "Error";
  thirdText.textContent = "Error";
  thesis_1.textContent = "Error";
  thesis_2.textContent = "Error";
  thesis_3.textContent = "Error";
  thesis_4.textContent = "Error";
  thesis_5.textContent = "Error";
  thesis_6.textContent = "Error";
}

// Функция для скрытия блоков и линий, если текст пустой
function hideEmptyBlocks() {
  // Находим все элементы <li> с классом "str" и их линии
  const listItems = document.querySelectorAll(".fifth .list li");
  const lines = document.querySelectorAll(".fifth .list .line");

  listItems.forEach((item, index) => {
    const textElement = item.querySelector(".text");  // Находим текстовый элемент внутри li
    const line = lines[index];  // Соответствующая линия для текущего li

    // Если текст пустой, скрываем как li, так и линию
    if (!textElement.textContent.trim()) {
      item.style.display = 'none';  // Скрываем сам блок li
      line.style.display = 'none';  // Скрываем линию
    }
    // } else {
    //   item.style.display = 'block'; // Показываем li, если текст не пустой
    //   line.style.display = 'block'; // Показываем линию
    // }
  });
}

hideEmptyBlocks();
// history.pushState(null, '', 'https://plus7group.pro/pr');

