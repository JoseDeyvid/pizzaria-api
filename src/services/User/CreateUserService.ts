import prisma from "../../prisma";
import bcrypt from "bcryptjs"

type UserType = {
    name: string,
    email: string,
    password: string
}

class CreateUserService {
    async execute({name, email, password}: UserType) {

        password = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })
        return user

    }
}

export default CreateUserService;