/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {id: 1, user_id: 2, taskgroup_id: 1, task_name: 'Cold Shower', priority_level: 2, active_state: true, reoccurance: 1, start_date: '2023-08-29', due_date: '2023-09-09'},
    {id: 2, user_id: 2, taskgroup_id: 1, task_name: 'Spend time outdoors', priority_level: 2, active_state: true, reoccurance: 1, start_date: '2023-08-29', due_date: '2023-09-09'},
    {id: 3, user_id: 3, taskgroup_id: 1, task_name: 'Cook and Eat Breakfast', priority_level: 2, active_state: true, reoccurance: 1, start_date: '2023-08-29', due_date: '2023-09-09'}
  ]);
};
