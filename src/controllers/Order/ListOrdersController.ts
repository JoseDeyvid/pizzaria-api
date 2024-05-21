import { Request, Response } from "express";
import ListOrdersService from "../../services/Order/ListOrdersService";

class ListOrdersController {

    async handle(req: Request, res: Response) {
        const listOrdersService = new ListOrdersService();

        try {
            const orders = await listOrdersService.execute()
            return res.status(200).send(orders)
        } catch (error) {
            return res.status(422).send({"Algo deu errado": error})
        }
        

    }
}

export default ListOrdersController;