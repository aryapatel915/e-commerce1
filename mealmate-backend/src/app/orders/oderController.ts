import ordersService from "./ordersService"
import { Request, Response } from "express"

class OrderController{
    async AddOrder(req : Request,res : Response){
        try {
            const AddedOrder = await ordersService.AddOrder(req.body)
            res.status(200).json(AddedOrder)
        } catch (error) {
            console.log("🚀 ~ OrderService ~ AddOrder ~ error:", error)
            
        }
    }
    async GetAllOrder(req : Request,res : Response){
        try {
            const GetAllOrder = await ordersService.GetOrderAllUser(req.params.userid)
            res.status(200).json(GetAllOrder)
        } catch (error) {
            console.log("🚀 ~ OrderService ~ AddOrder ~ error:", error)
            
        }
    }  
    async GetParticularOrder(req : Request,res : Response){
        try {
            const AddedOrder = await ordersService.getParticularOrder(parseInt(req.params.id))
            res.status(200).json(AddedOrder)
        } catch (error) {
            console.log("🚀 ~ OrderService ~ AddOrder ~ error:", error)
            
        }
    }

    async updateOrderStatus(req: Request,res : Response){
        try {
            const statusUpdated = await ordersService.updateStatus(req.body)
        } catch (error) {
            console.log('error: ', error);
            
        }
    }
}

export default new OrderController()