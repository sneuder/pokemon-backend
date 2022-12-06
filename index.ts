import express from 'express'
import startApp from './src/app'
import runDataBase from './src/db'
const app = express()

startApp(app)
runDataBase()
app.listen(3000, () => console.log('Listening...'))
