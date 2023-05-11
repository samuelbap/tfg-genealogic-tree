// backend/src/routes/routes.js

const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
const documentLocationController = require('../controllers/documentLocationController');

// Document routes
router.get('/documents', documentController.getAllDocuments);
router.post('/documents', documentController.createDocument);
router.get('/documents/:id', documentController.getDocumentById);
router.put('/documents/:id', documentController.updateDocument);
router.delete('/documents/:id', documentController.deleteDocument);

// DocumentLocation routes
router.get('/documentlocations', documentLocationController.getAllDocumentLocations);
router.post('/documentlocations', documentLocationController.createDocumentLocation);
router.get('/documentlocations/:id', documentLocationController.getDocumentLocationById);
router.put('/documentlocations/:id', documentLocationController.updateDocumentLocation);
router.delete('/documentlocations/:id', documentLocationController.deleteDocumentLocation);

// Person routes
router.get('/persons', personController.getAllPersons);
router.post('/persons', personController.createPerson);
router.get('/persons/:id', personController.getPersonById);
router.put('/persons/:id', personController.updatePerson);
router.delete('/persons/:id', personController.deletePerson);

module.exports = router;
