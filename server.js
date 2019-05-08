import express from 'express'
import logger from 'morgan'
import createError from 'http-errors'
import cors from 'cors'
import { timeLog, handleError, session } from './middleware/index'
import router from './router'
import auth from './services/auth'
import passport from 'passport'

import customEnv from 'custom-env'

const app = express()
const env = app.get('env')
console.log('the environment is: ', env)

// get the env variables
customEnv.env(env)
const port = process.env.PORT || '3000'

app.use(timeLog)

app.use(express.json())

app.use(logger('dev'))

app.use(cors())

app.use(session)

app.use(passport.initialize())
app.use(passport.session())

app.use('/', router)

app.use(function(req, res, next) {
  next(createError(404))
})

app.use(handleError)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
