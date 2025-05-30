function getURLParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

const projects = {
  project_1: {
    name: "project 1",
    customer: "кто то 1",
    year: "2024",
    project_type: "smm",
    main_image: "../images/about.png",
    second_left: "",
    second_up: "НЕ ПЫТАЕМСЯ ГНАТЬСЯ ЗА ТРЕНДАМИ, КРЕАТИВИМ И СОЗДАЁМ СВОИ. ПОМИМО ПЕРЕЧИСЛЕННЫХ ПОДВИГОВ ЗА ПЛЕЧАМИ НАШИХ ГЕРОЕВ ГРАНТ МИНКУЛЬТА, ЛАУРЕАТСТВА НА ПИТЧИНГАХ И ФЕСТИВАЛЯХ, РАЗРАБОТКА И ИСПОЛНЕНИЕ БРЕНДМЕНЕДЖМЕНТА В АУДИОВИЗУАЛЬНЫХ ФОРМАТАХ И, КОНЕЧНО, РЕЙТИНГОВЫЕ ВИДЕО В СЕТИ.",
    second_down: "В НАШЕЙ КОМАНДЕ ЕСТЬ И ХУДОЖНИКИ, КОТОРЫЕ СОЗДАЮТ ГРАФИЧЕСКОЕ ОБРАМЛЕНИЕ ДЛЯ ВИДЕО,А ТАКЖЕ РИСУЮТ ЛОГОТИПЫ И ДЕЛАЮТ КРЕАТИВНЫЕ LOOK-BOOKS.",
    description_1: " НЕ ПУГАЙТЕСЬ НАШИХ ЦЕН! ОНИ НИЗКИЕ ТОЛЬКО ПО ТОЙ ПРИЧИНЕ, ЧТО НАША ДРУЖНАЯ КОМАНДА НЕ ОБРЕМЕНЕНА ОГРОМНЫМ АДМИНИСТРАТИВНЫМ ШТАТОМ, ПОЭТОМУ РАБОТАЯ С НАМИ, ВАМ НЕ ПРИДЁТСЯ ОПЛАЧИВАТЬ ТРУД ДЕСЯТКА СЕКРЕТАРЕЙ, ПЯТИ МЕНЕДЖЕРОВ И АРЕНДУ ОФИСА В МОСКВЕ-СИТИ.",
    description_2: " НЕ ПУГАЙТЕСЬ НАШИХ ЦЕН! ОНИ НИЗКИЕ ТОЛЬКО ПО ТОЙ ПРИЧИНЕ, ЧТО НАША ДРУЖНАЯ КОМАНДА НЕ ОБРЕМЕНЕНА ОГРОМНЫМ АДМИНИСТРАТИВНЫМ ШТАТОМ, ПОЭТОМУ РАБОТАЯ С НАМИ, ВАМ НЕ ПРИДЁТСЯ ОПЛАЧИВАТЬ ТРУД ДЕСЯТКА СЕКРЕТАРЕЙ, ПЯТИ МЕНЕДЖЕРОВ И АРЕНДУ ОФИСА В МОСКВЕ-СИТИ.",
    video: "../showreel.mp4",
    photo1: "../images/first_project_media_1.png",
    photo2: "../images/first_project_media_2.png",
    photo3: "../images/image4.png"
  },
  project_2: {
    name: "project 2",
    customer: "кто то 2",
    year: "2024",
    project_type: "smm",
    main_image: "../images/about.png",
    second_left: "",
    second_up: "НЕ ПЫТАЕМСЯ ГНАТЬСЯ ЗА ТРЕНДАМИ, КРЕАТИВИМ И СОЗДАЁМ СВОИ. ПОМИМО ПЕРЕЧИСЛЕННЫХ ПОДВИГОВ ЗА ПЛЕЧАМИ НАШИХ ГЕРОЕВ ГРАНТ МИНКУЛЬТА, ЛАУРЕАТСТВА НА ПИТЧИНГАХ И ФЕСТИВАЛЯХ, РАЗРАБОТКА И ИСПОЛНЕНИЕ БРЕНДМЕНЕДЖМЕНТА В АУДИОВИЗУАЛЬНЫХ ФОРМАТАХ И, КОНЕЧНО, РЕЙТИНГОВЫЕ ВИДЕО В СЕТИ.",
    second_down: "В НАШЕЙ КОМАНДЕ ЕСТЬ И ХУДОЖНИКИ, КОТОРЫЕ СОЗДАЮТ ГРАФИЧЕСКОЕ ОБРАМЛЕНИЕ ДЛЯ ВИДЕО,А ТАКЖЕ РИСУЮТ ЛОГОТИПЫ И ДЕЛАЮТ КРЕАТИВНЫЕ LOOK-BOOKS.",
    description_1: " НЕ ПУГАЙТЕСЬ НАШИХ ЦЕН! ОНИ НИЗКИЕ ТОЛЬКО ПО ТОЙ ПРИЧИНЕ, ЧТО НАША ДРУЖНАЯ КОМАНДА НЕ ОБРЕМЕНЕНА ОГРОМНЫМ АДМИНИСТРАТИВНЫМ ШТАТОМ, ПОЭТОМУ РАБОТАЯ С НАМИ, ВАМ НЕ ПРИДЁТСЯ ОПЛАЧИВАТЬ ТРУД ДЕСЯТКА СЕКРЕТАРЕЙ, ПЯТИ МЕНЕДЖЕРОВ И АРЕНДУ ОФИСА В МОСКВЕ-СИТИ.",
    description_2: " НЕ ПУГАЙТЕСЬ НАШИХ ЦЕН! ОНИ НИЗКИЕ ТОЛЬКО ПО ТОЙ ПРИЧИНЕ, ЧТО НАША ДРУЖНАЯ КОМАНДА НЕ ОБРЕМЕНЕНА ОГРОМНЫМ АДМИНИСТРАТИВНЫМ ШТАТОМ, ПОЭТОМУ РАБОТАЯ С НАМИ, ВАМ НЕ ПРИДЁТСЯ ОПЛАЧИВАТЬ ТРУД ДЕСЯТКА СЕКРЕТАРЕЙ, ПЯТИ МЕНЕДЖЕРОВ И АРЕНДУ ОФИСА В МОСКВЕ-СИТИ.",
    video: "../showreel.mp4",
    photo1: "../images/first_project_media_3.png",
    photo2: "../images/first_project_media_2.png",
    photo3: "../images/first_project_media_1.png"
    },
  project_3: {
    name: "project 3",
    customer: "кто то 3",
    year: "2024",
    project_type: "smm",
    main_image: "../images/about.png",
    second_left: "",
    second_up: "НЕ ПЫТАЕМСЯ ГНАТЬСЯ ЗА ТРЕНДАМИ, КРЕАТИВИМ И СОЗДАЁМ СВОИ. ПОМИМО ПЕРЕЧИСЛЕННЫХ ПОДВИГОВ ЗА ПЛЕЧАМИ НАШИХ ГЕРОЕВ ГРАНТ МИНКУЛЬТА, ЛАУРЕАТСТВА НА ПИТЧИНГАХ И ФЕСТИВАЛЯХ, РАЗРАБОТКА И ИСПОЛНЕНИЕ БРЕНДМЕНЕДЖМЕНТА В АУДИОВИЗУАЛЬНЫХ ФОРМАТАХ И, КОНЕЧНО, РЕЙТИНГОВЫЕ ВИДЕО В СЕТИ.",
    second_down: "В НАШЕЙ КОМАНДЕ ЕСТЬ И ХУДОЖНИКИ, КОТОРЫЕ СОЗДАЮТ ГРАФИЧЕСКОЕ ОБРАМЛЕНИЕ ДЛЯ ВИДЕО,А ТАКЖЕ РИСУЮТ ЛОГОТИПЫ И ДЕЛАЮТ КРЕАТИВНЫЕ LOOK-BOOKS.",
    description_1: " НЕ ПУГАЙТЕСЬ НАШИХ ЦЕН! ОНИ НИЗКИЕ ТОЛЬКО ПО ТОЙ ПРИЧИНЕ, ЧТО НАША ДРУЖНАЯ КОМАНДА НЕ ОБРЕМЕНЕНА ОГРОМНЫМ АДМИНИСТРАТИВНЫМ ШТАТОМ, ПОЭТОМУ РАБОТАЯ С НАМИ, ВАМ НЕ ПРИДЁТСЯ ОПЛАЧИВАТЬ ТРУД ДЕСЯТКА СЕКРЕТАРЕЙ, ПЯТИ МЕНЕДЖЕРОВ И АРЕНДУ ОФИСА В МОСКВЕ-СИТИ.",
    description_2: " НЕ ПУГАЙТЕСЬ НАШИХ ЦЕН! ОНИ НИЗКИЕ ТОЛЬКО ПО ТОЙ ПРИЧИНЕ, ЧТО НАША ДРУЖНАЯ КОМАНДА НЕ ОБРЕМЕНЕНА ОГРОМНЫМ АДМИНИСТРАТИВНЫМ ШТАТОМ, ПОЭТОМУ РАБОТАЯ С НАМИ, ВАМ НЕ ПРИДЁТСЯ ОПЛАЧИВАТЬ ТРУД ДЕСЯТКА СЕКРЕТАРЕЙ, ПЯТИ МЕНЕДЖЕРОВ И АРЕНДУ ОФИСА В МОСКВЕ-СИТИ.",
    video: "../showreel.mp4",
    photo1: "../images/first_project_media_1.png",
    photo2: "../images/first_project_media_1.png",
    photo3: "../images/first_project_media_1.png"
    },
  project_4: {
    name: "project 4",
    customer: "кто то 4",
    year: "2024",
    project_type: "smm",
    main_image: "../images/about.png",
    second_left: "",
    second_up: "НЕ ПЫТАЕМСЯ ГНАТЬСЯ ЗА ТРЕНДАМИ, КРЕАТИВИМ И СОЗДАЁМ СВОИ. ПОМИМО ПЕРЕЧИСЛЕННЫХ ПОДВИГОВ ЗА ПЛЕЧАМИ НАШИХ ГЕРОЕВ ГРАНТ МИНКУЛЬТА, ЛАУРЕАТСТВА НА ПИТЧИНГАХ И ФЕСТИВАЛЯХ, РАЗРАБОТКА И ИСПОЛНЕНИЕ БРЕНДМЕНЕДЖМЕНТА В АУДИОВИЗУАЛЬНЫХ ФОРМАТАХ И, КОНЕЧНО, РЕЙТИНГОВЫЕ ВИДЕО В СЕТИ.",
    second_down: "В НАШЕЙ КОМАНДЕ ЕСТЬ И ХУДОЖНИКИ, КОТОРЫЕ СОЗДАЮТ ГРАФИЧЕСКОЕ ОБРАМЛЕНИЕ ДЛЯ ВИДЕО,А ТАКЖЕ РИСУЮТ ЛОГОТИПЫ И ДЕЛАЮТ КРЕАТИВНЫЕ LOOK-BOOKS.",
    description_1: " НЕ ПУГАЙТЕСЬ НАШИХ ЦЕН! ОНИ НИЗКИЕ ТОЛЬКО ПО ТОЙ ПРИЧИНЕ, ЧТО НАША ДРУЖНАЯ КОМАНДА НЕ ОБРЕМЕНЕНА ОГРОМНЫМ АДМИНИСТРАТИВНЫМ ШТАТОМ, ПОЭТОМУ РАБОТАЯ С НАМИ, ВАМ НЕ ПРИДЁТСЯ ОПЛАЧИВАТЬ ТРУД ДЕСЯТКА СЕКРЕТАРЕЙ, ПЯТИ МЕНЕДЖЕРОВ И АРЕНДУ ОФИСА В МОСКВЕ-СИТИ.",
    description_2: " НЕ ПУГАЙТЕСЬ НАШИХ ЦЕН! ОНИ НИЗКИЕ ТОЛЬКО ПО ТОЙ ПРИЧИНЕ, ЧТО НАША ДРУЖНАЯ КОМАНДА НЕ ОБРЕМЕНЕНА ОГРОМНЫМ АДМИНИСТРАТИВНЫМ ШТАТОМ, ПОЭТОМУ РАБОТАЯ С НАМИ, ВАМ НЕ ПРИДЁТСЯ ОПЛАЧИВАТЬ ТРУД ДЕСЯТКА СЕКРЕТАРЕЙ, ПЯТИ МЕНЕДЖЕРОВ И АРЕНДУ ОФИСА В МОСКВЕ-СИТИ.",
    video: "../showreel.mp4",
    photo1: "../images/first_project_media_3.png",
    photo2: "../images/first_project_media_3.png",
    photo3: "../images/first_project_media_3.png"
    }
};

let currentProjectIndex = 0;

function initializeCurrentProject() {
    const section = getURLParameter("section");
    const projectKeys = Object.keys(projects);
    const projectsLength = projectKeys.length;

    if (section && projectKeys.includes(section)) {
        currentProjectIndex = projectKeys.indexOf(section);
    } else {
        currentProjectIndex = 0;
    }

    const prevProjectIndex = (currentProjectIndex - 1 + projectsLength) % projectsLength;
    const nextProjectIndex = (currentProjectIndex + 1) % projectsLength;

    const prevProjectImage = document.getElementById('prevProjectImage');
    const nextProjectImage = document.getElementById('nextProjectImage');

    if (prevProjectImage) {
        prevProjectImage.src = projects[projectKeys[prevProjectIndex]].main_image;
    }

    if (nextProjectImage) {
        nextProjectImage.src = projects[projectKeys[nextProjectIndex]].main_image;
    }

    updateProjectContent(projectKeys[currentProjectIndex]);
}

function updateProjectContent(projectKey) {
    if (!projects[projectKey]) return;

    const project = projects[projectKey];

    const projectName = document.querySelector("main .text p");
    const customer = document.querySelector("#customer p");
    const year = document.querySelector("#year p");
    const type = document.querySelector("#type p");
    const mainPhoto = document.querySelector("main .image img");
    const secondLeft = document.querySelector(".second .text .left");
    const secondUp = document.querySelector(".second .text .right .up");
    const secondDown = document.querySelector(".second .text .right .down");
    const firstDescription = document.querySelector(".describe_section .text");
    const secondDescription = document.querySelector(".describe_section_2 .text");
    const video = document.querySelector(".media-block .video-container video");
    const photoRowImages = document.querySelectorAll(".media-block .photo-row img");
    const firstPhoto = photoRowImages[0];
    const secondPhoto = photoRowImages[1];
    const thirdPhoto = document.querySelector(".media-block .full-width-photo");

    projectName.textContent = project.name;
    customer.textContent = project.customer;
    year.textContent = project.year;
    type.textContent = project.project_type;
    mainPhoto.src = project.main_image;
    secondLeft.textContent = project.second_left;
    secondUp.textContent = project.second_up;
    secondDown.textContent = project.second_down;
    firstDescription.textContent = project.description_1;
    secondDescription.textContent = project.description_2;
    video.src = project.video;
    firstPhoto.src = `${project.photo1}?t=${new Date().getTime()}`;
    secondPhoto.src = `${project.photo2}?t=${new Date().getTime()}`;
    thirdPhoto.src = `${project.photo3}?t=${new Date().getTime()}`;
}

initializeCurrentProject();

function switchProject(direction) {
    const projectKeys = Object.keys(projects);
    const projectsLength = projectKeys.length;

    if (direction === 'prev') {
        currentProjectIndex = (currentProjectIndex - 1 + projectsLength) % projectsLength;
    } else if (direction === 'next') {
        currentProjectIndex = (currentProjectIndex + 1) % projectsLength;
    }

    const currentProjectKey = projectKeys[currentProjectIndex];
    const project = projects[currentProjectKey];

    const prevProjectIndex = (currentProjectIndex - 1 + projectsLength) % projectsLength;
    const nextProjectIndex = (currentProjectIndex + 1) % projectsLength;

    const prevProjectImage = document.getElementById('prevProjectImage');
    const nextProjectImage = document.getElementById('nextProjectImage');

    const prevProjectKey = projectKeys[prevProjectIndex];
    const nextProjectKey = projectKeys[nextProjectIndex];

    prevProjectImage.src = projects[prevProjectKey].main_image;
    nextProjectImage.src = projects[nextProjectKey].main_image;

    updateProjectContent(projectKeys[currentProjectIndex]);

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
