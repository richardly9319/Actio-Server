/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('inspiration').then(exists => {
        if (!exists) {
            return knex.schema.createTable('inspiration', (table) => {
                table.increments('id').primary();
                table.integer('user_id')
                .unsigned()
                .references('users.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
                table.string('item_name').notNullable();
            });
        }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable('inspiration').then(exists => {
        if (exists) {
            return knex.schema.dropTable('inspiration');
        }
    });
};
