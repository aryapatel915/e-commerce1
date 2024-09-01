import { NextFunction, Request, Response } from "express";
import UserService from "./userService";
import passport from "./../../common/strategies/localstrategy";
import userService from "./userService";

class UserController{
    async RegisterUser(req : Request,res :Response){
        try {
            const userDetils = await UserService.RegisterUser(req.body)
            res.status(200).json(userDetils)
        } catch (error) {
            console.log("🚀 ~ UserController ~ RegisterUser ~ error:", error)
        }
    }

    async LoginUser(req: Request, res: Response, next: NextFunction){
        try {
            passport.authenticate('local', (err: any, user: any, info: any) => {
                if (err) {
                  return next(err);
                }
                if (!user) {
                  return res.status(400).json(info);
                }
                res.json(user);
              })(req, res, next);
        } catch (error) {
            console.log("🚀 ~ UserService ~ LoginUser ~ error:", error)   
        }
    }

    async RegisterUserDetails(req : Request,res :Response){
        try {
            const userDetils = await UserService.RegisterUserDetails(req.body)
            res.status(200).json(userDetils)
        } catch (error) {
            console.log("🚀 ~ UserController ~ RegisterUser ~ error:", error)
        }
    }

    async getByIdUser(req : Request,res : Response){
        try {
            const gorParticular = await userService.gotParticularID(req.params.userid)
            res.status(200).json(gorParticular)
        } catch (error) {
            console.log('error: ', error);
        }
    }
}

export default new UserController();