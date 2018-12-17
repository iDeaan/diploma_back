module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define('Classes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    isActive: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'classes'
  });

  return Classes;
};
