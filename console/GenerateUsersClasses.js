const chalk = require('chalk');
const models = require('../models');
const { createNewUser } = require('../helpers/generateModelData');

const createCustomUser = (className, top1Param = null, top2Param = null, top3Param = null) => {
  const props = {
    age: { min: 8, max: 65 },
    avLikes: { min: 0, max: 100000 },
    avTimeBetweenPosts: { min: 10, max: 800 },
    avPostWords: { min: 1, max: 1000 },
    avPostsPerDay: { min: 0, max: 10 },
    result: { min: 0, max: 1 },
    className
  };

  if(top1Param) props.top1Param = top1Param;
  if(top2Param) props.top2Param = top1Param;
  if(top3Param) props.top3Param = top1Param;

  return createNewUser(props);
};

class GenerateUsersClasses {
  constructor() {
    this.command = 'guc <usersNumber>';
    this.description = 'Generate users classes (for test)';
  }

  run(usersNumber) {
    const classes = [
      {
        className: 'film_liker',
        top1Param: 1
      },
      {
        className: 'music_liker',
        top1Param: 0
      },
      {
        className: 'book_liker',
        top1Param: 4
      },
      {
        className: 'sport_liker',
        top1Param: 2
      },
      {
        className: 'active_social_network'
      },
      {
        className: 'information_spreader'
      }
    ];

    let promises = [];

    for (let c = 1; c < classes.length; c++) {
      for (let i = 0; i < usersNumber; i++) {
        promises.push(createCustomUser(classes[c].className, classes[c].top1Param).then(() => {
          console.log(chalk.green(' ✔ new user created!'));
        }));
      }
    }

    return Promise.all(promises).then(() => {
      console.log(chalk.red(`\nTotal: ${usersNumber * classes.length} added!`));
      models.sequelize.close();
    });
  }
}

module.exports = GenerateUsersClasses;
