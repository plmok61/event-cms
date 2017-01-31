const express = require('express');
const events = require('../controllers/eventsController');

const router = express.Router();

router.route('/').get(events.getAllEvents);

router.route('/:id').get(events.getEvent);

router.route('/:id').put(events.editEvent);

router.route('/:id').delete(events.deleteEvent);

router.route('/').post(events.createEvent);


module.exports = router;
