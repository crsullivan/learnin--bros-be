const db = require('../database/dbconfig')

module.exports = {
    findAllContributions,
    findContributions,
    saveContribution
}

function findAllContributions() {
    return db('contributions');
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');

async function saveContribution(contribution, { userId, date, userName}) {
    console.log(contribution)
    console.log(userId)
    
    return await db('contributions')
        .insert({
            ...contribution,
            user_id: userId,
            date: date,
            user_name: userName
        }).catch(e => {
            console.log(e);
            throw e;
        })
}

