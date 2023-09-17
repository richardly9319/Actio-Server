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
    {id: 7, section_id: 2, user_id: 2, detail_text: 'increase green veggies'},
    {id: 8, section_id: 2, user_id: 2, detail_text: 'aerobic cardio after workouts'},
    {id: 9, section_id: 2, user_id: 2, detail_text: 'substitute whole grains to minimize blood sugar spikes'},
  ]);
};
