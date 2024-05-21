import prisma from "../../prisma";

class ListProductsByCategoryService {
    async execute(category_id: number) {

        const products = await prisma.product.findMany({
            where: {
                category_id
            }
        })
        return products

    }
}

export default ListProductsByCategoryService;