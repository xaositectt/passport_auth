import express from 'express'
import { login, landing } from './controllers/index'
const router = express.Router()

router.get('/', landing)

router.get('/login', login.get)
router.post('/login', login.post)

export default router
