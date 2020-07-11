import express from 'express'
import * as path from 'path'
import { json, urlencoded } from 'body-parser'
import cookieParser from 'cookie-parser'
import methodOverride from 'method-override'
import router from './router'

const app = express()
const { PORT = 3000 } = process.env

app.use(cookieParser())
app.use(
  json({
    limit: '50mb'
  })
)
app.use(
  urlencoded({
    limit: '50mb',
    extended: true
  })
)
app.use(methodOverride())
app.use(express.static(path.join(__dirname, '../src')))

app.use(router)

app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT)
})
