module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'advetisments',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      advetiser_id: Sequelize.INTEGER,
      interest_id: Sequelize.INTEGER,
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      image: Sequelize.INTEGER,
      status: Sequelize.STRING,
      begin_date: Sequelize.STRING,
      end_date: Sequelize.STRING,
      view_number: Sequelize.INTEGER,
      clicks_number: Sequelize.STRING,
      link_to: Sequelize.STRING,
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
