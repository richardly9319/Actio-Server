/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('challenges').del()
  await knex('challenges').insert([
    {id: 2, user_id: 2, item_name: 'Trouble falling asleep/insomnia'},
    {id: 3, user_id: 2, item_name: 'Been feeling more tired/fatigued lately'},
  ]);
};
