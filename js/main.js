
/**
 * Функция получает два числа для диапазона: мин и макс
 * @param  {number} min начальное значение диапазона (больше или равно нулю)
 * @param  {number} max конечное значение диапазона (больше нуля)
 * @returns {number} рандомное число из заданного диапазона
 */
const getRandom = function(min, max) {
  if(min >= 0 && max > 0 && max !== min && max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
}

/**
 * Функция получает длину комментария, максимальную длину и сравнивает их
 * @param  {number} string длина комментария
 * @param  {number} maxLength максимальная длина комментария (по умолчанию 140)
 * @returns {boolean} true, если длина комментария меньше или равна максимальной
 */
const checkMaxLength = function(string, maxLength = 140) {
  return string.length <= maxLength;
}


const notes = ['до', 'ре', 'ми', 'фа', 'соль', 'ля', 'си' ];
/**
 * Функция получает массив
 * @param  {array} array
 * @returns {element} случайный элемент массива
 */
const getRandomElement = function(array) {
  return array[Math.floor(Math.random() * (array.length - 1))];
}
