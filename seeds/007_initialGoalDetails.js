/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('goaldetails').del()
  await knex('goaldetails').insert([
    {id: 1, section_id: 3, user_id: 2, detail_text: 'goalDetail1'},
    {id: 2, section_id: 3, user_id: 2, detail_text: 'goalDetail2'},
    {id: 3, section_id: 3, user_id: 2, detail_text: 'goalDetail3'},
    {id: 4, section_id: 4, user_id: 2, detail_text: 'goalDetail4'},
    {id: 5, section_id: 4, user_id: 2, detail_text: 'goalDetail5'},
  ]);
};
