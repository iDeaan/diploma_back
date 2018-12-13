module.exports = (sequelize, DataTypes) => {
  const UsersClassesTestData = sequelize.define('UsersClassesTestData', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    age: DataTypes.STRING,
    country_code: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    job_category_id: DataTypes.INTEGER,
    password: DataTypes.STRING,
    top_1: DataTypes.STRING,
    top_2: DataTypes.STRING,
    top_3: DataTypes.STRING,
    average_likes: DataTypes.STRING,
    average_time_between_posts: DataTypes.STRING,
    average_post_words: DataTypes.STRING,
    average_posts_number_per_day: DataTypes.STRING,
    className: DataTypes.STRING,
    result: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'users_classes_test_data'
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

  return UsersClassesTestData;
};
