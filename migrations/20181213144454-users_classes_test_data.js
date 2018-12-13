module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'users_classes_test_data',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      surname: Sequelize.STRING,
      age: Sequelize.STRING,
      country_code: Sequelize.STRING,
      email: Sequelize.STRING,
      gender: Sequelize.STRING,
      job_category_id: Sequelize.INTEGER,
      password: Sequelize.STRING,
      top_1: Sequelize.STRING,
      top_2: Sequelize.STRING,
      top_3: Sequelize.STRING,
      average_likes: Sequelize.STRING,
      average_time_between_posts: Sequelize.STRING,
      average_post_words: Sequelize.STRING,
      average_posts_number_per_day: Sequelize.STRING,
      className: Sequelize.STRING,
      result: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    },
    {
      charset: 'utf8',
      collate: 'utf8_unicode_ci'
    }
  ),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
