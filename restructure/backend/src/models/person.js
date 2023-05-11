// backend/src/models/person.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Person = sequelize.define('person', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  personName: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  lastName: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
});

module.exports = Person;
