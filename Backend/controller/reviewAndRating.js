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

        const course = await Course.findById(courseId).populate('reviewAndRating');

        // return console.log('course', course);

        if(!course){
            return res.status(404).json({
                success: false,
                message: 'cannot find the course to add the review'
            })
        }

        if(!course.studentsEnrolled.includes(id)){
            return res.status(404).json({
                success: false,
                message: 'Student is not enrolled for the course',

            })
        }

        const userReview = course.reviewAndRating.filter( review => review.user == id  );

        if(userReview.length > 0){
            return res.status(400).json({
                success: false,
                message: 'user already added the review for the courses',
                data: userReview
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

export const deleteReview = async (req, res) =>{
    try {
        const { id } = req.params;

        const review = await ReviewAndRating.findById(id);

        if(!review){
            return res.status(404).json({
                success: false,
                message: 'review not found'
            })
        }

        const response = await ReviewAndRating.findByIdAndDelete(id);

        return res.status(201).json({
            success: true,
            message: 'Review deleted',
            data: response
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
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

// getallratingandreviews

export const getAllReviews = async (req, res) =>{
    try {
        const reviews = await ReviewAndRating.find({});

        return res.status(200).json({
            success: true,
            data: reviews
        });
    } catch (err) {
       return res.status(500).json({
        success: false,
        message: 'error fetching all revies',
        error: err.message
       }) 
    }
}