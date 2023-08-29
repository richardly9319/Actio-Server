/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, email: 'email1', password: '123'},
    {id: 2, email: 'email2', password: '1234'},
    {id: 3, email: 'email3', password: '12345'}
  ]);
};
