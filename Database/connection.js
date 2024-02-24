import mongoose from "mongoose";
import app from "../index.js"
import { config } from "dotenv";

config()

const connection = mongoose.connect("mongodb+srv://leonardo_schunck:KTNIrjq3SAqdDBRt@cluster0.oxuwg0p.mongodb.net/?").then(() => {
    app.emit("database")
}).catch(err => {
    console.error(err)
})

const dbConnection = mongoose.connection;

dbConnection.on("error", console.log.bind(console, "connection error"));
dbConnection.once("open", () => {
  console.log("database connection successful");
});

export default dbConnection