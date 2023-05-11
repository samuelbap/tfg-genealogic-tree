// backend/src/controllers/documentLocationController.js

const { DocumentLocation } = require('../models');

exports.getAllDocumentLocations = async (req, res) => {
  try {
    const documentLocations = await DocumentLocation.findAll();
    res.status(200).json(documentLocations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDocumentLocation = async (req, res) => {
  try {
    const newDocumentLocation = await DocumentLocation.create(req.body);
    res.status(201).json(newDocumentLocation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getDocumentLocationById = async (req, res) => {
  try {
    const documentLocation = await DocumentLocation.findByPk(req.params.id);
    if (documentLocation) {
      res.status(200).json(documentLocation);
    } else {
      res.status(404).json({ error: 'DocumentLocation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDocumentLocation = async (req, res) => {
  try {
    const updatedDocumentLocation = await DocumentLocation.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    if (updatedDocumentLocation[0]) {
      res.status(200).json(updatedDocumentLocation[1]);
    } else {
      res.status(404).json({ error: 'DocumentLocation not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteDocumentLocation = async (req, res) => {
  try {
    const rowsDeleted = await DocumentLocation.destroy({ where: { id: req.params.id } });
    if (rowsDeleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'DocumentLocation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
