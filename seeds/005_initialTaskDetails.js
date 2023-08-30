/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('taskdetails').del()
  await knex('taskdetails').insert([
    {id: 1, task_id: 1, user_id:2, detail_text: 'in morning before breakfast'},
    {id: 2, task_id: 2, user_id:2, detail_text: 'atleast 15 mins'},
    {id: 3, task_id: 2, user_id:2, detail_text: 'get sunlight in eyes and on skin'}
  ]);
};
