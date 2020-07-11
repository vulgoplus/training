import express from 'express'
import { Request, Response } from 'express'
import * as path from 'path'

const router = express.Router()

router.route('/:url(api|auth|components|app|vendor|assets)/*').get((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'))
})

router.get('/*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

export default router
