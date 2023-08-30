/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('goaldetails', (table) => {
        table.increments('id').primary();
        table.integer('goal_id')
        .unsigned()
        .references('goals.id')
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
    return knex.schema.dropTable('goaldetails');
};
