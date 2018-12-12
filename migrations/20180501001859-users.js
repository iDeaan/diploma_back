module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'users',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: Sequelize.STRING,
      surname: Sequelize.STRING,
      age: Sequelize.INTEGER,
      country_code: Sequelize.STRING,
      email: Sequelize.STRING,
      gender: Sequelize.STRING,
      job_category_id: Sequelize.INTEGER,
      password: Sequelize.STRING,
      marital_status: Sequelize.STRING,
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
