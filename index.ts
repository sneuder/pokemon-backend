import express from 'express'
import startApp from './src/app'

const app = express()

startApp(app)

app.listen(3000, () => console.log('Listening...'))
