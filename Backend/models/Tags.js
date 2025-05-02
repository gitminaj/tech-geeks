import mongoose from 'mongoose';

const tagsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        types: String
    },
    course:[{
        type: mongoose.Types.ObjectId,
        ref: 'Courses'
    }]
});

const Tags = mongoose.model('tags', tagsSchema);

export default Tags;