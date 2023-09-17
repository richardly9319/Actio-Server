/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('challengedetails').del()
  await knex('challengedetails').insert([
    {id: 4, section_id: 2, user_id: 2, detail_text: 'increase magnesium intake/supplement'},
    {id: 5, section_id: 2, user_id: 2, detail_text: 'get sunlight in the mornings'},
    {id: 6, section_id: 2, user_id: 2, detail_text: 'limit artificial screen light in evenings'},
  ]);
};
