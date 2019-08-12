/**
 * This file is used to configure Winston logger for our express app.
 */
const winston = require('winston')
const path = require('path')

const { combine, timestamp, json } = winston.format;
const LOG_LEVEL = process.env.LOG_LEVEL | 'info'
const logfile_dir = path.join(__dirname, '..', '..','logs')

// logger to log every request
const req_logger = winston.createLogger({
    level: LOG_LEVEL,
    format: combine(
        timestamp(),
        json(),
      ),
    transports : [
        new winston.transports.Console(),
        new winston.transports.File({filename: path.join(logfile_dir, 'error.log'), level: 'error'}),
        new winston.transports.File({filename: path.join(logfile_dir, 'combined.log'), level: 'info'}),
        new winston.transports.File({filename: path.join(logfile_dir, 'debug.log'), level: 'debug'})
    ]
})

// log incoming req
const logReq = (req, res, next) => {
    req_logger.info({
        req_url: req.url,
        method: req.method
    })
    next()
}

// log an error occurred while processing request
const logReqError = (err, req, res, next) => {
    req_logger.error({
        error : 'Error in processing req',
        error_msg : err.message,
        req_url: req.url,
        method: req.method
    })
    res.send({ error: 'something went wrong !'})
}

module.exports = {
    logReq,
    logReqError
}