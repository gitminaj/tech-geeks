import mongoose from "mongoose";
import Section from "../models/Section.js";
import SubSection from "../models/SubSection.js";

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
        timeDuration: Number(timeDuration),
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

// update subsecction

export const updateSubSection = async (req, res) =>{
    try {
        const { id } = req.params;

        const subSection = await SubSection.findById(id);

        if(!subSection){
            return res.status(404).json({
                success: false,
                message: 'subsection not found'
            })
        }

        const videoUrl = req?.file?.path;

        const payload = {
            ...req.body,
            videoUrl: videoUrl || subSection.videoUrl
        }

        const response = await SubSection.findByIdAndUpdate(id,payload, {new:true});

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

// delete subsection

export const deletSubSection = async (req, res) =>{
      try {
        const { id } = req.params;

        const subSection = await SubSection.findById(id);

        if(!subSection){
            return res.status(404).json({
                success: false,
                message: 'sub-section not found'
            })
        }

        // return console.log('attached', attachedSection);

        const response = await SubSection.findByIdAndDelete(id);

        const attachedSection = await Section.find({ subSection : id });

        console.log('attached',attachedSection);

        if(attachedSection.length > 0){
            var updatedSection = await Section.updateOne( { _id : attachedSection[0]._id }, {
                $pull: { subSection: new mongoose.Types.ObjectId(id) }
            }, {new: true} )
        }

        return res.status(201).json({
            success: true,
            message: 'sub-section deleted',
            data: response,
            // section: updatedSection || ""
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message
        })
    }
}

