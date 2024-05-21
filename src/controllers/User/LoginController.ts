import { Request, Response, NextFunction } from "express";
import LoginService from "../../services/User/LoginService";
import bcrypt from "bcryptjs"
import { sign, verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

class LoginController {

    async handle(req: Request, res: Response, next: NextFunction) {
        const { email, password } = req.body

        const loginService = new LoginService();
        const user = await loginService.execute({ email, password })

        if (!email) {
            return res.status(422).send(`Necessário preencher o campo "email"`)
        }
        if (!password) {
            return res.status(422).send(`Necessário preencher o campo "password"`)
        }
        if (!user) {
            return res.status(422).send(`Usuário não encontrado na base de dados!"`)
        }

        const checksPassword = await bcrypt.compare(password, user.password)

        if (!checksPassword) {
            return res.status(422).send(`Senha incorreta!"`)
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET as string,
            {
                subject: String(user.id), 
                expiresIn: "30d"
            })

        return res.status(200).send({id: user.id, name: user.name, email: user.email, token})


    }
}

export default LoginController;