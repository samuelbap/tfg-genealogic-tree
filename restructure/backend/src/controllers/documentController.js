// backend/src/controllers/documentController.js

const { Document, DocumentLocation, Person } = require('../models');

exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.findAll({
      include: [
        {
          model: DocumentLocation,
          as: 'location',
        },
        {
          model: Person,
          as: 'rootPerson',
        },
      ],
    });
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDocument = async (req, res) => {
  try {
    const newDocument = await Document.create(req.body);
    res.status(201).json(newDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getDocumentById = async (req, res) => {
  try {
    const document = await Document.findByPk(req.params.id, {
      include: [
        {
          model: DocumentLocation,
          as: 'location',
        },
        {
          model: Person,
          as: 'rootPerson',
        },
      ],
    });
    if (document) {
      res.status(200).json(document);
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDocument = async (req, res) => {
  try {
    const updatedDocument = await Document.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    if (updatedDocument[0]) {
      res.status(200).json(updatedDocument[1]);
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteDocument = async (req, res) => {
  try {
    const rowsDeleted = await Document.destroy({ where: { id: req.params.id } });
    if (rowsDeleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
