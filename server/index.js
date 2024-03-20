import express from 'express'
import path from 'path'
import env from 'dotenv'
env.config()

const port = process.env.PORT || 3000
const publicPath = path.join(path.resolve(), 'public')
const distPath = path.join(path.resolve(), 'dist')

const app = express()

app.get('/api/v1/hello', (_req, res) => {
  res.json({ message: 'Hello, world!' })
})

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(distPath))
} else {
  app.use('/', express.static(publicPath))
}

app.listen(port, () => {
  console.log('Server listening on port', port)
})
