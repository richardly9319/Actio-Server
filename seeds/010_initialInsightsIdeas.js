/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // await knex('insightsIdeas').del()
  await knex('insightsIdeas').insert([
    {id: 1, user_id: 2, item_name: 'Smaller steps. Challenging enough but not too easy --> Flow State'},
    {id: 2, user_id: 2, item_name: 'Direction x Action = Progress'},
  ]);
};
