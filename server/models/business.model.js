export default (sequelize, DataTypes) => {
  const Business = sequelize.define('business', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    category: {
      type: DataTypes.STRING,
    },
  });

  return Business;
};
