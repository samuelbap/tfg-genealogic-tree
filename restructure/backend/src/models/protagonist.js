// backend/src/models/documentProtagonist.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Person = require('./person');
const Document = require('./document');

const DocumentProtagonist = sequelize.define('documentProtagonist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

DocumentProtagonist.belongsTo(Person, {
  foreignKey: 'idPerson',
  as: 'person',
});

DocumentProtagonist.belongsTo(Document, {
  foreignKey: 'idDocument',
  as: 'document',
});

module.exports = DocumentProtagonist;
