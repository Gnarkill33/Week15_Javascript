// Массивы
const cities = ['Москва', 'Санкт-Петербург', 'Нью-Йорк', 'Токио'];
let temperatures = []; 

// Получаем температуру для каждого города
for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру для города ${cities[i]}`);
    temperatures.push(Number(temperature));
}

// Находим элементы DOM
const list = document.querySelector('.container');
const minmax = document.querySelector('.minmax');

// Перебираем элементы массива, составляем список
for (let i = 0; i < cities.length; i++) {
    const oneCity = document.createElement('li');
    list.append(oneCity);
    oneCity.textContent = `Температура в г. ${cities[i]}: ${temperatures[i]}ºC`;
}

// Находим максимальную и минимальную температуру 
const maximum = Math.max(...temperatures);
const maxTemp = document.createElement ('div');
minmax.append(maxTemp);
maxTemp.textContent = `Максимальная температура: ${maximum}ºC`;

const minimum = Math.min(...temperatures);
const minTemp = document.createElement ('div');
minmax.append(minTemp);
minTemp.textContent = `Минимальная температура: ${minimum}ºC`;
