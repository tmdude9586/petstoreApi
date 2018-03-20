const config = require('./config')
const run = async () => {
  try {
    await require('./initialize/mongoose')
    const app = require('./initialize/express')
    app.use(require('./routes'))
    app.use(require('./middleware/errorHandler'))
    app.listen(config.app.port, () => {
      console.log(`Express listening on port ${config.app.port}`)
    })
  }catch(error){
    console.log(error)
    process.exit(1)
  }
}

run()