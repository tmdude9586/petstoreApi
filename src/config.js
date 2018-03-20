const pkg = require ('../package')
module.exports = {
  app: {
    name: pkg.name,
    port: process.env.port || 8080,
    environment: process.env.environment || 'development'
  },
  mongoConnectionstring: process.env.mongoConnectionstring || 'mongodb://localhost:27017/petStore'
}