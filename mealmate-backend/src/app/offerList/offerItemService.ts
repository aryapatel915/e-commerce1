import { Op } from "sequelize";
import offerItem from "../../database/models/offerItemModel";

class OfferService{
    async  createProduct(body: any,files : any) {
        try {
            const newProduct = await offerItem.create({
                offerItemImage: files?.filename,
                start_date: body?.start_date,
                end_date : body?.end_date,
                createdAt: new Date()
            });

            return newProduct;
        } catch (error) {
            console.log("🚀 ~ ProductService ~ createProduct ~ error:", error);
            throw error; 
        }
}

async getAllProducts() {
    try {
        const today = new Date();
        const products = await offerItem.findAll({
            where: {
                startdate: {
                    [Op.lte]: today,  // startdate should be less than or equal to today
                },
                enddate: {
                    [Op.gte]: today,  // enddate should be greater than or equal to today
                }
            }
        });
        return products;
    } catch (error) {
        console.log("🚀 ~ ProductService ~ getAllProducts ~ error:", error);
        throw error;
    }
}





    async gotParticularID(offerItemImageID : any){
        try {
            const gotData = await offerItem.findOne({where : {offerItemImageID : offerItemImageID}})
            return gotData
        } catch (error) {
            console.log('error: ', error);
            
        }
    }
}

export default new OfferService()