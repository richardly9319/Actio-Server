/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('inspiration').del()
  await knex('inspiration').insert([
    {id: 1, user_id: 2, item_name: `"The greatest people on the planet have suffered the Most"`},
    {id: 2, user_id: 2, item_name: `"moulding and shaping and developing your craft so that when it is time for you to make your rounds, you gonna fly"`},
  ]);
};
