import prisma from "../../prisma";

type ProductType = {
  name:string,
  price: string,
  description: string,
  banner: string,
  category_id: number
}

class CreateProductService {
    async execute({name, price, description, banner, category_id}: ProductType) {

        const product = await prisma.product.create({
            data: {
                name,
                price,
                description,
                banner,
                category_id,

            }
        })
        return product

    }
}

export default CreateProductService;