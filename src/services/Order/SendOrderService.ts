import prisma from "../../prisma";


class SendOrderService {
    async execute (id: number) {
        const order = await prisma.order.update({
            where: {
                id
            },
            data: {
                draft: false
            }
        })

        return order;
    }
}

export default SendOrderService;