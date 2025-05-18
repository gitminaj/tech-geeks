import Course from "../models/Courses.js";
import Section from "../models/Section.js";

export const createSection = async (req, res) =>{
    try {
        const { courseId, title } = req.body;

        if(!courseId || !title){
            return res.status(404).json({
                success: false,
                message: 'All details are required'
            })
        }

        const section = await Section.create({title});

        try {
            
            const course = await Course.findByIdAndUpdate(courseId,{
                $push:{
                    courseContent: section._id
                }
            }, {new: true})

            return res.status(201).json({
                success: true,
                message: 'Section created successfully!',
                section: section,
                course: course 
            })

        } catch (err) {
            console.log('error updating course with section');
            return res.status(500).json({
                success: false,
                message: 'Fialed updating section in course',
                error: err.message
            })
        }
        
    } catch (err) {
        console.log('error', err);
        return res.status(500).json({
            success: false,
            message: 'failed to create section',
            error: err.message
        })
    }
}

export const getSectionById = async (req, res) =>{
    try {
        const { id } = req.params;

        if(!id){
            return res.status(201).json({
                success: false,
                message: 'sectionID not found'
            })
        }

        const section = await Section.findById(id);

        return res.status(201).json({
            success: true,
            message: 'section fetched successfully!',
            data: section
        })

    } catch (err) {
        console.log('error fetching section', err);
        return res.status(500).json({
            success: false,
            message: 'error fetching section',
            error: err.message
        })
    }
}

// update section (not tested)

export const updateSection = async (req, res) =>{
    try {
        const { id } = req.params;

        const section = await Section.findById(id);

        if(!section){
            return res.status(404).json({
                success: false,
                message: 'section not found'
            })
        }

        const response = await Section.findByIdAndUpdate(id , { ...req.body }, {new:true});

        return res.status(201).json({
            success: true,
            data: response
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message
        })
    }
}



// delete section

export const deletSection = async (req, res) =>{
      try {
        const { id } = req.params;

        const section = await Section.findById(id);

        if(!section){
            return res.status(404).json({
                success: false,
                message: 'section not found'
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