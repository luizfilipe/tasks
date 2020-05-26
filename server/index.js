import express from 'express'
import env from 'dotenv'
import cors from 'cors'
import { resolve } from 'path'

const result = env.config({ path: resolve(__dirname, '.env') })
if (result.error) {
  throw result.error
}

const app = express()
app.disable('etag')
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(express.json())

app.use('/api', require('./routes').router)

const { PORT } = process.env
app.listen(PORT, err => {
  if (err) {
    console.error(err)
    throw err
  }
  console.warn(`> Ready on port ${PORT}...`)
})
