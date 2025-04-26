import OTP from '../models/OTP.js';
import User from '../models/Users.js';
import bycrpt from 'bcrypt';
import jwt from 'jsonwebtoken';

// signup
export  async function signup (req, res){
    try{
        const { firstName, lastName, email, password, AccountType, number, otp } = req.body;

        if(!firstName || !lastName || !email || !password || !AccountType || !number || !otp){
            return res.status(404).json({
                success: false,
                message: 'All fields are required'})
        }
    
        const user = await User.findOne({ email});
    
        if(user){
            return res.json({
                sucess: false,
                message: 'User already exist'
            })
        };

        const otpExist = await OTP.find({ email }).sort({createdAt: -1}).limit(1);

        console.log('otp', otpExist[0])

        if(otpExist.length === 0 || otp !== Number(otpExist[0].otp)){
            return res.status(400).json({
                success: false,
                message: 'Invalid otp'
            })
        }

        const hashedPassword = await bycrpt.hash(password, 10);
    
        try {
            const respone = await User.create({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                AccountType,
                number
            })
    
            return res.status(201).json({
                success: true,
                data: respone
            })
    
        } catch (error) {
            console.log('error while signup: ', error)
        }
    
    }catch(err){
        return res.status(400).json({
            success: false,
            error: err.message
        })
    }
   
}

// login

export const login = async (req, res) =>{
    const { email, password } = req.body;

    const user = await User.findOne({ email});
    
    if(!user){
        return res.status(401).json({
            success: false,
            message: 'User does not exist, Please register'
        })
    };
    
    const comparePassword = await bycrpt.compare(password, user.password);

    if(!comparePassword){
        return res.status(400).json({
            success: false,
            message: 'invalid password'
        })
    }

    const payload = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        AccountType: user.AccountType,
        number: user.number
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return res.cookie('token', token).status(200).json({
        success: true,
        message: 'login Successfully!',
        token: token,
    });

}



// sentotp

const generateOTP = () => {
    const timestamp = Date.now().toString(); // 1
    const random = Math.random().toString().slice(2, 8); // 2
    const otp = (timestamp + random).slice(-6); // 3
  
    return otp;
  };
  

export  async function sendOTP (req, res) {
    const { email } = req.body;
    try {

        const userExist = await User.findOne({ email });


        if(userExist){
            return res.status(400).json({
                success: false,
                error: 'User already exist'
            })
        }

        const otpExist = await OTP.findOne({ email });

        if(otpExist){
            return res.status(400).json({
                success: false,
                error: 'OTP already exist'
            })
        }

        const otp = generateOTP();

        const response = await OTP.create({
            email,
            otp
        });

        return res.status(201).json({
            success: true,
            message: 'Otp send successfully',
            response: response
        })

    } catch (err) {
        return res.status(400).json({
            success: false,
            error: err.message
        })
    }
}

// changepassword

export const changepassword = async (req, res) =>{
    try {
        const { password } = req.body;
    const { email } = req.user;

    if(!password){
        return res.status(404).json({
            success: false,
            message: 'Password not found'
        })
    };

    const hashedPassword = await bycrpt.hash(password, 10);

    const response = await User.findOneAndUpdate({ email }, { password: hashedPassword});

    return res.status(201).json({
        success: true,
        message: 'Password updated!',
        response: response
    })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
    


}