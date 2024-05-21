import { Request, Response } from "express";
import CreateOrderService from "../../services/Order/CreateOrderService";


class CreateOrderController {
 async  handle(req: Request, res: Response) {
    const {table, name} = req.body

    const createOrderService = new CreateOrderService();
    try {
        const order = await createOrderService.execute({table, name})
        return res.status(201).send(order)
    } catch (error) {
        return res.status(422).send({"Algo deu errado": error})
    }
 }
}

export default CreateOrderController;