import prisma from "../../prisma";

class CreateCategoryService {
    async execute(name: string) {


        const category = await prisma.category.create({
            data: {
                name,

            }
        })
        return category

    }
}

export default CreateCategoryService;