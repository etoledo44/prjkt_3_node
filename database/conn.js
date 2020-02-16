const Sequelize = require('sequelize')

const conn = new Sequelize('guiamail', 'superuser', 'superuser', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = conn