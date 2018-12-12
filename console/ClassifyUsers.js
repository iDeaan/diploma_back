const DecisionTree = require('decision-tree');
const chalk = require('chalk');
// const models = require('../models');

// const closeConnection = () => models.sequelize.close();

const util = require('util')

class ClassifyUsers {
  constructor() {
    this.command = 'classify';
    this.description = 'Classify Users';
  }

  run() {
    const training_data = [
      { color: 'blue', shape: 'square', liked: true },
      { color: 'red', shape: 'square', liked: false },
      { color: 'blue', shape: 'circle', liked: true },
      { color: 'red', shape: 'circle', liked: true },
      { color: 'red', shape: 'hexagon', liked: false },
      { color: 'yellow', shape: 'hexagon', liked: true },
      { color: 'yellow', shape: 'circle', liked: true },
    ];

    const test_data = [
      { color: 'blue', shape: 'hexagon', liked: false },
      { color: 'red', shape: 'hexagon', liked: false },
      { color: 'yellow', shape: 'hexagon', liked: true },
      { color: 'yellow', shape: 'circle', liked: true }
    ];

    const class_name = 'liked';

    const features = ['color', 'shape'];

    const dt = new DecisionTree(training_data, class_name, features);

    const predicted_class = dt.predict({
      color: 'blue',
      shape: 'hexagon'
    });

    const accuracy = dt.evaluate(test_data);

    const treeModel = dt.toJSON();

    console.log(util.inspect(treeModel, {showHidden: false, depth: null}))

    // models.Users.find({
    //   where: {
    //     email: userEmail
    //   }
    // }).then((currentUser) => {
    //   return models.Users.findAll({
    //     limit: Number(friendsNumber)
    //   }).then((users) => {
    //
    //     const promises = [];
    //
    //     users.map(user => {
    //       promises.push(
    //         models.UsersFriends.create({
    //           user_id: currentUser.id,
    //           friend_id: user.id,
    //           accepted: 1
    //         }).then(() => {
    //           // console.log(chalk.green(' ✔ new friend added!'));
    //         })
    //       );
    //     });
    //
    //     return Promise.all(promises).then(() => closeConnection());
    //   }).then(() => closeConnection());
    // }).catch((err) => {
    //   console.log('err', err);
    //   console.log(chalk.red(`User with email ${chalk.blue(userEmail)} does not exist!`));
    //   closeConnection();
    // });
  }
}

module.exports = ClassifyUsers;
