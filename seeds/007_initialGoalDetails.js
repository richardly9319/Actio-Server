/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('goaldetails').del()
  await knex('goaldetails').insert([
    {id: 1, section_id: 3, user_id: 2, detail_text: 'finish and deploy Capstone Project'},
    {id: 2, section_id: 3, user_id: 2, detail_text: 'polish up Github Portfolio'},
    {id: 3, section_id: 3, user_id: 2, detail_text: 'apply to 10 jobs a day'},
    {id: 4, section_id: 4, user_id: 2, detail_text: 'full body weight training routine'},
    {id: 5, section_id: 4, user_id: 2, detail_text: 'HIIT cardio 2x a week'},
    {id: 7, section_id: 5, user_id: 2, detail_text: 'Practice 45mins 2x per week'},
  ]);
};
