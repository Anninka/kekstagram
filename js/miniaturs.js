
import {createPosts} from './create-posts.js';

const createMiniaturs = () => {
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content;
  const newPictureTemplate = pictureTemplate.querySelector('.picture');
  const userPosts = createPosts();
  const picturesContainerFragment = document.createDocumentFragment();

  userPosts.forEach(({url, likes, comment}) => {
    const userPicture = newPictureTemplate.cloneNode(true);
    userPicture.querySelector('.picture__img').src = url;
    userPicture.querySelector('.picture__likes').textContent = likes;
    userPicture.querySelector('.picture__comments').textContent = comment.length;

    picturesContainerFragment.appendChild(userPicture);
  });

  picturesContainer.appendChild(picturesContainerFragment);
  return picturesContainer;
}

export {createMiniaturs};
