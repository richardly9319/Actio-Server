/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('taskdetails', (table) => {
        table.increments('id').primary();
        table.integer('task_id')
        .unsigned()
        .references('tasks.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.integer('user_id')
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.string('detail_text').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('taskdetails');
};
