
const POST_DESCRIPIONS_COUNT = 25;

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
const getRandom = function(min, max) {
  if(min >= 0 && max > 0 && max !== min && max > min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return NaN;
}

getRandom(1,10);

/**
 * Функция получает длину комментария, максимальную длину и сравнивает их
 * @param  {number} string длина комментария
 * @param  {number} maxLength максимальная длина комментария (по умолчанию 140)
 * @returns {boolean} true, если длина комментария меньше или равна максимальной
 */
const checkMaxLength = function(string, maxLength = 140) {
  return string.length <= maxLength;
}

checkMaxLength(110);

/**
 * Функция получает число и создает массив от 1 до этого числа
 * @param {number} number число, определяющее длину массива (> 0)
 * @returns {array | NaN} массив чисел от 1 до number
 */
const createArrayOfNumbers = function(number) {
  if (number > 0) {
    return Array.from(Array(Math.floor(number)).keys()).map(i => i+1)
  }
  return NaN;
}

const notes = ['до', 'ре', 'ми', 'фа', 'соль', 'ля', 'си' ];

/**
 * Функция получает массив
 * @param  {array} array
 * @returns {element} случайный элемент массива
 */
const getRandomArrayElement = function(array) {
  return array[Math.floor(Math.random() * (array.length))];
}

getRandomArrayElement(notes);

/**
 * Функция перемешивает элементы массива
 * @param {array} array
 * @returns {array} новый массив с перемешанными элементами
 */
const shuffle = (array) => {
  const cloneArray = array.slice();
  let j;
  let temp;
  for (let i = 0; i < cloneArray.length; i++) {
    j = Math.floor(Math.random() * (i + 1));
    temp = cloneArray[j];
    cloneArray[j] = cloneArray[i];
    cloneArray[i] = temp;
  }
  return cloneArray;
};

const descriptionsId = shuffle(createArrayOfNumbers(25));
const photosId = shuffle(createArrayOfNumbers(25));
const commentsId = shuffle(createArrayOfNumbers(100));

const createPost = () => {
  return {
    id: descriptionsId.shift(),
    url: `photos/${photosId.shift()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandom(15, 200),
    comment: [
      {
        id: commentsId.shift(),
        avatar: `img/avatar-${getRandom(1, 6)}.svg`,
        message: getRandomArrayElement(MESSAGES),
        name: getRandomArrayElement(NAMES),
      },
      {
        id: commentsId.shift(),
        avatar: `img/avatar-${getRandom(1, 6)}.svg`,
        message: getRandomArrayElement(MESSAGES),
        name: getRandomArrayElement(NAMES),
      },
    ],
  };
};

const postDescriptions = new Array(POST_DESCRIPIONS_COUNT).fill(null).map(() => createPost());
postDescriptions[0];
