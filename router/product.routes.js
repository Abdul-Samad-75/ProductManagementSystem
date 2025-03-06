import express from "express";
import { create, deleteProduct, filter, read, search, sortByPrice, update } from "../controllers/product.controller.js";

const router=express.Router()

router.get('/products',read)
router.post('/products', create)
router.put('/product/:id', update)
router.delete('/product/:id', deleteProduct)


router.get('/products/search', search)
router.get('/products/sortBy',sortByPrice)
router.get('/products/filter',filter)
export default router