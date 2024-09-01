import Review from "../../database/models/reviewModel";

class ReviewService{
   async AddReview(body : any){
        try {
            const AddedReview = await Review.create({
                product_id : body.product_id,
                user_id : body.user_id,
                rating : body.rating,
                comment : body.comment
            })
            return AddedReview
        } catch (error) {
            console.log('error: ', error);
            
        }
    }

    async GetReview(){
        try {
            
        } catch (error) {
            console.log('error: ', error);
            
        }
    }
}

export default new ReviewService()