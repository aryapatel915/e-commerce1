import { Request, Response } from "express"
import product from "../../database/models/productModel"
import cart from "../../database/models/cartModel"
import ProductImage from "../../database/models/productImageMOdel";

class CartService{
    async addToCart(productId : any,userId : any){
        console.log('userId: ', userId);
        console.log('productId: ', productId);
        try {
            const productFound = await product.findAll({
                where: { productId: productId },
                include: [
                    {
                        model: ProductImage,
                        attributes: ['id', 'imageUrl']
                    }
                ]
            });
            
            console.log('productFound: ', productFound);
            if (productFound.length > 0) {
                const product = productFound[0]; 
                console.log('product: ', product);
                const cartData = await cart.create({
                    ProductName: product.name,
                    ProductId: product.productId,
                    ProductDescription: product.description, 
                    CartPrice : product.price,
                    ProductImage: product.ProductImage.length > 0 ? product.ProductImage[0].imageUrl : null, 
                    userId: userId
                });
            
                return cartData
            } else {
                console.log("No product found with the given productId.");
            }
        } catch (error) {
            console.log("🚀 ~ CartService ~ addToCart ~ error:", error)
            
        }
    }
    async getCart(userid : any){
        try {
            const findall = await cart.findAll({where : {userId : userid}})
            console.log('findall: ', findall);
            return findall
        } catch (error) {
            console.log("🚀 ~ CartService ~ getCart ~ error:", error)
            
        }
    }

    async removeFromCart(cartID : any){
        try {
            const deleteCart = await cart.destroy({where : {cartID : cartID} })
            return deleteCart
        } catch (error) {
            
        }
    }

    async getCartTotal(userid : any){
        try {
            const findall = await cart.findAll({where : {userId : userid}})
            console.log('findall: ', findall);
            return findall
        } catch (error) {
            console.log("🚀 ~ CartService ~ getCart ~ error:", error)
            
        }
    }
}

export default new CartService()