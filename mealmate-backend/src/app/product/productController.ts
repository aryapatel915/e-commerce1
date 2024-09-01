import { Request, Response } from "express"
import productService from "./productService"

class ProductController{
    async AddProduct(req : Request,res : Response){
        try {
            const CreatedProduct = await productService.createProduct(req.body,req.files)
            res.status(200).json(CreatedProduct)
        } catch (error) {
            console.log("🚀 ~ ProductController ~ AddProduct ~ error:", error)   
        }
    }
    async GetProduct(req : Request,res : Response){
        try {
            const gotProduct = await productService.getAllProducts()
            res.status(200).json(gotProduct) 
        } catch (error) {
            console.log("🚀 ~ ProductController ~ GetProduct ~ error:", error)
            
        }
    }
    async UpdateProduct(req : Request,res : Response){
        try {
            const updateProduct = await productService.updateProduct(req.body,req.files)
        } catch (error) {
            console.log('error: ', error);
            
        }
    }
    async DeleteProduct(req : Request,res : Response){
        try {
            const updateProduct = await productService.DeleteProduct(req.params.productId)
            return res.status(200).json("deleted successfully")
        } catch (error) {
            console.log('error: ', error); 
        }
    }
    async getByIdProduct(req : Request,res : Response){
        try {
            const gorParticular = await productService.gotParticularID(req.params.productId)
            res.status(200).json(gorParticular)
        } catch (error) {
            console.log('error: ', error);
        }
    }
}

export default new ProductController()