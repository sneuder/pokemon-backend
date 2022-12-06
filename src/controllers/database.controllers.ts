import { Request, Response } from 'express'
import * as services from '../services/database.services'

export const postDatabase = (_req: Request, res: Response): void => {
  services.postDatabase()
  res.send('done')
}

export const deleteDatabase = (_req: Request, _res: Response): void => {

}
