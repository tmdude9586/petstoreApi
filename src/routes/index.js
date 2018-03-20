const router = require('express').Router()

// setup rest of routes here
router.get('/', (req, res) => res.json({healthy: true}))

module.exports = router