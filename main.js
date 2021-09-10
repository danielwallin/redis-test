import { Photo, Photos } from './src/index.js'
import express from 'express'
import fetch from 'node-fetch'

const app = express()

if (!globalThis.fetch) {
  globalThis.fetch = fetch
}

const main = () => {
  app.get('/', () => {
    console.log('hello2')
  })
  app.get('/photos/:albumId', Photo)
  app.get('/photos', Photos)
}

app.listen(process.env.APP_PORT, function () {
  console.log(
    `${process.env.APP_NAME} listening on port ${process.env.APP_PORT}`,
  )
  main()
})
