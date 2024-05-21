import { Request, Response } from "express";
import ListProductsByCategoryService from "../../services/Product/ListProductByCategoryService";


class ListProductsByCategoryController {
    async handle (req: Request, res: Response) {
        const category_id = req.query.category_id as string;
        
        const listProductsByCategoryService = new ListProductsByCategoryService();
        try {
            const products = await listProductsByCategoryService.execute(Number(category_id))
            return res.status(201).send(products)
        } catch (error) {
            return res.status(422).send({"Algo deu errado": error})
        }
        
    }
}

export default ListProductsByCategoryController;