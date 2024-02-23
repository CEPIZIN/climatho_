import express from 'express'
import { config } from 'dotenv'
import connection from './Database/connection.js'
import router from "./src/routes/router.js"

const app = express()

config()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', router)

app.on("database", () => {
    app.listen(process.env.PORT, () => console.log("Server started..."))
})

export default app