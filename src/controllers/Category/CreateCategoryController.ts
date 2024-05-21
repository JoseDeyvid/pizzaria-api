import { Request, Response } from "express";
import CreateCategoryService from "../../services/Category/CreateCategoryService";


class CreateCategoryController {

    async handle(req: Request, res: Response) {
        const { name } = req.body;

        if (!name) {
            return res.status(422).send(`Necessário preencher o campo "name"`)
        }

        const createCategoryService = new CreateCategoryService();
        try {
            const category = await createCategoryService.execute(name);
            res.status(201).send({ "Categoria criada com sucesso": category })
        } catch (error) {
            res.status(422).send({ "Algo deu errado": error })
        }

    }
}

export default CreateCategoryController;