const express = require('express')
const cors = require('cors')

const { login, register } = require('./controllers/auth') 

const server = express()

server.use(express.json())
server.use(cors())

server.post('/login', login)
server.post('/register', register)


server.listen(3050, () => console.log('Server is up on  port: 3050'))