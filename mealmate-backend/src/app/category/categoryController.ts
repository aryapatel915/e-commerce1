import categoryService from "./categoryService"
import { NextFunction, Request, Response } from "express";

class CategoryController{
    async RegisterCategory(req : Request,res :Response){
        try {
            console.log('req: ', req);
            const userDetils = await categoryService.RegisterCategory(req.body)
            res.status(200).json(userDetils)
        } catch (error) {
            console.log("🚀 ~ UserController ~ RegisterUser ~ error:", error)
        }
    }

    async GetAllCategories(req : Request,res :Response){
        try {
            const getAllCategory = await categoryService.getAllCategories()
            res.status(200).json(getAllCategory)

        } catch (error) {
            console.log("🚀 ~ CategoryController ~ GetAllCategories ~ error:", error)
            
        }
    }
}

export default new CategoryController()