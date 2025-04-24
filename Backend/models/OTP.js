import mongoose from 'mongoose';
import mailSender from '../utils/MailSender';

const OTPSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    otp:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        expires: 5*60,
    }
});

async function  sendVerificationMail  (email, otp) {
    try {
        const response = await mailSender(email, `Your verification OTP - ${otp}`, `Your otp to register ${otp}`);
        console.log('verification mail sent: ', response)
    } catch (err) {
        console.log('error while sending otp', err)
    }
}

OTPSchema.pre('save', async function(next){
    await sendVerificationMail(this.email, this.otp);
    next();
} )

const OTP = mongoose.model('OTP', OTPSchema);

export default OTP;

