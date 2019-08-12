const express = require('express')
const router = express.Router()

/*** SAMPLE REQ, DELETE IT AFTER SETUP ***/
router.get('/', (req, res) => {
    res.send({ data: 'Welcome to MERN template...' })
})

router.get('/error', (req, res) => {
    throw new Error('Invalid input data')
})
/*** END OF BLOCK ***/

module.exports = router