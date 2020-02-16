'use strict';

const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = []
    let amount = 6

    while(amount--){
      let date = new Date()
      let random = (min, max)=>{
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1 )) + min
      }
      data.push({
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        role: random(1, 5),
        createdAt: date,
        updatedAt: date
      })
    }
    return queryInterface.bulkInsert('Users', data , {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
