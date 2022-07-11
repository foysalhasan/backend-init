require('dotenv').config()
const http = require('http')
const app = require('./app/app')

const PORT = process.env.PORT || 8080
const server = http.createServer(app)
server.listen(PORT, () => console.log(`SERVER IS RUNNING ON ${PORT} PORT`))
