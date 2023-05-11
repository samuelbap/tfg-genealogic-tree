// backend/src/controllers/personController.js

const { Person } = require('../models');

exports.getAllPersons = async (req, res) => {
  try {
    const persons = await Person.findAll();
    res.status(200).json(persons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPerson = async (req, res) => {
  try {
    const newPerson = await Person.create(req.body);
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPersonById = async (req, res) => {
  try {
    const person = await Person.findByPk(req.params.id);
    if (person) {
      res.status(200).json(person);
    } else {
      res.status(404).json({ error: 'Person not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePerson = async (req, res) => {
  try {
    const updatedPerson = await Person.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    if (updatedPerson[0]) {
      res.status(200).json(updatedPerson[1]);
    } else {
      res.status(404).json({ error: 'Person not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePerson = async (req, res) => {
  try {
    const rowsDeleted = await Person.destroy({ where: { id: req.params.id } });
    if (rowsDeleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Person not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
