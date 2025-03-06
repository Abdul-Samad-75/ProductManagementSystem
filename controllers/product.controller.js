import { query } from "express";
import { Product } from "../models/Product.model.js";

//create product
export const create=async (req,res) => {
    try {

        const { name, price, description } = req.body
        
        if (!name || !price) return res.json({msg:'Please enter name or price'}) 

        // const product= await Product.create({name,price,description})
        const product= new Product({name,price,description})
        await product.save()

        res.status(201).json({msg:"Product created successfully",Product:product})
        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
    
}

//read product
export const read=async (req,res) => {
    try {
        const products = await Product.find()      
        if(!products) return res.status(200).json({msg:"No products found"})
        res.status(200).json({msg:"All Products",Products:products})      
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
    
}

//Search Products
export const search=async (req,res) => {
    try {
        const { name, description} = req.query
        const q = {}
        
        if (name) q.name = new RegExp(name, "i")
        if(description) q.description=new RegExp(description,'i')

        const products = await Product.find(q).select("name price -_id")

        if(!products) return res.status(404).json({msg:"Product not found"})
        
        res.status(200).json({ msg: "Found searched products", Products:products})
        
        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
    
}

//sort by any field and pagination
export const sortByPrice=async (req,res) => {
    try {
        const { sortField, sortOrder,page,limit } = req.query
        // console.log(req.query) 
        const products = await Product.find().sort({ [sortField]: sortOrder === "asc" ? 1 : -1 }).skip((page-1)*limit).limit(limit)
        res.status(200).json({msg:`Sorted Products by ${sortField}`,Products:products})
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
    
}

//filter by price
export const filter=async (req,res) => {
    try {
        const { price } = req.query
        const q = {}

        if (price) q.price = price

        const products = await Product.find(q).select("name price -_id")

        if(!products) return res.status(404).json({msg:"Product not found"})
        
        res.status(200).json({ msg: "Found filtered products", Products:products})
        
        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
    
}




//update product
export const update=async (req,res) => {
    try {
        const { id } = req.params
        const {name,price,description}=req.body
        const product = await Product.findByIdAndUpdate(id,{name,price,description},{new:true})
        if (!product) return res.status(404).json({ msg: "No Product found with the given id" })
        product.save()
        res.json({msg:"Product updated",Product:product})
    } catch (error) {
        res.status(500).json({error:error.message})       
    }
    
}


//delete product
export const deleteProduct=async (req,res) => {
    try {
        const { id } = req.params    
        const product = await Product.findByIdAndDelete(id)
        if (!product) return res.status(404).json({ msg: `Product with ${id} not found` })
        res.status(200).json({msg:"Product Deleted Successfully",Product:product})
        
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
    
}