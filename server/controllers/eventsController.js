const knex = require('../db.js');

// Get events for listview
exports.getAllEvents = (req, res) => {
  knex.select().from('events')
    .then(response => (
      res.status(200).json(response)
    ))
    .catch(err => console.log('Error creating event: ', err));
};

// Get a single event
exports.getEvent = (req, res) => {
  const id = req.params.id;
  knex('events').where('id', id)
    .then(response => (
      res.status(200).json(response)
    ))
    .catch(err => console.log('Error creating event: ', err));
};

// Edit an event
exports.editEvent = (req, res) => {
  const id = req.params.id;
  knex('events').where('id', id).update(req.body)
    .then(response => (
      res.status(200).json(response)
    ))
    .catch(err => console.log('Error creating event: ', err));
};

// Delete an event
exports.deleteEvent = (req, res) => {
  const id = req.params.id;
  knex('events').where('id', id).del()
    .then(response => (
      res.status(204).json(response)
    ))
    .catch(err => console.log('Error creating event: ', err));
};

// Create an event
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
