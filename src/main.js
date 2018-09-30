import express from 'express'
import path from 'path'

require('dotenv').config()

const { PORT, REDIRECT_HOST } = process.env

const app = express()

app.use('/assets', express.static(path.join(__dirname, '../public/assets')))

app.get('/', (req, res, next) => {
   res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.get('*', async (req, res, next) => {
  const redirectUrl = `${REDIRECT_HOST}${req.url}`
  console.log(`redirecting to ${redirectUrl}`)

  res.redirect(301, redirectUrl)
})


app.listen(PORT)
