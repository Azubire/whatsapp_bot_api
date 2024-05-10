import express from "express";
import { products } from "../controlllers/productController";

const router = express.Router();

router.get("/", products);

export default router;
