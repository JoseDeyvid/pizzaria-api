import { Request, Response } from "express";
import DeleterOrderService from "../../services/Order/DeleteOrderService";


class DeleterOrderController {

    async handle (req: Request, res: Response) {
        const order_id = req.query.order_id as string;

        const id = parseInt(order_id)

        if(!id) {
            return res.status(422).json("Id inválido!")
        }

        const deleteOrderService = new DeleterOrderService()

        try {
            const order = await deleteOrderService.execute(id)
            return res.status(200).send("Pedido deletado com sucesso!")
        } catch (error) {
            return res.status(422).json("Id não encontrado!")
        }
        
    }
}

export default DeleterOrderController;