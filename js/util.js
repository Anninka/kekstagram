
/**
 * Функция получает два числа для диапазона: мин и макс
 * @param  {number} min начальное значение диапазона (больше или равно нулю)
 * @param  {number} max конечное значение диапазона (больше нуля)
 * @returns {number | NaN} рандомное число из заданного диапазона
 */
const getRandom = (min, max) => {
  if(min >= 0 && max > 0 && max !== min && max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
};

/**
 * Функция получает число и создает массив от 1 до этого числа
 * @param {number} number число, определяющее длину массива (> 0)
 * @returns {array | NaN} массив чисел от 1 до number
 */
const createArrayOfNumbers = (number) => {
  if (number > 0) {
    return Array.from(Array(Math.floor(number)).keys()).map(i => i+1)
  }
  return NaN;
};

/**
 * Функция получает массив
 * @param  {array} array
 * @returns {element} случайный элемент массива
 */
const getRandomArrayElement = (array) => {
  return array[Math.floor(Math.random() * (array.length))];
};

/**
 * Функция перемешивает элементы массива
 * @param {array} array
 * @returns {array} новый массив с перемешанными элементами
 */
const shuffle = (array) => {
  let cloneArray = array.slice();
  array.forEach((_, i)=>{
    let j = Math.floor(Math.random() * (i + 1));
    [cloneArray[j], cloneArray[i]] = [cloneArray[i], cloneArray[j]];
  });
  return cloneArray;
};

export {getRandom, createArrayOfNumbers, getRandomArrayElement, shuffle};
