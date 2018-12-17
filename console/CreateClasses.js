const faker = require('faker');
const chalk = require('chalk');
const crypto = require('crypto');

const models = require('../models');

const defaultClassesItems = [
  {
    title: 'film_liker',
    isActive: 1,
  },
  {
    title: 'music_liker',
    isActive: 1,
  },
  {
    title: 'book_liker',
    isActive: 1,
  },
  {
    title: 'sport_liker',
    isActive: 1,
  },
  {
    title: 'active_social_network',
    isActive: 1,
  },
  {
    title: 'information_spreader',
    isActive: 1,
  },
  {
    title: 'success_bloger',
    isActive: 1,
  },
];

const createNewClass = (classData) =>
  models.Classes.create(classData).then(() => {}).catch(err => console.log('err', err));


class CreateInterests {
  constructor() {
    this.command = 'cnc';
    this.description = 'Create new CLASSES (for test)';
  }

  run() {
    let promises = [];

    for (let i=0; i < defaultClassesItems.length; i++) {
      promises.push(createNewClass(defaultClassesItems[i]).then(() => {
        console.log(chalk.green(' ✔ new class created!'));
      }));
    }

    return Promise.all(promises).then(() => {
      console.log(chalk.red(`\nTotal: ${defaultClassesItems.length} added!`));
      models.sequelize.close();
    });
  }
}

module.exports = CreateInterests;
