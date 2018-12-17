const DecisionTree = require('decision-tree');
const chalk = require('chalk');
const models = require('../models');
const {
  convertAge, convertAverageLikes, convertTimeBetweenPosts, convertPostWords, convertPostsPerDay
} = require('../helpers/convertModelData');
const writeJsonFile = require('write-json-file');

const closeConnection = () => models.sequelize.close();

const util = require('util');

const classifyUserByClassName = (className, userId, index, length) => {
  return new Promise((resolve) => {
    models.UsersClassesTestData.findAll({
      where: {
        className
      },
      raw: true
    }).then((items) => {
      models.Users.findOne({
        where: {
          id: userId
        }
      }).then((currentUser) => {
        console.log(`[${index}/${length}]\tStarted classification for \'${chalk.yellow(className)}\'`);

        const training_data = items;
        const class_name = 'result';

        const features = [
          'age', 'top_1', 'top_2', 'top_3', 'average_likes', 'average_time_between_posts',
          'average_post_words', 'average_posts_number_per_day'
        ];

        const dt = new DecisionTree(training_data, class_name, features);


        const predictObjectParams = {
          age: convertAge(currentUser.age),
          gender: currentUser.gender,
          marital_status: currentUser.marital_status,
          top_1: currentUser.top_1,
          top_2: currentUser.top_2,
          top_3: currentUser.top_3,
          average_likes: convertAverageLikes(currentUser.average_likes),
          average_time_between_posts: convertTimeBetweenPosts(currentUser.average_time_between_posts),
          average_post_words: convertPostWords(currentUser.average_post_words),
          average_posts_number_per_day: convertPostsPerDay(currentUser.average_posts_number_per_day)
        };

        const predicted_class = dt.predict(predictObjectParams);

        console.log('\tClass belongs to user: ', predicted_class === 'true' ? chalk.green('yes') : chalk.red('no'));

        const treeModel = dt.toJSON();

        // @TODO remover
        return models.UsersClasses.destroy({
          where: {
            user_id: userId,
            class_name: className
          }
        }).then(() => {
          if (predicted_class === 'true') {
            console.log('\tSaving model to JSON.');
            setTimeout(() => {
              models.UsersClasses.create({
                user_id: userId,
                class_name: className,
                tree: JSON.stringify(treeModel)
              }).then(() => {
                writeJsonFile(`class_models/${className}.json`, treeModel)
                  .then(() => {
                    console.log('\tModel saved to file: ', chalk.yellow(`class_models/${className}.json`));
                    resolve();
                  });
              });
            }, 1000 + Math.floor(Math.random() * 2000));
          } else {
            resolve();
          }
        });

        // console.log(util.inspect(treeModel, { showHidden: false, depth: null }));
      });
    });
  })
}

async function classifyItems(classesList, userId) {
  for(const item of classesList) {
    await classifyUserByClassName(item.title, userId, item.id, classesList.length);
  }
};

class ClassifyUsers {
  constructor() {
    this.command = 'classify <className> <userId>';
    this.description = 'Classify Users';
  }

  run(className = 'sucess_bloger', userId) {
    models.Classes.findAll()
      .then((classesObjects) => {
        const classesList = classesObjects.map(item => item.dataValues);

        console.log('Classification Start');
        models.Users.findOne({
          where: {
            id: userId
          }
        }).then((user) => {
          const userData = user.dataValues;

          setTimeout(() => {
            console.log(`Classification is prepared for user.`);
            console.log(`\tID: ${chalk.yellow(userData.id)}`);
            console.log(`\tName: ${chalk.yellow(userData.name)}`);
            console.log(`\tAge: ${chalk.yellow(userData.age)}`);
            console.log(`\tGender: ${chalk.yellow(userData.gender === '1' ? 'Male' : 'Female')}`);

            console.log('Classification Start');
            classifyItems(classesList, userId)
              .then(() => {
                console.log('Classification Finished!');
                closeConnection();
              });
          }, 1000);
        });
      });
  }
}

module.exports = ClassifyUsers;
