const Sequelize = require('sequelize');
const db = require('../db');

const Subscription = db.define('subscription', {
  name: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DECIMAL,
  },
  image_url: {
    type: Sequelize.TEXT,
  },
  website_url: {
    type: Sequelize.TEXT,
  },
});

module.exports = Subscription;
