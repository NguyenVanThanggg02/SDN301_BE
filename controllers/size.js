import {sizeRepo} from '../repositories/index.js'

//get User by ID
const fetchAllSize = async (req, res) => {
    try {
        const allSize = await sizeRepo.fetchAllSize();
        res.status(200).json(allSize);
    } catch (error) {
        res.status(500).json({
            error: error.toString()
        });
    }
}


const getSizeByProductId = async (req, res) => {
    try {
        const { pid } = req.params

        const images = await sizeRepo.findSizeByProductId(pid);

        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default {
    fetchAllSize,
    getSizeByProductId
}