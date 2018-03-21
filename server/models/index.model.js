import Sequelize from 'sequelize';

const sequelize = new Sequelize('weconnect', 'postgres', '08033426880', {
  dialect: 'postgres',
});

const models = {
  User: sequelize.import('./user.model'),
  Business: sequelize.import('./business.model'),
  Review: sequelize.import('./review.model'),
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
