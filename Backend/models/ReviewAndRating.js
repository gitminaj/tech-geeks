import mongoose from 'mongoose';

const reviewAndRatingSchema = new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    review:{
        type: String
    },
    rating:{
        type: String
    },
});

const ReviewAndRating = mongoose.model('reviewAndRating', reviewAndRatingSchema);

export default ReviewAndRating;