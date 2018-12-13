const chalk = require('chalk');
const models = require('../models');
const { createNewUser } = require('../helpers/generateModelData');

const createFailUser = () => {
  const props = {
    age: { min: 6, max: 17 },
    avLikes: { min: 0, max: 50000 },
    avTimeBetweenPosts: { min: 70, max: 600 },
    avPostWords: { min: 300, max: 500 },
    avPostsPerDay: { min: 1, max: 15 },
    result: false,
    className: 'success_bloger'
  };
  return createNewUser(props);
};

const createSuccessUser = () => {
  const props = {
    age: { min: 18, max: 60 },
    avLikes: { min: 0, max: 100000 },
    avTimeBetweenPosts: { min: 50, max: 800 },
    avPostWords: { min: 100, max: 1000 },
    avPostsPerDay: { min: 0, max: 20 },
    result: { min: 0, max: 1 },
    className: 'success_bloger'
  };
  return createNewUser(props);
};

class GenerateSuccessBlogers {
  constructor() {
    this.command = 'gsb <usersNumber>';
    this.description = 'Create fake users (for test)';
  }

  run(usersNumber) {
    let promises = [];

    for (let i = 0; i < usersNumber; i++) {
      const currentUserCreateFunc = i < usersNumber / 10 ? createFailUser : createSuccessUser;
      promises.push(currentUserCreateFunc().then(() => {
        console.log(chalk.green(' ✔ new user created!'));
      }));
    }

    return Promise.all(promises).then(() => {
      console.log(chalk.red(`\nTotal: ${usersNumber} added!`));
      models.sequelize.close();
    });
  }
}

module.exports = GenerateSuccessBlogers;
