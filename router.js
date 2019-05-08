import express from 'express'
import { login, landing, authNeeded } from './controllers/index'
import auth from './services/auth'

const router = express.Router()

router.get('/', landing)

router.get('/login', login.get)
router.post('/login', auth)
router.get('/auth_needed', authNeeded)

export default router
