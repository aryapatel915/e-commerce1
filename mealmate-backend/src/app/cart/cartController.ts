import { Request, Response } from "express"
import cartService from "./cartService"

class CartController{
    async addToCart(req: Request,res : Response){
        try {
            const productId = req.body.productId
            const userId = req.body.userid

            const addToCart = await cartService.addToCart(productId,userId)
            res.status(200).json(addToCart)

        } catch (error) {
            console.log("🚀 ~ CartController ~ addToCart ~ error:", error)
            
        }
    }

    async getAllcart(req: Request,res : Response){
        try {
            const userid = req.params.userid
            console.log('userid: ', userid);
            const getCartData = await cartService.getCart(userid)
            res.status(200).json(getCartData)
        } catch (error) {
            console.log("🚀 ~ CartController ~ getAllcart ~ error:", error)
            
        }
    }

    async removeFromCart(req : Request,res : Response){
        try {
          const  cartID = req.params.cartID
            const deletedProduct = await cartService.removeFromCart(cartID)
            res.status(200).json('deleted sucessfully')
        } catch (error) {
            console.log("🚀 ~ ProductControllers ~ AddProuct ~ error:", error)
            res.status(500).json('error in controller')
        }
    }


    async getTotalPrice(req: Request,res : Response){
        try {
            const userid = req.params.userid
            console.log('userid: ', userid);
            const getCartData = await cartService.getCartTotal(userid)
            res.status(200).json(getCartData)
        } catch (error) {
            console.log("🚀 ~ CartController ~ getAllcart ~ error:", error)
            
        }
    }
}

export default new CartController()