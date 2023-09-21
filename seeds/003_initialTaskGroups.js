/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // await knex('taskgroups').del()
  await knex('taskgroups').insert([
    {id: 1, user_id: 2, taskgroup_name: 'Morning Routine'},
    {id: 2, user_id: 2, taskgroup_name: 'Productivity Management App'},
    {id: 3, user_id: 1, taskgroup_name: 'Testing Group'}
  ]);
};14
