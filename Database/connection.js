import mongoose from "mongoose";
import app from "../index.js"
import { config } from "dotenv";
config()

const connection = mongoose.connect(process.env.URLDATABASE).then(() => {
    app.emit("database")
}).catch(err => {
    console.error(err)
})

export default connection