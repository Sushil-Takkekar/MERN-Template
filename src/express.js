/* eslint-disable no-unused-vars */
const express = require('express')
const body_parser = require('body-parser')
const checkSiteMaintenance = require('./middlewares/siteMaintenance')
const { logReq, logReqError } = require('./middlewares/logger')

const app = express()

app.use(express.json())  // accept the req data in json format.
app.use(body_parser.urlencoded({ extended: false }))  // parse application/x-www-form-urlencoded
app.use(body_parser.json())  // parse application/json

// add site maintenance facility
app.use(checkSiteMaintenance)

// log every request
app.use(logReq)

/*** SAMPLE REQ, DELETE IT AFTER SETUP ***/
app.get('/', (req, res) => {
	res.send({ data: 'Welcome to MERN template...' })
})
app.get('/error', (req, res) => {
	throw new Error('Invalid input data')
})
/*** END OF BLOCK ***/

// log error occurred while processing request
app.use(logReqError)

module.exports = app