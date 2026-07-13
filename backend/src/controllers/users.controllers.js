export const userRegister = async (req,res) => {
    try {
        const {username, email} = req.body;
    } catch (error) {
        console.error("Error in user register ",error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}