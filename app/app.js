require('dotenv').config('../.env')
const express = require('express')
const app = express()
const { notFound, handleErr } = require('./error')

app.use(require('./middleware'))
app.use(require('./router'))
app.use(notFound)
app.use(handleErr)

module.exports = app
