import { Request, Response } from "express";
import CreateProductService from "../../services/Product/CreateProductService";


class CreateProductController {
    async handle (req: Request, res: Response) {
        const {name, price, description, category_id} = req.body;
        const createProductService = new CreateProductService();
        // if(!req.file) {
        //     return res.status(422).send("Produto sem imagem!")
        // }
        // console.log(req.file)
        // const {filename: banner} = req.file
        try {
            const product = await createProductService.execute({name, price, description, category_id: parseInt(category_id)})
            // const product = await createProductService.execute({name, price, description, banner,  category_id: parseInt(category_id)})
            return res.status(201).send(product)
        } catch (error) {
            return res.status(422).send({"Algo deu errado": error})
        }
        
    }
}

export default CreateProductController;