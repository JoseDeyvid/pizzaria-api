import prisma from "../../prisma";



class DetailsOrderService {
    async execute(id: number) {

        const orders = await prisma.item.findMany({
            where: {
                order_id: id
            },
            include: {
                product: true,
                order: true,
            }
        })

        return orders;

    }
}

export default DetailsOrderService;