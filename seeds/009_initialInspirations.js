/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('inspiration').del()
  await knex('inspiration').insert([
    {id: 1, user_id: 2, item_name: `"I’ve failed over and over and over again in my life, and that is why I succeed"`},
    {id: 2, user_id: 2, item_name: `“The best time to plant a tree was 20 years ago. The second best time is now.”`},
  ]);
};
