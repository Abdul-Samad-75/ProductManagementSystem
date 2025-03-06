import { Schema,model } from "mongoose";

//Product Schema
const productSchema = new Schema({

    name: { type: String, required: true },
    price: { type: Number, requied: true },
    description: { type: String }
    
})

//Product Model
const Product = model('product', productSchema)

export {Product}