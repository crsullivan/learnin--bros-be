const router = require('express').Router();
const restricted = require('../auth/restricted-middleware.js')
const Contributions = require('./contributions-model')

router.get('/', restricted, (req, res) => {
    const userId = req.decodedJwt.userId;
    Contributions
    .findAllContributions()
    .then(contributions => {
        console.log('All Contributions', contributions)
        res.json(contributions)
    })
    .catch(err => res.send(err))
})

router.post('/:userID', restricted, (req, res) => {
    const { userID } = req.params;
    const email = req.decodedJwt.email;
    const userId = req.decodedJwt.userId;
    const contribution = req.body;
    Contributions
    .addContribution(contribution, { userId })
    .then(contribution => {
        res.json(contribution)
    })
    .catch(err => res.send(err))
})

module.exports = router;
