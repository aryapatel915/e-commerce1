import carousel from "../../database/models/carouselModel"
import carouselImage from "../../database/models/carouselImage"

class carouselService{

    async AddCarousel(body : any,files : any){
        try {
            console.log("🚀 ~ carouselService ~ AddCarousel ~ files:", files)
            console.log("🚀 ~ carouselService ~ AddCarousel ~ body:", body)
            const carouselData = await carousel.create(body)
            if(carouselData){
                const imageArray: any[] = files.map((file: any) => ({
                    carouselId: carouselData.carouselId,
                    carouselImage: file.filename
                }));
                const carouselImages = carouselImage.bulkCreate(imageArray)
            }
            return carouselData
        } catch (error) {
            console.log("🚀 ~ ProductControllers ~ AddCarousel ~ error:", error)
            
        }
    }
    async getCarousel(){
        try {
            const gotData = await carousel.findAll({
                include: [
                    {
                        model: carouselImage,
                        attributes: ['carouselImageID', 'carouselImage']
                    }
                ]
            });
            return gotData
        } catch (error) {
            console.log("🚀 ~ ProductControllers ~ AddCarousel ~ error:", error)
            
        }
    }

    async deletecarousel(carouselId : any){
        try {
            const deletecarousel = await carousel.destroy({where : {carouselId : carouselId} })
            return deletecarousel
        } catch (error) {
            console.log("🚀 ~ ProductControllers ~ AddCarousel ~ error:", error)
            
        }
    }

    // async getProductByID(carouselId : any){
    //     try {
    //         const gotProduct = await carousel.findOne({where : {carouselId : carouselId} })
    //         return gotProduct
    //     } catch (error) {
    //         console.log("🚀 ~ ProductControllers ~ AddCarousel ~ error:", error)
            
    //     }
    // }

    // async updateProduct(req : Request,res : Response){
    //     try {
            
    //     } catch (error) {
    //         console.log("🚀 ~ ProductControllers ~ AddCarousel ~ error:", error)
            
    //     }
    // }
}

export default new carouselService();