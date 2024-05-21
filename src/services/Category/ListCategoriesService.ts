import prisma from "../../prisma";

class ListCategoriesService {

    async execute () {
        const categories = prisma.category.findMany();

        return categories;
    }
}

export default ListCategoriesService;