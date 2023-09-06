/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('taskdetails').del()
  await knex('taskdetails').insert([
    {id: 3, task_id: 7, user_id:2, detail_text: 'chicken breast'},
    {id: 5, task_id: 7, user_id:2, detail_text: 'kale'},
    {id: 10, task_id: 7, user_id:2, detail_text: 'almond milk'},
    {id: 6, task_id: 8, user_id:2, detail_text: 'buy PL adhesive product from Home Depot'},
    {id: 7, task_id: 10, user_id:2, detail_text: 'Full body training followed by 15min LISS'},
    {id: 8, task_id: 6, user_id:2, detail_text: 'Play around with colors and fonts on Figma'},
    {id: 9, task_id: 6, user_id:2, detail_text: 'Implement animations'},
  ]);
};   
