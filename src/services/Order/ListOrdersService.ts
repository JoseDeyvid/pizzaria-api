import prisma from "../../prisma";

class ListOrdersService {

    async execute () {
        const orders = prisma.order.findMany({
            where: {
                draft: false,
                status: false
            }
        });

        return orders;
    }
}

export default ListOrdersService;