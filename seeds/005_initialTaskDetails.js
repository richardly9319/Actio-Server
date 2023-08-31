/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('taskdetails').del()
  await knex('taskdetails').insert([
    {id: 1, task_id: 1, user_id:2, detail_text: 'get atleast 10 mins of sunlight in eyes'},
    {id: 2, task_id: 2, user_id:2, detail_text: 'at least 45secs at coldest setting'},
    {id: 3, task_id: 7, user_id:2, detail_text: 'chicken breast'},
    {id: 4, task_id: 7, user_id:2, detail_text: 'eggs'},
    {id: 5, task_id: 7, user_id:2, detail_text: 'kale'},
    {id: 6, task_id: 8, user_id:2, detail_text: 'buy PL adhesive product from Home Depot'},
  ]);
};   
