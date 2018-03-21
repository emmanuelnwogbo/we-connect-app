export default (sequelize, DataTypes) => {
  const Review = sequelize.define('review', {
    content: {
      type: DataTypes.STRING,
    },
  });

  Review.associate = models => {
    Review.belongsTo(models.Business, {
      foreignKey: 'businessid',
    });
    Review.belongsTo(models.User, {
      foreignKey: 'userid',
    });
  };

  return Review;
};
