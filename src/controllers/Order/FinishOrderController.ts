import { Request, Response } from "express";
import FinishOrderService from "../../services/Order/FinishOrderService";

class FinishOrderController {
    async handle (req: Request, res: Response) {
        const {id} = req.body

        const finishOrderService = new FinishOrderService();
        try {
            const order = await finishOrderService.execute(id)
            return res.status(200).send(order)
        } catch (error) {
            return res.status(400).send("Deu errado na finalização do pedido!")
        }
    }
}

export default FinishOrderController;