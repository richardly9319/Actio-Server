/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('users').del();

  const users = [];

  for (let i = 1; i <= 101; i++) {
    users.push({
      id: i,
      email: `email${i}@example.com`,  // This will generate unique emails like email1@example.com, email2@example.com, etc.
      password: `pass${i}`             // Similar approach for passwords.
    });
  }

  await knex('users').insert(users);
};
