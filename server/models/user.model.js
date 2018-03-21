export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  });

  User.associate = models => {
    User.belongsTo(models.Business, {
      foreignKey: 'businessid',
    });
  };

  return User;
};
