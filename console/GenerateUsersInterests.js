const chalk = require('chalk');
const models = require('../models');
const { returnRandomNumber } = require('../helpers/generateModelData');

const generateNewUserInterest = (data) => {
  return models.UsersInterests.create(data).then(() => {}).catch(() => {});
};

class GenerateUsersInterests {
  constructor() {
    this.command = 'generate_users_interests';
    this.description = 'Generate users interests';
  }

  run() {
    let promises = [];

    for (let i = 0; i < 2000; i++) {
      const object = {
        user_id: i,
        interest_id: returnRandomNumber(1, 6)
      };

      promises.push(generateNewUserInterest(object).then(() => {
        console.log(chalk.green(' ✔ new interest generated!'));
      }));
    }

    return Promise.all(promises).then(() => {
      console.log(chalk.red(`\nTotal: ${2000} added!`));
      models.sequelize.close();
    });
  }
}

module.exports = GenerateUsersInterests;
