import express from "express";
import productRouter from "../routes/product";

const router = express.Router();

//api

router.use("/products", productRouter);

export default router;
