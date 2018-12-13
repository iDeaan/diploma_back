'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn(
      'users',
      'top_1',
      Sequelize.STRING
    ).then(() =>
      queryInterface.addColumn(
        'users',
        'top_2',
        Sequelize.STRING
      ).then(() =>
        queryInterface.addColumn(
          'users',
          'top_3',
          Sequelize.STRING
        ).then(() =>
          queryInterface.addColumn(
            'users',
            'average_likes',
            Sequelize.STRING
          ).then(() =>
            queryInterface.addColumn(
              'users',
              'average_time_between_posts',
              Sequelize.INTEGER
            ).then(() =>
              queryInterface.addColumn(
                'users',
                'average_post_words',
                Sequelize.INTEGER
              ).then(() =>
                queryInterface.addColumn(
                  'users',
                  'average_posts_number_per_day',
                  Sequelize.INTEGER
                ))))))),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
