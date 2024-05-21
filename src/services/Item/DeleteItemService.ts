import prisma from "../../prisma";


class DeleteItemService {
    async execute (id: number) {
        const item = await prisma.item.delete({
            where: {
                id
            }
        })

        return item;
    }
}

export default DeleteItemService;