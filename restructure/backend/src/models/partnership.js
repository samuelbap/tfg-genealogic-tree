// backend/src/models/partnership.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Person = require('./person');
const Document = require('./document');

const partnership = sequelize.define('partnership', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

partnership.belongsTo(Document, {
  foreignKey: 'idDocument',
  as: 'document',
});

partnership.belongsTo(Person, {
  foreignKey: 'partner',
  as: 'partner1',
});

partnership.belongsTo(Person, {
  foreignKey: 'partner1',
  as: 'partner2',
});

module.exports = partnership;
