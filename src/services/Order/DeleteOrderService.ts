import prisma from "../../prisma";


class DeleterOrderService {
    async execute (id: number) {
        const order = await prisma.order.delete({
            where: {
                id
            }
        })

        return order;
    }
}

export default DeleterOrderService;