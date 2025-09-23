let percentage = 10;

// 1. Проверка на число

function checkIsNumber(num) {
    return !isNaN(parseFloat(num) && isFinite(num));
}


let titleProject = prompt('Название проекта?');
console.log("Название проекта:", titleProject);

let screenValue = prompt('Шаблонные, с уникальным дизайном или с анимациями?');
console.log("Типы экранов:", screenValue);

let question = confirm('Нужен ли респонсивный сайт?');
console.log(question)

// 2. Получение стоимости экранов через цикл

let screenPrice;

while (true) {
    let input = prompt('Сколько будут стоить экраны?');
    if (input == null) {
        console.log('Пользователь отменил ввод стоимости экранов');
        break;
    }
    input = input.trim();
    if (checkIsNumber(input)) {
        screenPrice = +input;
        break;
    }
    console.log('Введите корректное число');
}
console.log('Стоимость экранов', screenPrice);

// 3. Оптимизация вопросов про сервисы через цикл

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 1; i <= 2; i++) {
        let serviceName = prompt(`Какой сервис #${i} нужен?`);
        let price;

        while (true) {
            let input = prompt(`Сколько будет стоить сервис "${serviceName}"?`);
            if (input == null) {
                console.log('Пользователь отменил ввод цены');
                break;

            }
            input = input.trim();
            if (checkIsNumber(input)) {
                price = +input;
                break;
            }
            console.log('Введите корректное число');
        }
        console.log(`Сервис #${i}: ${serviceName}, цена: ${price}`);
        sum += price;
    }
    return sum;
};

let allServicePrices = getAllServicePrices();
console.log('Стоимость всех сервисов:', allServicePrices)


// 4. Общая цена продукта

function getFullPrice() {
    return screenPrice + allServicePrices;
};
let fullPrice = getFullPrice();
console.log('Общая стоимость проекта:', fullPrice)


// 5. Функция для изменения названия проекта

function getTitle() {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}
titleProject = getTitle();
console.log('Название проекта (оформленное):', titleProject);


// 6. Итоговая стоимость за вычетом процента подрячику

function getServicePercentPrices() {
    return Math.round(fullPrice - (fullPrice * percentage / 100));
}
let servicePercentPrice = getServicePercentPrices();
console.log('Итоговая стоимость с учетом процента партнеру:', servicePercentPrice);


// 7. Функция расчета скидки
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
