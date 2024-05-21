import { Request, Response } from "express";
import CreateUserService from "../../services/User/CreateUserService";
import prisma from "../../prisma";

class CreateUserController {
  async handle(req: Request, res: Response) {

    const { name, email, password, confirmPassword } = req.body

    const userExists = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if(userExists) {
      return res.status(422).send(`Email já cadastrado`)
    }

    if(!name) {
      return res.status(422).send(`Necessário preencher o campo "name"`)
    }
    if(!email) {
      return res.status(422).send(`Necessário preencher o campo "email"`)
    }
    if(!password) {
      return res.status(422).send(`Necessário preencher o campo "password"`)
    }
    if(!confirmPassword) {
      return res.status(422).send(`Necessário preencher o campo "confirmPassword"`)
    }
    if(password !== confirmPassword) {
      return res.status(422).send(`Os campos "password" e "confirmPassword" não coincidem`)
    }

    const createUserService = new CreateUserService()
    const user = await createUserService.execute({ name, email, password })
    .then((result) => {
      return res.status(201).send("Usuário criado com sucesso!")
    }).catch((error) => {
      return res.send(`Ocorreu algum erro na criação do usuário! ${error}`, )
    })

    
  }
}

export default CreateUserController;