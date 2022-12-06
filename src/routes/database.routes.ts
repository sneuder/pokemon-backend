import { Router } from 'express'
import * as controllers from '../controllers/database.controllers'

export const router = Router()

router.post('/database/populate', controllers.postDatabase)
router.delete('/database/destroy', controllers.deleteDatabase)
