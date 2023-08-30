/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('taskgroups', (table) => {
        table.increments('id').primary();
        table.integer('user_id')
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.string('taskgroup_name').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('taskgroups');
};