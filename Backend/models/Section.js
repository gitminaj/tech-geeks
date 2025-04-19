import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    subSection:[{
        type: mongoose.Types.ObjectId,
        ref: 'SubSection'
    }]
});

const Section = mongoose.model('section', sectionSchema);

export default Section;