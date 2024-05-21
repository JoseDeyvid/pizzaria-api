import { Request, Response } from "express";
import DetailsOrderService from "../../services/Order/DetailsOrderService";


class DetailsOrderController {
    async handle(req: Request, res: Response) {
        const order_id = req.query.order_id as string;

        const detailsOrderService = new DetailsOrderService();

        try {
            const orders = await detailsOrderService.execute(parseInt(order_id));
            return res.json(orders);
        } catch (error) {
            return res.status(400).send("Algo deu errado!")
        }
        

    }
}

export default DetailsOrderController;