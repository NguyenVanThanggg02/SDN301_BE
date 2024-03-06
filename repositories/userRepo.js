import User from "../models/users.js";

const updateUser = async (id,{FullName, userName,Email,Password,Gender,Dob,Phone,Address})=>{
    try {
        return await User.findByIdAndUpdate({_id:id},{FullName, userName,Email,Password,Gender,Dob,Phone,Address},{new:true});

    } catch (error) {
        throw new Error (error.toSring())
        
    }
}


export default {
   updateUser
}