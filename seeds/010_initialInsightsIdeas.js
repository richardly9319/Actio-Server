/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('insightsIdeas').del()
  await knex('insightsIdeas').insert([
    {id: 1, user_id: 2, item_name: 'Smaller steps. Challenging enough but not too easy => flow state'},
    {id: 2, user_id: 2, item_name: 'Infrared/NIR light from Sun during mornings and evenings'},
    {id: 3, user_id: 2, item_name: 'Full body warm up pre-workout to increase core body temp => increased performance'},
  ]);
};
