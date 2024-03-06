import { trusted } from "mongoose";
import { userRepo } from "../repositories/index.js";


const updateUser = async (req, res) =>{
    try {
        res.status(200).json(await userRepo.updateUser(req.params.id, req.body));
    } catch (error) {
        res.status(500).json({
            error:error.toString()
        });
    }
}

export default {
    updateUser
}