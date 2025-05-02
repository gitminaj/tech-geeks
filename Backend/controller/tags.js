import Tags from "../models/Tags.js"

export const createTag = async (req, res) => {
    try {
        const { name, description } = req.body

    if(!name){
        return res.status(404).json({
            success: false,
            message: 'name is manditory'
        })
    }

    const response = await Tags.create({
        name,description
    });

    return res.status(201).json({
        success: true,
        message: 'Tag created successfully!',
        data: response
    })
    } catch (error) {
        console.log('error creating tag', error)
        return res.status(500).json({
            success: false,
            message: 'error while creating tag'
        })
    }
    
}