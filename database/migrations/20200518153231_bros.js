exports.up = function(knex) {
    return knex.schema
    .createTable('users', t => {
        t.increments();
        t.text('password', 250).notNullable();
        t.text('name', 250).notNullable().unique();;
    })

    .createTable('contributions', t => {
        t.increments();
        t.date('date').notNullable();
        t.integer('contribution_count').notNullable();
        t
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        t
            .integer('user_name')
            .unsigned()
            .references('name')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })

    .createTable('posts', t => {
        t.text('post', 255).notNullable()
        t
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        t
        .integer('user_name')
        .unsigned()
        .references('name')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })

    

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('posts')
    .dropTableIfExists('contributions')
    .dropTableIfExists('users')        
    };