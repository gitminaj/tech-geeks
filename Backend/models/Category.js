import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        types: String
    },
    courses:[{
        type: mongoose.Types.ObjectId,
        ref: 'Courses'
    }]
});

const Category = mongoose.model('Category', categorySchema);

export default Category;