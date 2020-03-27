/* o método 'up' é executado toda vez que a migrate é executada */

exports.up = function(knex) {
   return knex.schema.createTable('ongs', table => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('UF', 2).notNullable();   
   });
};

/* o método 'down' é chamada quando existe algum problema e é preciso voltar atras*/
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
