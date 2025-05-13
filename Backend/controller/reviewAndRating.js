import Course from "../models/Courses.js";
import ReviewAndRating from "../models/ReviewAndRating.js";

export const createReview = async (req, res) =>{
    try {
        const { review, rating, courseId } = req.body;

        if(!review || !rating){
            return res.status(404).json({
                success: false,
                message: 'all fields are compulsory'
            })
        }

        const { id } = req.user;

        const course = await Course.findById(courseId);

        if(!course){
            return res.status(404).json({
                success: false,
                message: 'cannot find the course to add the review'
            })
        }

        if(!course.studentsEnrolled.includes(id)){
            return res.status(404).json({
                success: false,
                message: 'Student is not enrolled for the course'
            })
        }

        const reviewData = await ReviewAndRating.create({
            review,
            rating,
            user: id
        })

        const courseData = await Course.findByIdAndUpdate(course._id,{
            $push: {
                reviewAndRating: reviewData._id
            }
        }, {new:true});

        return res.status(201).json({
            success: true,
            message: 'review registered successfully',
            review: reviewData,
            course: courseData
        })

    } catch (err) {
        console.log('error while registering review', err);
        return res.status(500).json({
            success: false,
            message: 'error while registering review',
            error: err.message
        })
    }
}

// export const getAvgReview = async (req, res) =>{
//     try {
//         const { courseId } = req.params;

//         const 

//     } catch (err) {
//         console.log('error fetching course review', err);
//         return res.status(500).json({
//             success: false,
//             message: 'error fetching review',
//             error: err.message
//         })
//     }
// }