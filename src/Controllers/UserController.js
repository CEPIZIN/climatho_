import User from "../Models/User.js";

class UserController {

    async Create(req, res) {
        let { cpf, birth_date, password } = req.body

        try {
            let userCreated = await User.Create(cpf, password, birth_date)
            if(userCreated) {
                res.json({msg: "User Created"})
            } else {
                res.json({msg: "ERROR"})
            }
        } catch (err) {
            console.error(err)
        }
    }

}

export default new UserController()