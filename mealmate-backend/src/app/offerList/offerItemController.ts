import { Request, Response } from "express"
import OfferService from "./offerItemService"

class OfferController{
    async AddProduct(req : Request,res : Response){
        try {
            const CreatedProduct = await OfferService.createProduct(req.body,req.files)
            res.status(200).json(CreatedProduct)
        } catch (error) {
            console.log("🚀 ~ OfferController ~ AddProduct ~ error:", error)   
        }
    }
    async GetProduct(req : Request,res : Response){
        try {
            const gotProduct = await OfferService.getAllProducts()
            res.status(200).json(gotProduct) 
        } catch (error) {
            console.log("🚀 ~ OfferController ~ GetProduct ~ error:", error)
            
        }
    }
    async getByIdProduct(req : Request,res : Response){
        try {
            const gorParticular = await OfferService.gotParticularID(req.params.offerItemImageID)
            res.status(200).json(gorParticular)
        } catch (error) {
            console.log('error: ', error);
        }
    }
}

export default new OfferController()