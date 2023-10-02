// eslint-disable-next-line no-unused-vars
import photosDB from './photos.json';
// eslint-disable-next-line no-unused-vars
import friendsDB from './friends.json';

export default {
  const photosDB = require('./photos.json'),
  function getRandomElement(array) {
    return array [(parseInt(Math.random() * array.length))]; 

    getRandomElement(photosDB);
  }
  

  getNextPhoto() {
    const friend = getRandomElement(photosDB);
    const photos = photosDB[friend.id];
    const photo = getRandomElement(photos);

    return {friend, url: photo.url}
  },
};
