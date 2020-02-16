'use strict';

const {name, internet} = require('faker/locale/pt_BR')

module.exports = {
  up: (queryInterface, Sequelize) => {

      let data = []
      let amount = 50

      while (amount--) {
        let date = new Date()
        data.push({
          nome: name.firstName(),
          sobrenome: name.lastName(),
          senha: internet.password(),
          valido: false,
          createdAt: date,
          updatedAt: date
        })
      }
    return queryInterface.bulkInsert('Tests', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tests', null, {});
  }
};
