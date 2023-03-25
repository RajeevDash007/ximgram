import Post from "../models/Post.js";

/* create */
export const createPost = async(req,res) => {
    try{
        const { userId, description, picturePath } = req.body;
    }catch(err){
        res.status(409).json({ message: err.message })
    }
}
