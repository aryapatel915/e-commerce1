import { Request, Response } from "express"
import carouselService from "./carouselservice"
import product from "../../database/models/productModel"
import { includes } from "lodash"
import { model } from "mongoose"
import productImage from "../../database/models/productImageMOdel"

class ProductControllers{

    async AddCarousel(req: Request,res :Response){
        try {
            console.log("🚀 ~ ProductControllers ~ AddCarousel ~ req:", req)
            const body  = req.body
            const files = req.files
            const carouselData = await carouselService.AddCarousel(body,files)
            res.status(200).json(carouselData)


        } catch (error) {
            console.log("🚀 ~ ProductControllers ~ AddCarousel ~ error:", error)
            res.status(500).json('error in controller')
        }
    }
    async getCarousel(req: Request,res :Response){
        try {
            const gotData = await carouselService.getCarousel()
            res.status(200).json(gotData)
        } catch (error) {
            console.log("🚀 ~ ProductControllers ~ AddCarousel ~ error:", error)
            res.status(500).json('error in controller')
        }
    }

    async deletecarousel(req : Request,res : Response){
        try {
          const  carouselId = req.params.carouselId
          console.log('carouselId: ', carouselId);
            const deletedProduct = await carouselService.deletecarousel(carouselId)
            res.status(200).json('deleted sucessfully')
        } catch (error) {
            console.log("🚀 ~ ProductControllers ~ AddCarousel ~ error:", error)
            res.status(500).json('error in controller')
        }
    }

    // async getProductByID(req : Request,res :Response){
    //     try {
    //         const  productId = req.params
    //         const gotproduct = await carouselService.getProductByID(productId)
    //         res.status(200).json(gotproduct)
    //     } catch (error) {
    //         console.log("🚀 ~ ProductControllers ~ AddCarousel ~ error:", error)
    //         res.status(500).json('error in controller')
    //     }
    // }

    // async updateProduct(req : Request,res : Response){
    //     try {
            
    //     } catch (error) {
    //         console.log("🚀 ~ ProductControllers ~ AddCarousel ~ error:", error)
            
    //     }
    // }
}

export default new ProductControllers();