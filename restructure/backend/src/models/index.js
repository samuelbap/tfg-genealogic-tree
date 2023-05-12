// backend/src/models/index.js

const { Model } = require('sequelize');
const sequelize = require('../config/database');

const DocumentModel = require('./document');
const DocumentLocationModel = require('./documentLocation');
const PersonModel = require('./person');
// const DocumentProtagonistModel = require('./documentProtagonist');
// const DocumentPartnershipModel = require('./documentPartnership');
// const DocumentChildrenModel = require('./documentChildren');

const models = {
  Document: DocumentModel,
  DocumentLocation: DocumentLocationModel,
  Person: PersonModel,
  // DocumentProtagonist: DocumentProtagonistModel.init(sequelize, Model),
  // DocumentPartnership: DocumentPartnershipModel.init(sequelize, Model),
  // DocumentChildren: DocumentChildrenModel.init(sequelize, Model),
};

// Export models and Sequelize instance
module.exports = {
  ...models,
  sequelize,
};
