import Section from "../models/Section";
import SubSection from "../models/SubSection";

export const createSubSection = async (req, res) =>{
    try {
        const { title, timeDuration, description, subSectionId } = req.body;

    if(!title || !timeDuration || !description || !subSectionId){
        return res.status(404).json({
            success: false,
            message: 'all details are compulsory'
        })
    }

    const videoUrl = req.file.path;

    const subSection = await SubSection.create({
        title: title,
        timeDuration: timeDuration,
        description: description,
        videoUrl: videoUrl
    });

    const section = await Section.findByIdAndUpdate(subSectionId, { 
        $push:{
            subSection: subSection._id
        }
    }, {new:true});

    return res.status(201).json({
        success: true,
        message: 'subsection created',
        data: subSection,
        section: section
    })

    } catch (error) {
        console.log('error creating sub section', error);
        return res.status(500).json({
            success: false,
            message: 'error creating subsection',
            error: error.message
        })
    }
}

export const getSubSectionById = async (req, res) =>{
    try {
        const { id } = req.params;

        const subSection =  await SubSection.findById(id);

        return res.status(200).json({
            success: true,
            message: 'subsection fetched successfully',
            data: subSection
        })


    } catch (error) {
        console.log('error fetching subsection', error);
        return res.status(500).json({
            success: false,
            message: 'error fetching subsection',
            error: error.message
        })
    }
}


