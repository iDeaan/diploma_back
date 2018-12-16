module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'interests',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      image: Sequelize.STRING,
      materials_number: Sequelize.INTEGER,
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
