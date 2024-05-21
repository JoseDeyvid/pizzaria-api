import prisma from "../../prisma";



class DetailsUserService {
    async execute(id: number) {

        const user = await prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                email: true,
                name: true
            }
        })
        return user

    }
}

export default DetailsUserService;