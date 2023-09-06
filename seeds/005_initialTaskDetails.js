/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('taskdetails').del()
  await knex('taskdetails').insert([
    {id: 3, task_id: 7, user_id:2, detail_text: 'chicken breast'},
    {id: 4, task_id: 7, user_id:2, detail_text: 'eggs'},
    {id: 5, task_id: 7, user_id:2, detail_text: 'kale'},
    {id: 6, task_id: 8, user_id:2, detail_text: 'buy PL adhesive product from Home Depot'},
  ]);
};   
