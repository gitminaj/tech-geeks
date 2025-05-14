import Profile from "../models/Profile.js";
import User from "../models/Users.js";

export const updateProfile = async (req, res) => {
  try {
    const { userId } = req.user;
    console.log("req profile", req.body);

    if (!userId) {
      return res.status(404).json({
        success: false,
        message: "userid not found",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    const updatedProfile = await Profile.findByIdAndUpdate(
      user.otherDetials,
      { ...req.body },
      { new: true }
    );

    return res.status(201).json({
      success: false,
      message: "Profile data updated successfuly",
      data: updatedProfile,
    });
  } catch (err) {
    console.log("error updatin profile", err);
    return res.status(500).json({
      success: false,
      message: "error updating profile data",
      error: err.message,
    });
  }
};

export const getProfileByUserId = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({
        success: false,
        message: "id not found",
      });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    const profile = await findById(user.otherDetials);

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile not found",
      });
    }

    return res.status(200).json({
      success: false,
      message: "profile fetched successfuly!",
      data: profile,
    });
  } catch (err) {
    console.log("error fetching profile", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching profile",
      error: err.message,
    });
  }
};

// deleteAccount learn schedule - check corn jobs

// update display picture

export const updatePicture = async (req, res) => {
  try {
    const { profileId } = req.params;

    const image = req.file.path

    if (!profileId) {
      return res.status(404).json({
        success: false,
        message: "profileId not found",
      });
    }

    const response = await Profile.findByIdAndUpdate(profileId, { image: image }, {new: true});

    return res.status(201).json({
        success: true,
        data: response
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "error updating picture",
      error: err.message,
    });
  }
};

// get enrolled courses
