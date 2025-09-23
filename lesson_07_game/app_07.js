const gameBotFunction = function () {
    // 2. Функция для генерации случайного числа
    function randomGenerate(min, max) {
        return Math.floor((Math.random()) * (max - min + 1)) + min;
    }

    // 3. Генерируем загаданное число
    let mysteryNumber = randomGenerate(1, 100);

    // 4. Количество попыток
    let tries = 5;

    alert('Игра началась! Я загадал число от 1 до 100. У вас ' + tries + ' попыток');

    // 6. Рекурсивная функция для угадывания числа
    function getResult() {
        let answer = prompt('Угадайте число от 1 до 100');

        // 7. Проверка на отмену
        if (answer === null) {
            alert('Вы завершили игру!');
            return;
        }

        // 8. Проверка на отмену
        answer = answer.trim();
        while (answer === "" || isNaN(answer)) {
            answer = prompt('Введите корректное число!');
            if (answer === null) {
                alert('Вы завершили игру');
                return;
            }
            answer = answer.trim();
        }
        let answerNum = Number(answer);

        // 9. Проверка с загаданным числом
        if (answerNum < mysteryNumber) {
            alert('Загаданное число больше. Осталось попыток: ' + tries)
        } else if (answerNum > mysteryNumber) {
            alert('Загаданное число меньше. Осталось попыток: ' + tries)
        } else {
            // Поздравление с победой
            let again = confirm('Поздравляю! Вы угадали, хотите сыграть еще?');
            if (again) {
                tries = 5;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
            } else {
                alert('Спасибо за игру!');
                return;
            }
        }

        // 10. Логика уменьшения попыток
        tries--;
        if (tries > 0) {
            getResult();
        } else {
            let again = confirm('Попытки закончились. Хотите сыграть еще?');
            if (again) {
                tries = 5;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
            } else {
                alert('Вы завершили игру');
            }
        }
    }
    getResult();
}
gameBotFunction()