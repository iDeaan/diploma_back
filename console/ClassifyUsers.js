const DecisionTree = require('decision-tree');
const models = require('../models');
const { convertAge, convertAverageLikes } = require('../helpers/convertModelData');

const closeConnection = () => models.sequelize.close();

const util = require('util');

class ClassifyUsers {
  constructor() {
    this.command = 'classify';
    this.description = 'Classify Users';
  }

  run() {
    models.UsersClassesTestData.findAll({
      where: {
        className: 'success_bloger'
      },
      raw: true
    }).then((items) => {
      const training_data = items;
      const class_name = 'result';

      // const features = [
      //   'age', 'top_1', 'top_2', 'top_3', 'average_likes', 'average_time_between_posts',
      //   'average_post_words', 'average_posts_number_per_day'
      // ];

      const features = ['age', 'average_likes']

      const dt = new DecisionTree(training_data, class_name, features);

      const predicted_class = dt.predict({
        age: convertAge(39),
        average_likes: convertAverageLikes(1750)
      });

      const treeModel = dt.toJSON();

      console.log(util.inspect(treeModel, { showHidden: false, depth: null }));
      console.log('predicted_class => ', predicted_class);
      closeConnection();
    });
  }
}

module.exports = ClassifyUsers;
