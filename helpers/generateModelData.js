const faker = require('faker');
const crypto = require('crypto');

const models = require('../models');
const {
  convertAge,
  convertAverageLikes,
  convertTimeBetweenPosts,
  convertPostWords,
  convertPostsPerDay,
  convertGender,
  convertMaritalStatus
} = require('../helpers/convertModelData');

const categoriesList = [
  'Music', 'Film', 'Sport', 'Politic', 'Book', 'Death', 'Computer', 'Information', 'Science'
];

const returnRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const createNewUser = (props) => {
  const {
    age, avLikes, avTimeBetweenPosts, avPostWords, avPostsPerDay, result, className
  } = props;


  const newUserData = faker.helpers.userCard();
  const userName = newUserData.name;

  newUserData.name = (userName).substr(0, userName.indexOf(' '));
  newUserData.surname = (userName).substr(userName.indexOf(' ') + 1);
  newUserData.login = newUserData.username;
  newUserData.password = crypto.createHmac('sha256', newUserData.phone).digest('hex');

  const item = {
    name: newUserData.name,
    surname: newUserData.surname,
    age: convertAge(returnRandomNumber(age.min, age.max)),

    gender: convertGender(Math.floor(Math.random() * 2)),
    marital_status: convertMaritalStatus(Math.floor(Math.random() * 2)),

    top_1: categoriesList[Math.floor(Math.random() * categoriesList.length)],
    top_2: categoriesList[Math.floor(Math.random() * categoriesList.length)],
    top_3: categoriesList[Math.floor(Math.random() * categoriesList.length)],

    average_likes: convertAverageLikes(returnRandomNumber(avLikes.min, avLikes.max)),
    average_time_between_posts:
      convertTimeBetweenPosts(returnRandomNumber(avTimeBetweenPosts.min, avTimeBetweenPosts.max)),
    average_post_words: convertPostWords(returnRandomNumber(avPostWords.min, avPostWords.max)),
    average_posts_number_per_day:
      convertPostsPerDay(returnRandomNumber(avPostsPerDay.min, avPostsPerDay.max)),

    result: !!(result.max ? returnRandomNumber(result.min, result.max) : result),
    className
  };

  return models.UsersClassesTestData.create(item).then(() => {}).catch(err => console.log('err', err));
};

module.exports = {
  createNewUser
};
