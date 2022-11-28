
import {getRandom, createArrayOfNumbers, getRandomArrayElement, shuffle} from './util.js';

const POST_COUNT = 25;
const ELEMENTS_COUNT = 100;

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

const descriptionsId = shuffle(createArrayOfNumbers(POST_COUNT));

const photosId = shuffle(createArrayOfNumbers(POST_COUNT));

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
const getArrayOfComments = (number) => {
  let ArrayOfComments = [];

  for (let i = 1; i <= number; i++) {
    ArrayOfComments.push(createComment());
  }
  return ArrayOfComments;
};


/**
 * Функция возвращает объект, в котором рандомно генерируется пост для соц сети
 * @returns {object}
 */
const createPost = () => {
  return {
    id: descriptionsId.shift(),
    url: `photos/${photosId.shift()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandom(NumberOfLikes.MIN, NumberOfLikes.MAX),
    comment: getArrayOfComments(getRandom(NumberOfComments.MIN, NumberOfComments.MAX)),
  };
};

const createPosts = (count = POST_COUNT) => {
  return new Array(count).fill(null).map(createPost);
};

export {createPosts};
