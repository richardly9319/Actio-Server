/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  // Deletes ALL existing entries
  try {
  console.log('Starting seed...');
  const insertResult = await knex('goals').insert([
    {id: 1, user_id: 1, goal_name: 'goal1'},
    {id: 2, user_id: 1, goal_name: 'goal2'},
    {id: 3, user_id: 2, goal_name: 'goal3'},
    {id: 4, user_id: 2, goal_name: 'goal4'}
  ]);
  console.log('Insert result:', insertResult);
} catch(err) {
  console.error(err)
}
}