//Задание 1
// Выведите числа от 1 до 10 в консоль

/*let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}*/

//***************************************************************************************************************************************

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль

/*for (let i = 1; i <= 20; i ++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}*/

//***************************************************************************************************************************************

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке

/*let i = 10;
do {
    console.log(i);
    i--;
} while (i >= 1);*/

//***************************************************************************************************************************************

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10

/*for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
    console.log(i)
};
}*/

//***************************************************************************************************************************************

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль

/*let num = 0;
for (let i = 1; i <= 100; i++) {
    num += i;
}
console.log(num);*/

//***************************************************************************************************************************************

//Задание 6
// Выведите все элементы массива в консоль используя цикл for

/*const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}*/

//***************************************************************************************************************************************

//Задание 7
// Выведите сумму всех элементов массива используя цикл for

/*const numbers = [1, 2, 3, 4, 5];
let num = 0;

for (let i = 0; i <= numbers.length; i++) {
    num += i;
}
console.log(num);*/

//***************************************************************************************************************************************

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже существующим элементам: animals[0] = animals[0] + " - прекрасное животное";

/*let animals = ["Кот", "Рыба", "Лемур"];

for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + " - прекрасное животное";
    console.log(animals[i]);
}*/

//***************************************************************************************************************************************

//Задание 9
// Выведите символы в строке в консоль

/*const str = 'Hello';

for (let symbol of str) {
    console.log(symbol);
}*/

//***************************************************************************************************************************************

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6

/*const array = [1, 2, 3, 4, 5];

for (let item of array) {
    console.log(item);
}*/

//***************************************************************************************************************************************

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split

/*const sentences = ['Hello, world!', 'How are you?'];
const string = sentences.join(' ');
const separateWords = string.split(' ');

for (let item of separateWords) {
    console.log(item);
}*/

//***************************************************************************************************************************************

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7

/*const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let item of numbers) {
    sum += item;
}
console.log(sum);*/

//***************************************************************************************************************************************

//Задание 13
// Выведите длину каждого слова из массива строк в консоль

/*const list = ['apple', 'banana', 'cherry'];

for (let item of list) {
    console.log(item.length);
}*/

//***************************************************************************************************************************************

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр

/*const words = ['Hello', 'world', '!'];

for (let i = 0; i < words.length; i++) {
    const newWord = words[i];
    const capitalizedWord = newWord.toUpperCase();
    words[i] = capitalizedWord;
}
console.log(words);*/

//***************************************************************************************************************************************

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes

/*const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let symbol of greeting.toLowerCase()) {
    if (vowels.includes(symbol)) {
        vowelCount += 1;
    }
}
console.log(vowelCount);*/

//***************************************************************************************************************************************

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними

/*const words = ['Hello', 'world', '!'];

const line = words.join(" ");
console.log(line);*/

//***************************************************************************************************************************************

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while

/*let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}*/

//***************************************************************************************************************************************

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while

/*let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}*/

//***************************************************************************************************************************************

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break

/*const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

let i = 0;
while (allNumbers[i] > 0) {
    console.log(allPositive);
    i ++;
if (allNumbers[i] < 0) {
    break;
}
}*/

//***************************************************************************************************************************************

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while

/*const random = [2, 4, 6, -3, 8, 10];
let i = 0;

do {
    console.log(random[i]);
    i ++;
} while (random[i] > 0);*/

//***************************************************************************************************************************************

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

/*let i = 0;
do {
    i ++;
    if (i % 3 == 0) {
    continue;
}
    console.log(i);
}
while (i > 0 && i <= 100);*/

//***************************************************************************************************************************************

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100

/*let num;
let sum = 0;

do {
    num = prompt("Введите число, пока сумма введенных Вами чисел не станет больше 100", 0);
    sum += num;
} while (sum <= 100);*/

//***************************************************************************************************************************************

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет

/*function changeToBlue() {
    const blueHeader = document.getElementsByTagName('h4');
    for (let i = 0; i < blueHeader.length; i++) {
    blueHeader[i].style.backgroundColor = 'blue';
    }
}
changeToBlue();*/

//***************************************************************************************************************************************

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet

/*let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

for (let i = 0; i < 6; i++) {
    let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
    randomString += randomLetter;
};
console.log(randomString);*/