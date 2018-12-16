

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable(
      'materials',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        image: Sequelize.STRING,
        mark: Sequelize.STRING,
        interest_id: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
      },
      {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
      }
    ).then(() =>
      queryInterface.addConstraint('materials', ['interest_id'], {
        type: 'foreign key',
        name: 'interests_materials',
        references: {
          table: 'interests',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })), /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */


  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
