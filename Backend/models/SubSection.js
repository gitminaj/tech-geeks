import mongoose from 'mongoose';

const subSectionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    timeDuration:{
        type: Number,
        required: true
    },
    description:{
        type: String,
    },
    videoUrl:{
        type: String,
        required: true
    }
});

const SubSection = mongoose.model('subSection', subSectionSchema);

export default SubSection;