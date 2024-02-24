import mongoose from "mongoose"

let MapPointerSchema = new mongoose.Schema({
    Adress: String
})

let pointRefil = mongoose.model('Points_SP', MapPointerSchema); 

export default pointRefil;