import { Request, Response } from "express";
import SendOrderService from "../../services/Order/SendOrderService";


class SendOrderController {
    async handle (req: Request, res: Response) {
        const {id} = req.body

        const sendOrderService = new SendOrderService();
        try {
            const order = await sendOrderService.execute(id)
            return res.status(200).send(order)
        } catch (error) {
            return res.status(400).send("Deu errado no envio do pedido!")
        }
    }
}

export default SendOrderController;