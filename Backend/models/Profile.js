import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    profession:{
        type: String
    },
    dateOfBirth:{
        type: Date
    },
    gender:{
        type: String,
        enum:['Male', 'Female', 'Other']
    },
    about:{
        type: String
    }
});

const Profile = mongoose.model('profile', profileSchema );

export default Profile;