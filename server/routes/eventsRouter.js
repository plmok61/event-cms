const express = require('express');
const events = require('../controllers/eventsController');

const router = express.Router();

router.route('/create').post(events.createEvent);

module.exports = router;
