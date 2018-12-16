module.exports = (sequelize, DataTypes) => {
  const AdvetiserInterests = sequelize.define('AdvetiserInterests', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    advetiser_id: DataTypes.INTEGER,
    interest_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'advetiser_interests'
  });

  return AdvetiserInterests;
};
