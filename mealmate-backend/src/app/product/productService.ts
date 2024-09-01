import Category from "../../database/models/categoriesModel";
import ProductImage from "../../database/models/productImageMOdel";
import Product from "../../database/models/productModel";

class ProductService{
    async  createProduct(body: any,files : any) {
        try {
            const newProduct = await Product.create({
                name: body?.name,
                description: body?.description,
                price: body?.price,
                stockQuantity: body.stockQuantity,
                categoryId: body.categoryId,
                createdAt: new Date()
            });

            if(files){
                const arry : any[] = files.map((ele : any) =>({
                    productId : newProduct.productId,
                    imageUrl : ele.filename
                }))
                const insertFiles = ProductImage.bulkCreate(arry)
            }
            return newProduct;
        } catch (error) {
            console.log("🚀 ~ ProductService ~ createProduct ~ error:", error);
            throw error; 
        }
}

    async getAllProducts() {
        try {
            const products = await Product.findAll({
                include: [
                    {
                        model: Category,
                        as: 'category' 
                    },
                    {
                        model: ProductImage,
                        as : 'ProductImage'
                    }
                ]
            });
            return products;
        } catch (error) {
            console.log("🚀 ~ ProductService ~ getAllProducts ~ error:", error);
            throw error; 
        }
    }

    async updateProduct(body : any,files : any){
        try {
            const foundBody = await Product.update({where : {productId : body.productId}},body)
            // if(foundBody){
            //     if(files){
            //         const deleteImages = ProductImage.destroy({where : body.productImage.id})
            //         const arry : any[] = files.map((ele : any) =>({
            //             productId : newProduct.productId,
            //             imageUrl : ele.filename
            //         }))
            //         const insertFiles = ProductImage.bulkCreate(arry)
            //     }
            // }
            return foundBody
        } catch (error) {
            console.log('error: ', error);
            
        }
    }

    async DeleteProduct(id : any){
        try {
            const deleteImage  = await ProductImage.destroy({where : {productId : id}})
            if(deleteImage){
                const deleteProduct = await Product.destroy({where : {productId :id}})
            }
            return deleteImage
        } catch (error) {
            console.log('error: ', error);
            
        }
    }

    async gotParticularID(productId : any){
        try {
            const gotData = await Product.findOne({where : {productId : productId},include : [ProductImage]})
            return gotData
        } catch (error) {
            console.log('error: ', error);
            
        }
    }
}

export default new ProductService()