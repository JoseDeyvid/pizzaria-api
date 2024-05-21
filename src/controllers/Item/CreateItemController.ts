import { Request, Response } from "express";
import CreateItemService from "../../services/Item/CreateItemService";

class CreateItemController {
    async handle (req: Request, res: Response) {

        const {order_id, product_id, amount} = req.body;

        const createItemService = new CreateItemService();

        try {
            const item = await createItemService.execute({order_id, product_id, amount})
            res.status(201).send(item)
        } catch (error) {
            res.status(400).send("Ocorreu algum erro na criação do item!")
        }
    }
}

export default CreateItemController;