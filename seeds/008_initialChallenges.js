/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('challenges').del()
  await knex('challenges').insert([
    {id: 1, user_id: 2, item_name: 'been feeling more tired/mentally stressed lately'},
    {id: 2, user_id: 2, item_name: 'trouble sleeping/insomnia'},
  ]);
};
