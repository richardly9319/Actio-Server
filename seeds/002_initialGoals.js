/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  // Deletes ALL existing entries
  try {
  const insertResult = await knex('goals').insert([
    {id: 1, user_id: 1, item_name: 'goal1'},
    {id: 2, user_id: 1, item_name: 'goal2'},
    {id: 3, user_id: 2, item_name: 'Land first Software Developer Job'},
    {id: 4, user_id: 2, item_name: 'Get under 15% bodyfat while building muscle'},
    {id: 5, user_id: 2, item_name: 'Learn Piano'}
  ]);
} catch(err) {
  console.error(err)
}
}