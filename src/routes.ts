import { Router } from "express";
import { authenticateToken } from "./middlewares";
import CreateUserController from "./controllers/User/CreateUserController";
import LoginController from "./controllers/User/LoginController";
import DetailsUserController from "./controllers/User/DetailsUserController";
import CreateCategoryController from "./controllers/Category/CreateCategoryController";
import ListCategoriesController from "./controllers/Category/ListCategoriesController";
import CreateProductController from "./controllers/Product/CreateProductController";

import uploadConfig from "./config/multer"
import multer from "multer";
import CreateOrderController from "./controllers/Order/CreateOrderController";
import DeleterOrderController from "./controllers/Order/DeleteOrderController";
import CreateItemController from "./controllers/Item/CreateItemController";
import DeleteItemController from "./controllers/Item/DeleteItemController";
import SendOrderController from "./controllers/Order/SendOrderController";
import ListOrdersController from "./controllers/Order/ListOrdersController";
import DetailsOrderController from "./controllers/Order/DetailsOrderController";
import FinishOrderController from "./controllers/Order/FinishOrderController";
import ListProductsByCategoryController from "./controllers/Product/ListProductsByCategoryController";

export const router = Router();

const upload = multer(uploadConfig.upload("tmp"))

// Users
router.post("/new-user", new CreateUserController().handle)
router.post("/login", new LoginController().handle)
router.get("/", authenticateToken, new DetailsUserController().handle)

// Categories
router.post("/new-category", authenticateToken, new CreateCategoryController().handle)
router.get("/categories", authenticateToken, new ListCategoriesController().handle)

// Products
router.post("/new-product", authenticateToken, upload.single('file'), new CreateProductController().handle)
router.get('/category/products', authenticateToken, new ListProductsByCategoryController().handle)

// Orders
router.post("/new-order", authenticateToken, new CreateOrderController().handle)
router.delete('/order', authenticateToken, new DeleterOrderController().handle )
router.post('/order/add', authenticateToken, new CreateItemController().handle )
router.delete('/order/delete', authenticateToken, new DeleteItemController().handle )
router.put('/order', authenticateToken, new SendOrderController().handle)
router.get('/orders', authenticateToken, new ListOrdersController().handle )
router.get('/order/detail', authenticateToken, new DetailsOrderController().handle )
router.put('/order/finish', authenticateToken, new FinishOrderController().handle )