'use strict';

const path = require('path')
const data = require(path.join(__dirname, '..', 'seeds', 'ideas.json')) || [{}];

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Ideas', data, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Ideas', null, {});
  }
};
