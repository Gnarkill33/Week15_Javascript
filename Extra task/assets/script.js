numbers = [];

// Заполняем массив целыми числами
for(i = -10; i <= 10; i++) {
    numbers.push(i);
}

// Удаляем все отрицательные числа из массива
positiveNumbers = [];
for (const item of numbers) {
    if (item > 0) {
    positiveNumbers.push(item);
}
}

// Возводим каждое число в квадрат
positiveSquaredNumbers = [];
for(i = 0; i <= positiveNumbers.length; i++) {
    positiveSquaredNumbers.push(i * i);
}

// Сортируем числа в порядке убывания - честно нагуглила и применила, сама бы недодумалась до такого:)

for (let i = 0; i < positiveSquaredNumbers.length; i++) {
    for (let j = 0; j < positiveSquaredNumbers.length; j++) {
        if (positiveSquaredNumbers[j] < positiveSquaredNumbers[i]) {
            [positiveSquaredNumbers[i], positiveSquaredNumbers[j]] = [positiveSquaredNumbers[j], positiveSquaredNumbers[i]];
        }
    }
}