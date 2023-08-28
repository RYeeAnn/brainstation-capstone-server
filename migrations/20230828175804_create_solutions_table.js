
exports.up = function(knex) {
    return knex.schema.createTable('solutions', table => {
      table.increments('id').primary();
      table.integer('issue_id').unsigned().notNullable().references('id').inTable('issues');
      table.string('solution').notNullable();
      table.text('instructions');
      table.string('tools_required');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('solutions');
  };
