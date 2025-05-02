import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) =>{
    try {
        const token = req?.cookies?.token || req?.header('Authorization')?.replace('Bearer ', '')
        if(!token || token === undefined){
            return res.status(404).json({
                success: false,
                error: 'token missing'
            })
        }
        console.log('token', token)
        try {
            const data = jwt.verify(token, process.env.JWT_SECRET);

            req.user = data

        } catch (err) {
            return res.status(500).json({
                success: false,
                error: err.message
            })
        }
        next()
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        })
    }
}
