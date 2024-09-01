import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt'
import jwt  from "jsonwebtoken";
import { Request, Response } from 'express';
import Users from "../../database/models/userModel";

const SECERT_KEY = 'ashutosh';
passport.use(new LocalStrategy({usernameField : 'email'},
    async (email : string,password : string,done : (error : any ,user ?: any,options ?:any) => void ) => {
        try {
            const dataRegistered = await Users.findOne({where : { email : email}})
            if(!dataRegistered){
              return  done(null,null,{message : 'You are not registerd with us'})
            }else{
                const ValidPassword = bcrypt.compare(password , dataRegistered?.password_hash)
                if(!ValidPassword){
              return  done(null,null,{message : 'Please enter a valid password'})
                }
                const token = jwt.sign({ email }, SECERT_KEY, { expiresIn: '1h' });
                let obj: any = {
                  token: token,
                  email: dataRegistered.email,
                  userid: dataRegistered.userid
                };
          
                return done(null, obj);
            }

        } catch (error) {
            return done(error);
        }
    }
))

passport.serializeUser((user: any, done: (err: any, id?: any) => void) => {
    done(null, user);
  });
  
  passport.deserializeUser((obj: any, done: (err: any, user?: any) => void) => {
    done(null, obj);
  });
  
  export default passport;