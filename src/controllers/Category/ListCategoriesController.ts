import { Request, Response } from "express";
import ListCategoriesService from "../../services/Category/ListCategoriesService";

class ListCategoriesController {

    async handle(req: Request, res: Response) {
        const listCategoriesService = new ListCategoriesService();

        try {
            const categories = await listCategoriesService.execute()
            return res.status(200).send(categories)
        } catch (error) {
            return res.status(422).send({"Algo deu errado": error})
        }
        

    }
}

export default ListCategoriesController;