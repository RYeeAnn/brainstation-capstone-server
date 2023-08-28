
exports.up = function(knex) {
    return knex.schema.createTable('issues', table => {
      table.increments('id').primary();
      table.string('category').notNullable().defaultTo('default_category');
      table.string('problem').notNullable();
      table.string('symptoms');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('issues');
  };