import Users from "../../database/models/userModel";
import bcrypt from 'bcrypt'
import UserDetails from "../../database/models/usrDetailsModel";
class UserService{
    async RegisterUser(body : any){
        try {
            const hashedPassword = await bcrypt.hash(body.password_hash,12)
            const registeredUser = await Users.create({
                username: body.username,
                email: body.email,
                password_hash: hashedPassword,
                created_at: new Date()
              });
              return registeredUser
        } catch (error) {
            console.log("🚀 ~ UserService ~ RegisterUser ~ error:", error)   
        }
    }
    async RegisterUserDetails(body : any){
        try {
            const registeredUserDetails = await UserDetails.create({
                first_name: body.first_name,
                last_name: body.last_name,
                building: body.building,
                street: body.street,
                city: body.city,
                ZipCode: body.ZipCode,
                state: body.state,
                Details_ID: body.Details_ID,
                created_at: new Date()
            });
            return registeredUserDetails;
        } catch (error) {
            console.log("🚀 ~ UserService ~ RegisterUser ~ error:", error)   
        }
    }

    async gotParticularID(userid : any){
        try {
            const gotData = await Users.findOne({where : {userid : userid},include : [UserDetails]})
            console.log('gotData: ', gotData);
            return gotData
        } catch (error) {
            console.log('error: ', error);
            
        }
    }

    
}

export default new UserService();