module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    country_code: DataTypes.STRING,
    gender: DataTypes.STRING,
    job_category_id: DataTypes.INTEGER,
    password: DataTypes.STRING,
    marital_status: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'users'
  });

  // Users.associate = (models) => {
  //   models.Users.hasMany(
  //     models.Tasks,
  //     {
  //       foreignKey: 'user_id',
  //       sourceKey: 'id'
  //     }
  //   );
  //   models.Users.hasMany(
  //     models.UsersFriends,
  //     {
  //       foreignKey: 'user_id',
  //       sourceKey: 'id',
  //       as: 'friends'
  //     }
  //   );
  //   models.Users.hasMany(
  //     models.UsersImages,
  //     {
  //       foreignKey: 'user_id',
  //       sourceKey: 'id',
  //       as: 'images'
  //     }
  //   );
  //   models.Users.hasOne(
  //     models.UsersTokens,
  //     {
  //       foreignKey: 'user_id',
  //       sourceKey: 'id',
  //       as: 'token'
  //     }
  //   );
  // };

  return Users;
};
