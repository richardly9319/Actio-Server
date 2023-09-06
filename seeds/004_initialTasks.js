/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {id: 1, user_id: 2, taskgroup_id: 1, task_name: 'Spend time in Sunlight outdoors', priority_level: 2, active_state: true, reoccurance: 1, start_date: '2023-08-29', due_date: '2023-09-09'},
    {id: 2, user_id: 2, taskgroup_id: 1, task_name: 'Cold Shower', priority_level: 2, active_state: true, reoccurance: 1, start_date: '2023-08-29', due_date: '2023-09-09'},
    {id: 3, user_id: 2, taskgroup_id: 1, task_name: 'Cook and eat nutritious breakfast', priority_level: 2, active_state: true, reoccurance: 1, start_date: '2023-08-29', due_date: '2023-09-09'},
    {id: 4, user_id: 2, taskgroup_id: 2, task_name: 'Implement backend database and api endpoints', priority_level: 2, active_state: true, reoccurance: 0, start_date: '2023-08-29', due_date: '2023-09-09'},
    {id: 5, user_id: 2, taskgroup_id: 2, task_name: 'Route data to frontend and implement components to display all the dynamic data', priority_level: 2, active_state: true, reoccurance: 0, start_date: '2023-08-29', due_date: '2023-09-09'},
    {id: 6, user_id: 2, taskgroup_id: 2, task_name: 'Style frontend UI', priority_level: 2, active_state: true, reoccurance: 0, start_date: '2023-08-29', due_date: '2023-09-09'},
    {id: 7, user_id: 2, task_name: 'Grocery Shop', priority_level: 2, active_state: true, reoccurance: 7, start_date: '2023-08-29', due_date: '2023-09-09'},
    {id: 8, user_id: 2, task_name: 'Fix door knob', priority_level: 2, active_state: true, reoccurance: 0, start_date: '2023-08-29', due_date: '2023-09-09'},
    {id: 9, user_id: 2, task_name: 'Cook/Meal prep', priority_level: 2, active_state: true, reoccurance: 1, start_date: '2023-08-29', due_date: '2023-09-09'},
  ]);
};
