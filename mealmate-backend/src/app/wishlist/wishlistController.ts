import { Request, Response } from "express"
import wishlistService from "../wishlist/wishlistService"

class WishlistController{
    async addtoWishlist(req: Request,res : Response){
        try {
            const productId = req.body.productId
            const userId = req.body.userid

            const addToWishlist = await wishlistService.addtoWishlist(productId,userId)
            res.status(200).json(addToWishlist)

        } catch (error) {
            console.log("🚀 ~ CartController ~ addToCart ~ error:", error)
            
        }
    }

    async getAllWishlist(req: Request,res : Response){
        try {
            const userid = req.params.userid
            console.log('userid: ', userid);
            const getWishData = await wishlistService.getWishlist(userid)
            res.status(200).json(getWishData)
        } catch (error) {
            console.log("🚀 ~ CartController ~ getAllcart ~ error:", error)
            
        }
    }

    async removeFromWishlist(req : Request,res : Response){
        try {
          const  wishlistID = req.params.wishlistID
            const deletedProduct = await wishlistService.removeFromWishlist(wishlistID)
            res.status(200).json('deleted sucessfully')
        } catch (error) {
            console.log("🚀 ~ ProductControllers ~ AddProuct ~ error:", error)
            res.status(500).json('error in controller')
        }
    }
}

export default new WishlistController()