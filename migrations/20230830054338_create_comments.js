exports.up = function(knex) {
  return knex.schema.createTable('comments', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.text('comment').notNullable();
    table.integer('likes').defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('comments');
};
