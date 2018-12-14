module.exports = (sequelize, DataTypes) => {
  const UsersClasses = sequelize.define('UsersClasses', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER,
    tree: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'users_classes'
  });

  return UsersClasses;
};
