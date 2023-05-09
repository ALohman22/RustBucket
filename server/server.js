const express = require('express')
const cors = require('cors')
const {sequelize} = require('./util/database')
const {User, Project, Component} = require('./controllers/models')
const {changeIsPublic, addComp, getComp, getAllComp, deleteComponent, getAllProjects, getUserProjects, getOneProject, deleteProject, addProject} = require('./controllers/PC')
const { login, register } = require('./controllers/auth') 


const server = express()

server.use(express.json())
server.use(cors())

User.hasMany(Project)
Project.belongsTo(User)
Project.hasMany(Component)
Component.belongsTo(Project)

server.post('/api/login', login)
server.post('/api/register', register)

server.post('/api/projects/', addProject)
server.post('/api/components/', addComp)

server.put('/api/editPrivate/:id', changeIsPublic)

server.get('/api/projects', getAllProjects)
server.get('/api/projects/:id', getOneProject)
server.get('/api/userProjects/:id', getUserProjects)
server.get('/api/components/:id', getComp)
server.get('/api/components', getAllComp)

server.delete('/api/deleteProject/:id', deleteProject)
server.delete('/api/deleteComponent/:id', deleteComponent)

sequelize.sync()
.then(() =>{
    server.listen(3050, () => console.log('Server is up on  port: 3050'))
})
.catch(err => console.log(err))