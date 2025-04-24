import nodemailer from 'nodemailer';

export default async function mailSender ( email: string, title: string, body: string ) {
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        const info = await transporter.sendMail({
            from: 'Tech geeks',
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`
        });
        console.log('info', info);
        return info
    }catch(err){
        console.log('error while sending mail', err.message)
    }
}