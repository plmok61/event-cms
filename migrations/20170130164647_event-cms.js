
exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('events', (table) => {
      table.increments('id').primary();
      table.string('title').notNull();
      table.dateTime('start_date');
      table.dateTime('end_date');
      table.string('category');
      table.string('description');
      table.boolean('feature_flag');
      table.timestamps();
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('events'),
  ]);
};
