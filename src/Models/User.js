import mongoose from "mongoose";
import axios from "axios";
import bcrypt from "bcrypt"
import { config } from "dotenv";
config()

let UserSchema = new mongoose.Schema({
    cpf: String,
    password: String,
    birth_date: String,
    name: String,
    economy: Number
})

let UserModel = mongoose.model("users", UserSchema)

//Service 

class User {

    constructor() {
        this.currentUser = null
    }

    async Create(cpf, password, birth_date) {
        try {

            let userInfo = await this.GetByCpf(cpf, birth_date)

            if(!userInfo) return false

            let existingUser = await UserModel.findOne({cpf})

            if(existingUser != null) return false

            let hash = await bcrypt.hash(password, 10)

            await UserModel.create({
                cpf,
                password: hash,
                birth_date,
                name: userInfo.nome_da_pf,
                economy: 0
            })

            return true

        } catch(err) {
            console.error(err)
        }
    }

    async Login(cpf, password) {
        try {

            let existingUser = await UserModel.findOne({cpf})

            if(!existingUser) return false

            let passIsCorrect = await bcrypt.compare(password, existingUser.password)

            if(!passIsCorrect) return false

            this.currentUser = existingUser
            return true

        } catch(err) {

        }
    }

    async GetByCpf(cpf, birth_date) {
        try {
            
            const userCpf = await axios.get(`https://ws.hubdodesenvolvedor.com.br/v2/cpf/?cpf=${cpf}&data=${birth_date}&token=${process.env.TOKENCPF}`)
            
            if(userCpf.data.return == "NOK") {
                return false
            } else if(userCpf.data.return == "OK") {
                return userCpf.data.result
            }

        } catch(err) {
            console.error(err)
        }
    }
}

export default new User()