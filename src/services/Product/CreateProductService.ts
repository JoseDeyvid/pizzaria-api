import prisma from "../../prisma";

type ProductType = {
    name: string,
    price: string,
    description: string,
    //   banner: string,
    category_id: number
}

class CreateProductService {
    async execute({ name, price, description, category_id }: ProductType) {
        // async execute({name, price, description, banner, category_id}: ProductType) {

        try {
            const product = await prisma.product.create({
                data: {
                    name,
                    price,
                    description,
                    // banner,
                    category_id,

                }
            })
            return product
        } catch (error) {
            console.log(error)
        }

        
        

    }
}

export default CreateProductService;