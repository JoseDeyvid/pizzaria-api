import { Request, Response } from "express";
import DeleteItemService from "../../services/Item/DeleteItemService";


class DeleteItemController {

    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;

        const id = parseInt(order_id)

        if (!id) {
            return res.status(422).json("Id inválido!")
        }

        const deleteItemService = new DeleteItemService()

        try {
            const item = await deleteItemService.execute(id)
            return res.status(200).send("Item deletado com sucesso!")
        } catch (error) {
            return res.status(422).json("Id não encontrado!")
        }

    }
}

export default DeleteItemController;