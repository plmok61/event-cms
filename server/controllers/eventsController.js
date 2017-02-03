// const knex = require('knex')({ client: 'pg' });
const knex = require('../db.js');

exports.getAllEvents = (req, res) => {
  knex.select().from('events')
    .then(response => (
      res.status(200).json(response)
    ))
    .catch(err => console.log('Error creating event: ', err));
};

exports.getEvent = (req, res) => {
  const id = req.params.id;
  knex('events').where('id', id)
    .then(response => (
      res.status(200).json(response)
    ))
    .catch(err => console.log('Error creating event: ', err));
};

exports.editEvent = (req, res) => {
  const id = req.params.id;
  knex('events').where('id', id).update(req.body)
    .then(response => (
      res.status(200).json(response)
    ))
    .catch(err => console.log('Error creating event: ', err));
};

exports.deleteEvent = (req, res) => {
  const id = req.params.id;
  knex('events').where('id', id).del()
    .then(response => (
      res.status(204).json(response)
    ))
    .catch(err => console.log('Error creating event: ', err));
};

exports.createEvent = (req, res) => {
  console.log('create: ', req.body);
  knex('events').returning('id').insert(req.body)
    .then((id) => {
      knex('events').where('id', id[0])
        .then(response => (
          res.status(201).json(response)
        ))
        .catch(err => console.log('Error creating event: ', err));
    })
    .catch(err => console.log('Error creating event: ', err));
};
