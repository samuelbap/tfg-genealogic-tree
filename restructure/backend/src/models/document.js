// backend/src/models/document.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const DocumentLocation = require('./documentLocation');
const Person = require('./person');

const Document = sequelize.define('document', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  documentType: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  eventLocation: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  issueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  imageNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING(300),
    allowNull: false,
  },
});

Document.belongsTo(DocumentLocation, {
  foreignKey: 'locationId',
  as: 'location',
});

Document.belongsTo(Person, {
  foreignKey: 'rootPersonId',
  as: 'rootPerson',
});

module.exports = Document;
