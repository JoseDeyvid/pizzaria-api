import prisma from "../../prisma";

type OrderType = {
  table: number,
  name: string
}

class CreateOrderService {
    async execute({table, name}: OrderType) {

        const order = await prisma.order.create({
            data: {
                table,
                name

            }
        })

        return order

    }
}

export default CreateOrderService;