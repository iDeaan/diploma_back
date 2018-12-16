module.exports = (sequelize, DataTypes) => {
  const UsersInterests = sequelize.define('UsersInterests', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    interest_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'users_interests'
  });

  return UsersInterests;
};
