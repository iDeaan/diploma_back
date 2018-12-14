const DecisionTree = require('decision-tree');
const models = require('../models');
const {
  convertAge, convertAverageLikes, convertTimeBetweenPosts, convertPostWords, convertPostsPerDay
} = require('../helpers/convertModelData');

const closeConnection = () => models.sequelize.close();

const util = require('util');

class ClassifyUsers {
  constructor() {
    this.command = 'classify <className> <userId>';
    this.description = 'Classify Users';
  }

  run(className = 'sucess_bloger', userId) {
    models.UsersClassesTestData.findAll({
      where: {
        className
      },
      raw: true
    }).then((items) => {
      models.Users.find({
        where: {
          id: userId
        }
      }).then((currentUser) => {
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

        const treeModel = dt.toJSON();

        // @TODO remover
        models.UsersClasses.destroy({
          where: {
            user_id: userId,
            class_name: className
          }
        }).then(() => {
          if (predicted_class === true) {
            models.UsersClasses.create({
              user_id: userId,
              class_name: className,
              tree: JSON.stringify(treeModel)
            }).then(() => closeConnection());
          } else {
            closeConnection();
          }
        });

        // console.log(util.inspect(treeModel, { showHidden: false, depth: null }));
        // console.log('predicted_class => ', predicted_class);
      });
    });
  }
}

module.exports = ClassifyUsers;
