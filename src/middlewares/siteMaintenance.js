/**
 * This function checks whether site is under maintenance or not by using SITE_MAINTENANCE_FLAG flag.
 */
const SITE_MAINTENANCE_FLAG = (process.env.SITE_MAINTENANCE_FLAG === 'true')

module.exports = (req, res, next) => {
    if(SITE_MAINTENANCE_FLAG) {
        res.status(500).send({ Error: 'Site under Maintenance :('})
    }else {
        next()
    }
}