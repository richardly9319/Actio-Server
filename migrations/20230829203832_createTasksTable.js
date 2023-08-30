/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tasks', (table) => {
        table.increments('id').primary();
        table.integer('user_id')
        .unsigned()
        .references('users.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.integer('taskgroup_id')
        .nullable()
        .unsigned()
        .references('taskgroups.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
        table.string('task_name').notNullable();
        table.integer('priority_level');
        table.boolean('active_state');
        table.integer('reoccurance');
        table.date('start_date');
        table.date('due_date');

        
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('tasks');
};
