import { Router } from "express";

import * as HomeController from "../controllers/homeController";
import * as InforController from "../controllers/inforController"
import * as UserController from "../controllers/userController"

const router = Router();

router.get("/", HomeController.home);

router.get("/contato", InforController.contato);
router.get("/sobre", InforController.sobre);

router.get("/nome", UserController.nome);
router.get("/idade", UserController.idadeForm);
router.post("/idade-resultado", UserController.idadeAction)

export default router;
