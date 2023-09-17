/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  try {
  const insertResult = await knex('goals').insert([
    {id: 1, user_id: 1, item_name: 'goal1'},
    {id: 2, user_id: 1, item_name: 'goal2'},
    {id: 3, user_id: 2, item_name: 'Land first Software Developer Job'},
    {id: 4, user_id: 2, item_name: 'Get under 15% bodyfat while building muscle'},
    {id: 5, user_id: 2, item_name: 'Learn Piano'},
    {id: 6, user_id: 6, item_name: 'Get first Tech job after BrainStation bootcamp'},
    {id: 7, user_id: 7, item_name: 'Get first Tech job after BrainStation bootcamp'},
    {id: 9, user_id: 9, item_name: 'Get first Tech job after BrainStation bootcamp'},
    {id: 10, user_id: 10, item_name: 'Get first Tech job after BrainStation bootcamp'},
  ]);
} catch(err) {
  console.error(err)
}
}