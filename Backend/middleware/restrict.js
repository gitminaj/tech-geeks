export default function restrict(roles){
    return (req, res, next) =>{
        if(!req.user || !roles.includes(req.user.AccountType)){
            return res.status(400).json({
                success: false,
                message: 'Unauthorised accesse denied'
            })
        }
    }
}