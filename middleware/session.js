const expressSession = require('express-session')
import uuid from 'uuid/v4'
import fileStore from 'session-file-store'

const FileStore = fileStore(expressSession)

export default expressSession({
  genid: (req) => {
    console.log('Inside the session middleware', req.sessionID)
    return uuid()
  },
  store: new FileStore(),
  secret: 'covfefe with hamberders',
  resave: false,
  saveUninitialized: true
})