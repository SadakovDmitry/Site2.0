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
    second_left: "НЕОРДИНАРНЫЕ РЕШЕНИЯ И РЕКЛАМНЫЕ ТЕХНОЛОГИИ",
    second_up:
      "ПОЭТОМУ МЫ НЕ РАБОТАЕМ ПО КЛИШИРОВАННЫМ СХЕМАМ И ОЧЕНЬ РАДЫ НЕСТАНДАРТНЫМ, КРЕАТИВНЫМ ЗАДАЧАМ. ДЛЯ ВАШЕГО УДОБСТВА МЫ ПРЕДОСТАВЛЯЕМ ТИПИЧНЫЙ ПЕРЕЧЕНЬ ФОРМАТОВ И УСЛУГ, НО ЕСЛИ ВАШ ПРОЕКТ ТРЕБУЕТ НЕОРДИНАРНЫХ РЕШЕНИЙ, ВЫСШЕЙ СТЕПЕНИ ХУДОЖЕСТВЕННОСТИ И К НЕМУ НЕЛЬЗЯ ПОДОБРАТЬ РЕФЕРЕНСЫ — ПРОСТО ОПИШИТЕ ВАШУ ЗАДАЧУ В ФОРМЕ НИЖЕ И МЫ ВМЕСТЕ РАЗРАБОТАЕМ УНИКАЛЬНЫЙ ПРОЕКТ, НЕ ИМЕЮЩИЙ АНАЛОГОВ.",
    second_down: "",
    third_text:
      "МЫ ПРЕДОСТАВЛЯЕМ УСЛУГИ ПО РАЗРАБОТКЕ АУДИО-ВИЗУАЛЬНОГО КОНТЕНТА ЛЮБЫХ ТЕМАТИК ПОД КЛЮЧ",
  },
  prod: {
    main_image: "../images/production.png",
    main_text: "Разработка аудиовизуального контента",
    second_left: "АУДИОВИЗУАЛЬНЫЙ КОНТЕНТ — ЭТО ИСКУССТВО",
    second_up:
      "ПОЭТОМУ МЫ НЕ РАБОТАЕМ ПО КЛИШИРОВАННЫМ СХЕМАМ И ОЧЕНЬ РАДЫ НЕСТАНДАРТНЫМ, КРЕАТИВНЫМ ЗАДАЧАМ. ДЛЯ ВАШЕГО УДОБСТВА МЫ ПРЕДОСТАВЛЯЕМ ТИПИЧНЫЙ ПЕРЕЧЕНЬ ФОРМАТОВ И УСЛУГ, НО ЕСЛИ ВАШ ПРОЕКТ ТРЕБУЕТ НЕОРДИНАРНЫХ РЕШЕНИЙ, ВЫСШЕЙ СТЕПЕНИ ХУДОЖЕСТВЕННОСТИ И К НЕМУ НЕЛЬЗЯ ПОДОБРАТЬ РЕФЕРЕНСЫ — ПРОСТО ОПИШИТЕ ВАШУ ЗАДАЧУ В ФОРМЕ НИЖЕ И МЫ ВМЕСТЕ РАЗРАБОТАЕМ УНИКАЛЬНЫЙ ПРОЕКТ, НЕ ИМЕЮЩИЙ АНАЛОГОВ.",
    second_down: "",
    third_text:
      "МЫ ПРЕДОСТАВЛЯЕМ УСЛУГИ ПО РАЗРАБОТКЕ АУДИО-ВИЗУАЛЬНОГО КОНТЕНТА ЛЮБЫХ ТЕМАТИК ПОД КЛЮЧ",
  },
  web: {
    main_image: "../images/web.png",
    main_text: "Создание сайтов и приложений",
    second_left: "АУДИОВИЗУАЛЬНЫЙ КОНТЕНТ — ЭТО ИСКУССТВО",
    second_up:
      "ПОЭТОМУ МЫ НЕ РАБОТАЕМ ПО КЛИШИРОВАННЫМ СХЕМАМ И ОЧЕНЬ РАДЫ НЕСТАНДАРТНЫМ, КРЕАТИВНЫМ ЗАДАЧАМ. ДЛЯ ВАШЕГО УДОБСТВА МЫ ПРЕДОСТАВЛЯЕМ ТИПИЧНЫЙ ПЕРЕЧЕНЬ ФОРМАТОВ И УСЛУГ, НО ЕСЛИ ВАШ ПРОЕКТ ТРЕБУЕТ НЕОРДИНАРНЫХ РЕШЕНИЙ, ВЫСШЕЙ СТЕПЕНИ ХУДОЖЕСТВЕННОСТИ И К НЕМУ НЕЛЬЗЯ ПОДОБРАТЬ РЕФЕРЕНСЫ — ПРОСТО ОПИШИТЕ ВАШУ ЗАДАЧУ В ФОРМЕ НИЖЕ И МЫ ВМЕСТЕ РАЗРАБОТАЕМ УНИКАЛЬНЫЙ ПРОЕКТ, НЕ ИМЕЮЩИЙ АНАЛОГОВ.",
    second_down: "",
    third_text:
      "МЫ ПРЕДОСТАВЛЯЕМ УСЛУГИ ПО РАЗРАБОТКЕ АУДИО-ВИЗУАЛЬНОГО КОНТЕНТА ЛЮБЫХ ТЕМАТИК ПОД КЛЮЧ",
  },
  smm: {
    main_image: "../images/smm.png",
    main_text: "Продвижение в youtube и instagram",
    second_left: "ЗРИТЕЛЬ ПОКУПАЕТ ГЛАЗАМИ! ФАКТ ИЗВЕСТНЫЙ",
    second_up:
      "НО У КАЖДОГО «ПРОДУКТА», БУДЬ ТО ЭЛИТНАЯ НЕДВИЖИМОСТЬ, ТЕХНИКА ДЛЯ ПЕРЕРАБОТКИ ОТХОДОВ ИЛИ МУЗЫКАЛЬНАЯ ГРУППА, СВОЙ ЗРИТЕЛЬ, СООТВЕТСТВЕННО, И ВИДИТ ОН ПО-СВОЕМУ. ПОЭТОМУ МЕТОД ПРОДВИЖЕНИЯ, УСПЕШНО ПРОДАЮЩИЙ ОБОРУДОВАНИЕ ДЛЯ ПЕРЕРАБОТКИ ОТХОДОВ, ВРЯД ЛИ СРАБОТАЕТ ПРИ ПРОДВИЖЕНИИ МУЗЫКАЛЬНОЙ ГРУППЫ.",
    second_down:
      "СОЗДАНИЕ КОМПЛЕКСНОЙ СТРАТЕГИИ ДЛЯ УСПЕШНОГО ПРОДВИЖЕНИЯ БРЕНДА — ЭТО, СВОЕГО РОДА, ИСКУССТВО, КОТОРОЕ НЕ ТЕРПИТ ТРИВИАЛЬНЫХ ПОДХОДОВ. ИНДИВИДУАЛЬНЫЙ МЕТОД ПРОДВИЖЕНИЯ ДЛЯ КАЖДОГО КЛИЕНТА, А В РЕЗУЛЬТАТЕ ТОЧНОЕ ПОПАДАНИЕ В ЦЕЛЕВУЮ АУДИТОРИЮ ИДЕАЛЬНО РАЗРАБОТАННЫМ КОНТЕНТОМ — ОСНОВНОЙ ПРИНЦИП РАБОТЫ +7 GROUP.",
    third_text:
      "   МЫ ПРЕДОСТАВЛЯЕМ УСЛУГИ ПО ВЕДЕНИЮ INSTAGRAM АККАУНТОВ И YOUTUBE КАНАЛ ЗАКАЗЧИКОВ ЛЮБЫХ ТЕМАТИК ПОД КЛЮЧ",
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
  mainPhoto.src = "../images/smm.png";
  mainText.textContent = "Error";
  secondLeft.textContent = "Error";
  secondUp.textContent = "Error";
  secondDown.textContent = "Error";
  thirdText.textContent = "Error";
}
