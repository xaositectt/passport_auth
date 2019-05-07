const express = require('express')
const port = process.env.PORT || '3000'
const logger = require('morgan')
const createError = require('http-errors')
const cors = require('cors')
const timeLog = require('./middleware/time_log')
const handleError = require('./middleware/error')

const app = express()

app.use(timeLog)

app.use(express.json())

app.use(logger('dev'))

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).json({msg: 'welcome'})
})

app.use(function(req, res, next) {
  next(createError(404))
})

app.use(handleError)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
