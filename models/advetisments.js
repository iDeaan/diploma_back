module.exports = (sequelize, DataTypes) => {
  const Advetisments = sequelize.define('Advetisments', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    advetiser_id: DataTypes.INTEGER,
    interest_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.INTEGER,
    status: DataTypes.STRING,
    begin_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    view_number: DataTypes.INTEGER,
    clicks_number: DataTypes.STRING,
    link_to: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    tableName: 'advetisments'
  });

  return Advetisments;
};
