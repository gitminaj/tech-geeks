import Category from "../models/Category.js";

export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(404).json({
        success: false,
        message: "name is manditory",
      });
    }
    const categoryName = name.toLowerCase();

    const existCategory = await Category.findOne({ name: categoryName });

    if(existCategory){
        return res.status(400).json({
            success: false,
            message: 'Category already exist'
        })
    }

    const response = await Category.create({
      name: categoryName,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "Category created successfully!",
      data: response,
    });
  } catch (error) {
    console.log("error creating Category", error);
    return res.status(500).json({
      success: false,
      message: "error while creating Category",
      error: error.message
    });
  }
};

export const getAllCategory = async (req, res) =>{
    try {
        const response = await Category.find();

        return res.status(200).json({
            success: true,
            message: 'Fetched category successfully',
            data: response
        })
        
    } catch (error) {
        console.log('error while fetching', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch category',
            error: error.message
        })
        
    }


} 
