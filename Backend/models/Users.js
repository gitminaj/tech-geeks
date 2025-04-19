import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    },
    AccountType:{
        type: String,
        enum: ['Admin', 'Student', 'Instructor'],
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    otherDetials:{
        type: mongoose.Types.ObjectId,
        ref: 'Profile'
    },
})

const User = mongoose.model('user', userSchema);

export default User;