import mongoose from 'mongoose';

const courseProgressSchema = new mongoose.Schema({
    courseId:{
        type: mongoose.Types.ObjectId,
        ref: 'Courses'
    },
    completedVideo:[{
        type: mongoose.Types.ObjectId,
        ref: 'SubSection'
    }]
});

const courseProgress = mongoose.model('courseProgress', courseProgressSchema);

export default courseProgress;