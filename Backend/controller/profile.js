import Profile from "../models/Profile.js"
import User from "../models/Users.js";

export const updateProfile = async (req, res) =>{
    try {
        const { userId } = req.body;
        console.log('req profile', req.body)

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

        const updatedProfile = await Profile.findByIdAndUpdate(user.otherDetials,
            {...req.body}
        , { new: true });

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

export const getProfileByUserId = async (req, res) =>{
    try {
        const { userId } = req.params;

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

        const profile = await findById(user.otherDetials);

        if(!profile){
            return res.status(404).json({
                success: false,
                message: 'Profile not found'
            })
        }

        return res.status(200).json({
            success: false,
            message: 'profile fetched successfuly!',
            data: profile
        })

    } catch (err) {
        console.log('error fetching profile', err);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong while fetching profile',
            error: err.message
        })        
    }
}