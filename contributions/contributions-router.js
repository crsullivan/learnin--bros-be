const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js')
const Contributions = require('./contributions-model')

router.get('/', (req, res) => {
    Contributions
    .findAllContributions()
    .then(contributions => {
        console.log('All Contributions', contributions)
        res.json(contributions)
    })
    .catch(err => res.send(err))
})

var today = new Date();

router.post('/new', restricted, (req, res) => {
    const userId = req.decodedJwt.userId;
    const userName = req.decodedJwt.name
    console.log("today:", today)
    console.log("today:", today)
    const date = today
    const contribution = req.body;
    Contributions
    .saveContribution(contribution, { userId, date, userName })
    .then(contribution => {
        res.json(contribution)
    })
    .catch(err => res.send(err))
})

module.exports = router;
