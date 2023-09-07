/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('tasks').del()
  await knex('tasks').insert([
    {id: 7, user_id: 3, task_name: 'Grocery shop', priority_level: 2, active_state: true, reoccurance: 7, start_date: '2023-08-29', due_date: '2023-09-09'},
  ]);
};
