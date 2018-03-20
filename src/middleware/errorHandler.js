const config = require('../config')
module.exports = (err, req, res, next) => {
  const payload = {
    message: err.message
  }
  if(config.app.environment === 'development'){
    payload.stack = err.stack
  }
  res.status(500).json(payload)
  next()
}