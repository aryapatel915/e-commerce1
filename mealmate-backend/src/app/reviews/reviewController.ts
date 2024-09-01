import reviewService from "./reviewService";
import { Request, Response } from "express";

class ReviewController{
    async AddReview(req : Request,res : Response){
        try {
            const AddedReview = await reviewService.AddReview(req.body)
            res.status(200).json(AddedReview)
        } catch (error) {
            console.log('error: ', error);
        }
    }

    async GetReview(){
        
    }
}

export default new ReviewController()