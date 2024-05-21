import prisma from "../../prisma";

type LoginCredentials = {
    email: string,
    password: string
}

class LoginService {
    async execute({email, password}: LoginCredentials) {

        const user = await prisma.user.findFirst({
            where: {
                email
            }
        })
        return user

    }
}

export default LoginService;