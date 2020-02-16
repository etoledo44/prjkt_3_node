'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    senha: DataTypes.STRING,
    valido: DataTypes.BOOLEAN
  }, {});
  Test.associate = function(models) {
    // associations can be defined here
  };
  return Test;
};