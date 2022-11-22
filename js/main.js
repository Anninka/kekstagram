
'use strict';

const POST_COUNT = 25;
const ELEMENTS_COUNT = 100;

const AvatarNumber = {
  MIN: 1,
  MAX: 6,
};

const NumberOfLikes = {
  MIN: 15,
  MAX: 200,
};

const NumberOfComments = {
  MIN: 1,
  MAX: 4,
};

const DESCRIPTIONS = [
  'Удачный кадр',
  'Один кадр, а воспоминаний на всю жизнь!',
  'Тестим новую камеру! =)',
  'А могло и получиться, если бы не ты!',
  'Да будет свет! Сказал монтер',
  'В этот день мы не остались дома',
  'Фотографы отдыхают',
  'Помните: вы единственный человек, который может наполнить ваш мир солнечным светом',
  'Всегда начинайте свой день с хороших людей и кофе',
  'Я пыталась заниматься йогой, но в позе лотоса уснула',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Артем',
  'Маринка',
  'Петя',
  'Настасья',
  'Иваныч',
  'Гера',
  'Игорь',
  'Василиска',
  'Дима',
  'Маша',
];



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
 * Функция получает длину комментария, максимальную длину и сравнивает их
 * @param  {number} string длина комментария
 * @param  {number} maxLength максимальная длина комментария (по умолчанию 140)
 * @returns {boolean} true, если длина комментария меньше или равна максимальной
 */
const checkMaxLength = (string, maxLength = 140) => {
  return string.length <= maxLength;
};

checkMaxLength(110);

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

/**
 * Функция генерирует коментарии со случайным содержимым
 * @returns {object} комментарий к посту с рандомными значениями
 */
const createComment = () => {
  const commentsId = shuffle(createArrayOfNumbers(ELEMENTS_COUNT));
  return {
    id: commentsId.shift(),
    avatar: `img/avatar-${getRandom(AvatarNumber.MIN, AvatarNumber.MAX)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

/**
 * Функция получает случайное число в параметрах
 * @param {number} randomNumber
 * @returns {array} массив из объектов, количество которых указано в параметре
 */
const getArrayOfComments = (randomNumber) => {
  let ArrayOfComments = [];

  for (let i = 1; i <= randomNumber; i++) {
    ArrayOfComments.push(createComment());
  }
  return ArrayOfComments;
};

/**
 * Функция возвращает объект, в котором рандомно генерируется пост для соц сети
 * @returns {object}
 */
const createPost = () => {
  const descriptionsId = shuffle(createArrayOfNumbers(POST_COUNT));
  const photosId = shuffle(createArrayOfNumbers(POST_COUNT));

  return {
    id: descriptionsId.shift(),
    url: `photos/${photosId.shift()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandom(NumberOfLikes.MIN, NumberOfLikes.MAX),
    comment: getArrayOfComments(getRandom(NumberOfComments.MIN, NumberOfComments.MAX)),
  };
};

const postDescriptions = new Array(POST_COUNT).fill(null).map(createPost);
postDescriptions[0];
