import prisma from "../../prisma";

type ItemType = {
    order_id: number,
    product_id: number,
    amount: number
}

class CreateItemService {

    async execute ({order_id, product_id, amount}: ItemType) {

        const item = await prisma.item.create({
            data: {
                order_id,
                product_id,
                amount
            }
        })

        return item
    }
}

export default CreateItemService;