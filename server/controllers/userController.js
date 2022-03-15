const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')


const generateJwt = (id, email, role) => {
    return  jwt.sign({id: id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
    
}

class UserController {

    async registration(req, res, next) {
        const {email, password, role} = req.body

        if (!email || !password) {
            return next(ApiError.BadRequest('Неправильный email или пароль'))
        }

        const candidate = await User.findOne( { where: {email} })

        if (candidate) {
            return next(ApiError.BadRequest('Пользователь с таким email уже существует'))
        }
        
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create( {email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
        //return res.json({userPass: user.password})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne( {where: {email}})

        if (!user) {
            return next(ApiError.Internal('Пользователь не найден'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)

        if (!comparePassword) {
           return next(ApiError.Internal('Неправильный email или пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json(token)
       // return res.json({userPass: user.password, pass: password})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.password, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()