import express from 'express'
import { config } from 'dotenv'
import connection from './Database/connection.js'
import router from "./src/routes/router.js"

const app = express()

config()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', router)

const port = process.env.PORT ||  3000

app.listen(port,() => {
    console.log(` Server is listening at http://localhost:${port}`)
})

export default app;
