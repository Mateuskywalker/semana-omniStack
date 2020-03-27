/* o método 'up' é executado toda vez que a migrate é executada */

exports.up = function(knex) {
    return knex.schema.createTable('incidents', table => {
      table.increments(); // chave primária auto incrementada
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
     
      // relacionamento com a ong
      table.string('ong_id').notNullable(); //relacao com a tabela da ong correspondente
      table.foreign('ong_id').references('id').inTable('ongs');
    });
 };
 
 /* o método 'down' é chamada quando existe algum problema e é preciso voltar atras*/
 exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
 };
 