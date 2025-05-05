import Course from "../models/Courses.js";
import User from "../models/Users.js";
import Category from "../models/Category.js";

export const createCourse = async (req, res) => {
  const {
    title,
    description,
    language,
    tags,
    price,
    whatYouWillLearn,
    category
  } = req.body;
  const { id: instructorId } = req.user

  const thumbnail = req.file;
  const thumbnailPath = thumbnail.path;

  if (!title || !description || !language || !tags || !category || !price || !whatYouWillLearn){
    return res.status(404).json({
        success: false,
        message: 'Some of the details are missing'
    })
  }

//   const Instructor = await findById(instructors);

//   if(!Instructor){
//     return res.status(404).json({
//         success: false,
//         message: 'instructor not found'
//     })
//   }

  const categoryData = await Category.findById(category);

  if(!categoryData){
    return res.status(404).json({
        success: false,
        message: 'category not found'
    })
  }

  const course = await Course.create({
    ...req.body,
    thumbnail: thumbnailPath,
    instructor: instructorId
  })

  await User.findByIdAndUpdate(instructorId, {
    $push: {
        courses: course._id
    }
  });

  await Category.findByIdAndUpdate(categoryData._id, {
    $push:{
        courses: course._id
    }
  })

  return res.status(200).json({
    success: false,
    message: 'course created successfully!'
  })

};


