import { Router } from "express";
import { readPizzas, readPizza } from "../controllers/pizza.controller.js";

const router = Router();

router.get("/", readPizzas);
router.get("/:id", readPizza);

export default router;