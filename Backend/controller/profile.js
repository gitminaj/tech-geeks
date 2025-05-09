import Profile from "../models/Profile"
import User from "../models/Users";

export const createProfile = async (req, res) =>{
    try {
        const { userId } = req.body;

        if(!userId){
            return res.status(404).json({
                success: false,
                message: 'userid not found'
            })
        }

        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({
                success: false,
                message: 'user not found'
            })
        }

        const updatedProfile = Profile.findByIdAndUpdate(user.otherDetials,{
            ...req.body
        }, { new: true });

        return res.status(201).json({
            success: false,
            message: 'Profile data updated successfuly',
            data: updatedProfile
        })

    } catch (err) {
        console.log('error updatin profile', err);
        return res.status(500).json({
            success: false,
            message: 'error updating profile data',
            error: err.message
        })
    }
}