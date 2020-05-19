const db = require('../database/dbconfig.js');

module.exports = {
    add,
    findBy,
    findById,
    getAll
};

async function add(user) {
  if (process.env.DB_ENV === 'production') {
    console.log(db.insert(user).into('users').returning('id'), "add method")
    return db.insert(user).into('users').returning('id')
    .then(ids=> {
      console.log(ids[0]);
      return findById(ids[0]);
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
  } else {
    console.log(user)
    const [id] = await db('users').insert(user)
    return findById(id)
  }
}

function findBy(name) {
    return db('users').where(name);
  }

function findById(id) {
    return db('users')
    .where({id})
    .first()
    .catch(error=> {
      console.log("Error finding by id");
      throw error;
    });
  }

function getAll() {
    return db('users')
}
