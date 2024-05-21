import prisma from "../../prisma";


class FinishOrderService {
    async execute (id: number) {
        const order = await prisma.order.update({
            where: {
                id
            },
            data: {
                status: true
            }
        })

        return order;
    }
}

export default FinishOrderService;