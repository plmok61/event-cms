const knex = require('knex')({ client: 'pg' });

exports.createEvent = (req, res) => {
  console.log(req.body);
};
