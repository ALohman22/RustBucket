require('dotenv').config()
const { SECRET } = process.env
const {User} = require('./models')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

createToken = (username, id) => {
    return jsonwebtoken.sign(
        {username, id},
        SECRET,
        {expiresIn: '2 days'}
    )
}

module.exports = {

register: async (req, res) => {
    try {
    const {username, password} = req.body
    let foundUser = await User.findOne({where: {username}})
    if(foundUser) {
        res.status(400).send('That user already exists')
    } else {
        const salt = bcrypt.genSaltSync(5)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await User.create({username, hashedPass: hash})
        const token = createToken(newUser.dataValues.username, newUser.dataValues.id)
        console.log('token:', token)
        const exp = Date.now() + 1000 * 60 * 60 * 48
        res.status(200).send({
            username: newUser.dataValues.username,
            userId: newUser.dataValues.id,
            token,
            exp})
        }

    } catch (err) {
        console.log('ERROR IN register')
        console.log(err)
        res.status(400)
    }
},

login: async (req,res) => {
    try{
        const {username, password} = req.body
        let foundUser = await User.findOne({where: {username}})
        if(foundUser) {
            const isAuthenticated = bcrypt.compareSync(password, foundUser.hashedPass)

            if(isAuthenticated) {
                const token = createToken(foundUser.dataValues.username, foundUser.dataValues.hashedPass)
                const exp = Date.now() + 1000 * 60 * 60 * 48
                res.status(200).send({
                    username: foundUser.dataValues.username,
                    userId: foundUser.dataValues.id,
                    token,
                    exp
                })
            } else {
                res.status(400).send('cannot log in')
            }
        } else {
            res.status(400).send('cannot log in')
        }
    }catch(err) {
        console.log('ERROR in login')
        console.log(err)
        res.sendStatus(400)
    }
},



}