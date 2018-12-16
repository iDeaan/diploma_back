module.exports = (sequelize, DataTypes) => {
  const Interests = sequelize.define('Interests', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    materials_number: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'interests'
  });

  Interests.associate = (models) => {
    models.Interests.hasMany(
      models.Materials,
      {
        foreignKey: 'interest_id',
        sourceKey: 'id',
        as: 'materials'
      }
    );
    models.Interests.hasMany(
      models.Advetisments,
      {
        foreignKey: 'interest_id',
        sourceKey: 'id',
        as: 'advetisments'
      }
    );
  };

  return Interests;
};
