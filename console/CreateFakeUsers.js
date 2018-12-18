const chalk = require('chalk');
const models = require('../models');
const { createNewFakeUser } = require('../helpers/generateModelData');

const createFakeUser = () => {
  const props = {
    age: { min: 8, max: 65 },
    avLikes: { min: 0, max: 100000 },
    avTimeBetweenPosts: { min: 10, max: 800 },
    avPostWords: { min: 1, max: 1000 },
    avPostsPerDay: { min: 0, max: 10 },
    result: { min: 0, max: 1 },
  };

  return createNewFakeUser(props);
};

class CreateFakeUsers {
  constructor() {
    this.command = 'cfu <usersNumber>';
    this.description = 'Create fake users (for test)';
  }

  run(usersNumber) {
    let promises = [];

    for (let i = 0; i < usersNumber; i++) {
      promises.push(createFakeUser(i, 1).then(() => {
        console.log(chalk.green(' ✔ new fake user generated!'));
      }));
    }

    return Promise.all(promises).then(() => {
      console.log(chalk.red(`\nTotal: ${usersNumber} added!`));
      models.sequelize.close();
    });
  }
}

module.exports = CreateFakeUsers;
