import mongoose from 'mongoose'

const coursesSchema = new mongoose.Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    reviewAndRating:[{
        type: mongoose.Types.ObjectId,
        ref: 'ReviewAndRating'
    }],
    instructor:{
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    },
    language:{
        type: String
    },
    whatYouWillLearn:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    thumbnail:{
        type: String
    },
    courseContent:[{
        type: mongoose.Types.ObjectId,
        ref: 'section'
    }],
    studentsEnrolled:[
        {
            type: mongoose.Types.ObjectId,
            ref: 'Users'
        }
    ],
    category:{
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    },
    tags:{
        type: String
    }

})

const Course = mongoose.model('Courses', coursesSchema);

export default Course;