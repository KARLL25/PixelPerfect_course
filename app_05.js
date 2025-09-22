// let titleProject = 'Оценка стоимости';
// let screenValue = 'шаблонные, с уникальным дизайном, с анимациями';


// let percentage = 10;
// let fullPrice = 100000;
// let responsive = true;

// console.log(titleProject, screenValue, screenPrice, percentage, fullPrice, responsive);


let titleProject = prompt('Название проекта?');
let screenValue = prompt('Шаблонные, с уникальным дизайном или с анимациями?');
let question = confirm('Нужен ли респонсивный сайт?');
let service1 = prompt('Какой сервис нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить');
let service2 = prompt('Какой еще сервис тебе нужен?');
let servicePrice2 = +prompt('Сколько будет стоить этот второй сервис?')

let screenPrice = 10000;
let percentage = 10;


//1. function expression

let getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};
let allServicePrices = getAllServicePrices()
console.log(allServicePrices)

//2. Function declaration

function getFullPrice() {
    return screenPrice + allServicePrices;
};
let fullPrice = getFullPrice();
console.log(fullPrice)

//3. Функция для изменения названия проекта

function getTitle() {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}
titleProject = getTitle();
console.log(titleProject);
//4. Итоговая стоимость ха вычетом процента подрячику

function getServicePercentPrices() {
    return Math.round(fullPrice - (fullPrice * percentage / 100));
}
let servicePercentPrice = getServicePercentPrices();
console.log(servicePercentPrice);

//5. Функция расчета скидки
function getRollbackMessage() {
    if (fullPrice > 50000) {
        console.log('Сделаем скидку 10%');
    } else if (fullPrice > 20000 && fullPrice < 50000) {
        console.log('Сделаем скидку 5%');
    } else if (fullPrice > 0 && fullPrice < 20000) {
        console.log('Скидка не предусмотрена');
    } else if (fullPrice === 0) {
        console.log('Обсудим детали');
    } else if (fullPrice === 20000) {
        console.log(' Рассмотрим индивидуальный план');
    } else if (fullPrice === 50000) {
        console.log('Доступен расширенный доступ');
    } else if (fullPrice < 0) {
        console.log('Что-то пошло не так');
    }
}
getRollbackMessage();

console.log("Название проекта:", titleProject);
console.log("Типы экранов:", screenValue);
console.log("Первый сервис:", service1, "стоимость:", servicePrice1);
console.log("Второй сервис:", service2, "стоимость:", servicePrice2);
console.log("Стоимость всех сервисов:", allServicePrices);
console.log("Стоимость экранов:", screenPrice);
console.log("Общая стоимость проекта:", fullPrice);
console.log("Итоговая сумма с учетом процента партнёру:", servicePercentPrice);
