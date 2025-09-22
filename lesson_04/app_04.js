// let titleProject = 'Оценка стоимости';
// let screenValue = 'шаблонные, с уникальным дизайном, с анимациями';

let screenPrice = 10000;
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

let fullPrice = screenPrice + servicePrice1 + servicePrice2

let percentage = 15;
let servicePercentPrice = Math.round(fullPrice - (fullPrice * percentage / 100))
console.log(servicePercentPrice)

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