import { Request, Response } from "express"
import wishlist from "../../database/models/wishlistModel"
import ProductImage from "../../database/models/productImageMOdel";
import Product from "../../database/models/productModel";

class WishlistService{
    async addtoWishlist(productId : any,userId : any){
        console.log('userId: ', userId);
        console.log('wishlistId: ', productId);
        try {
            const wishlistFound = await Product.findAll({
                where: { productId: productId },
                include: [
                    {
                        model: ProductImage,
                        attributes: ['id', 'imageUrl']
                    }
                ]
            });
            
            console.log('wishlistFound: ', wishlistFound);
            if (wishlistFound.length > 0) {
                const wishlistData = wishlistFound[0]; 
                console.log('wishlist: ', wishlist);
                const WishData = await wishlist.create({
                    ProductName: wishlistData.name,
                    ProductId: wishlistData.productId,
                    ProductDescription: wishlistData.description, 
                    ProductImage: wishlistData.ProductImage.length > 0 ? wishlistData.ProductImage[0].imageUrl : null, 
                    userId: userId
                });
            
                return WishData
            } else {
                console.log("No wishlist found with the given wishlistId.");
            }
        } catch (error) {
            console.log("🚀 ~ CartService ~ addToCart ~ error:", error)
            
        }
    }
    async getWishlist(userid : any){
        try {
            const findall = await wishlist.findAll({where : {userId : userid}})
            console.log('findall: ', findall);
            return findall
        } catch (error) {
            console.log("🚀 ~ CartService ~ getCart ~ error:", error)
            
        }
    }

    async removeFromWishlist(wishlistID : any){
        try {
            const deleteWishlist = await wishlist.destroy({where : {wishlistID : wishlistID} })
            return deleteWishlist
        } catch (error) {
            
        }
    }
}

export default new WishlistService()