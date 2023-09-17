exports.up = function(knex) {
    return knex.schema.table('users', function(table) {
      table.string('googleUserId').unique().nullable();  // assuming the googleUserId is a string
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('users', function(table) {
      table.dropColumn('googleUserId');
    });
  };
  