import User from '../models/Users';

export default async function signup (req, res){
    const { firstName, lastName, email, password, AccountType, number } = req.body;

    if(!firstName, !lastName, !email, !password, !AccountType, !number){
        return res.status(404).json({
            success: false,
            message: 'All fields are required'})
    }

    const user = await User.findOne({where: email});

    if(user){
        return res.json({
            sucess: false,
            message: 'User already exist'
        })
    };

    const respone = await User.create({
        firstName,
        lastName,
        email,
        password,
        AccountType,
        number
    })


}