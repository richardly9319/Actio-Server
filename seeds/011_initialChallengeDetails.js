/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('challengedetails').del()
  await knex('challengedetails').insert([
    {id: 1, section_id: 1, user_id: 2, detail_text: 'increase green veggies'},
    {id: 2, section_id: 1, user_id: 2, detail_text: 'eat more organic/whole foods'},
    {id: 3, section_id: 1, user_id: 2, detail_text: 'aerobic cardio after weightlifting'},
    {id: 4, section_id: 2, user_id: 2, detail_text: 'increase magnesium intake/supplement'},
    {id: 5, section_id: 2, user_id: 2, detail_text: 'increase calcium intake - almond milk & kefir'},
  ]);
};
