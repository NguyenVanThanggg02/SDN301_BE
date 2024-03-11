import {sizeRepo} from '../repositories/index.js'

//get User by ID
const fetchAllSize = async (req, res) => {
    try {
        const size = await sizeRepo.getAllSize;
        res.status(200).json(size);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        });
    }
}

export default {
    fetchAllSize    
}