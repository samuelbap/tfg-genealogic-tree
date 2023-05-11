// backend/src/models/children.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Person = require('./person');
const Document = require('./document');
const partnership = require('./partnership');

const children = sequelize.define('children', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

children.belongsTo(Person, {
  foreignKey: 'idChildren',
  as: 'child',
});

children.belongsTo(Document, {
  foreignKey: 'idDocument',
  as: 'document',
});

children.belongsTo(partnership, {
  foreignKey: 'idPartnership',
  as: 'partnership',
});

module.exports = children;
