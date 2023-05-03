const express = require('express')
const cors = require('cors')
const {sequelize} = require('./util/database')
const {User, Project, Component} = require('./controllers/models')
const {addComp, getComp, getAllComp, getAllProjects, getUserProjects, getOneProject, deleteProject, addProject, getProject} = require('./controllers/PC')
const { login, register } = require('./controllers/auth') 


const server = express()

server.use(express.json())
server.use(cors())

User.hasMany(Project)
Project.belongsTo(User)
Project.hasMany(Component)
Component.belongsTo(Project)

server.post('/login', login)
server.post('/register', register)

server.post('/projects', addProject)
server.post('/components', addComp)
// server.get('/userProjects/:id', getProject)
server.get('/projects', getAllProjects)
server.get('/projects/:id', getOneProject)
server.get('/userProjects/:id', getUserProjects)
server.get('/components/:id', getComp)
server.get('/components', getAllComp)

server.delete('/deleteProjects/:id', deleteProject)

sequelize.sync()
.then(() =>{
    server.listen(3050, () => console.log('Server is up on  port: 3050'))
})
.catch(err => console.log(err))