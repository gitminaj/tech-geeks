import User from "../models/Users";
import mailSender from "../utils/MailSender";
import bycrpt from "bcrypt";

export const resetPasswordLink = async (req, res) => {
  try {
    const { email } = req.body;

    const userExist = await findOne({ email });

    if (!userExist) {
      return res.status(404).json({
        success: false,
        message: "email not found",
      });
    }

    const token = crypto.randomUUID();

    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 5 * 60 * 1000,
      },
      { new: true }
    );

    const url = `http://localhost:3000/updatePassword/${token}`;

    await mailSender(
      email,
      "Reset pasword link",
      `Click on link to reset password: ${url}`
    );

    return res.json({
      success: true,
      message: "reset link sent successfully",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { password, token } = req.body;

    if (!password) {
      return res.status(404).json({
        success: false,
        message: "password not found",
      });
    }
    if (!token) {
      return res.status(404).json({
        success: false,
        message: "token not found",
      });
    }

    const user = await User.findOne({ token });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "invalid token",
      });
    }

    if (user.resetPasswordExpires < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "token is expired",
      });
    }

    const hashedPassword = bycrpt.hash(password, 10);

    const respone = await User.findOneAndUpdate(
      { token },
      { password: hashedPassword },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "password reset successful",
    });

  } catch (error) {
    return res.status(500).json({
        success: false,
        error: error.message
    })
  }
};
