const express = require('express')
const body_parser  = require('body-parser')

const SITE_MAINTENANCE_FLAG = (process.env.SITE_MAINTENANCE_FLAG === 'true')
const app = express()

app.use(express.json())  // accept the req data in json format.
app.use(body_parser.urlencoded({ extended: false }))  // parse application/x-www-form-urlencoded
app.use(body_parser.json())  // parse application/json

// add site maintenance facility
app.use((req, res, next) => {
    if(SITE_MAINTENANCE_FLAG) {
        res.status(500).send({ Error: 'Site under Maintenance :('})
    }else {
        next()
    }
})

app.get('/', (req, res) => {
    res.send({ data: 'Welcome to MERN template.' })
})

module.exports = app