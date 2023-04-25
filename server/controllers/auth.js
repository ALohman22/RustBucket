require('dotenv').config()
const { SECRET } = process.env
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

const users = []
let id = 1

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
    
    const salt = bcrypt.genSaltSync(5)
    const hash = bcrypt.hashSync(password, salt)
    const newUser = {id, username, hashedPass: hash}
    users.push(newUser)
    const token = createToken(newUser.username, newUser.id)
    console.log('token:', token)
    const exp = Date.now() + 1000 * 60 * 60 * 48
    id ++
    res.status(200).send({
        username: newUser.username,
        userId: newUser.id,
        token,
        exp
    })
    } catch (err) {
    console.log('ERROR IN register')
    console.log(err)
    res.status(400)
    }
},

login: async (req,res) => {

}



}