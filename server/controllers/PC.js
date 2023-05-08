const {User, Project, Component} = require('./models')


module.exports = {
    changeIsPublic: async (req,res) => {
        try{
            const {isPublic} = req.params
          
        } catch(err){
            console.log('ERROR in changIsPublic')
            console.log(err)
        }
    },

    addComp: async (req,res) => {
        try{
            const {componentImg, componentTitle, componentDiscription, componentPrice, projectId} = req.body
            const newComp = await Component.create({
                componentImg,
                componentTitle,
                componentDiscription,
                componentPrice,
                projectId
            })
            res.status(200).send(newComp)
         } catch(err){
            console.log('ERROR in addComp')
            console.log(err)
         }
    },

    addProject: async (req,res) => {
        try{
            const { projectImg, vehicleMake, vehicleModel, vehicleYear, vehicleClass, isPublic, userId } = req.body
            const newProj = await Project.create({
                projectImg,
                vehicleMake,
                vehicleModel,
                vehicleYear,
                vehicleClass,
                isPublic,
                userId 
            })
            res.status(200).send(newProj)
        } catch (err) {
            console.log('ERROR in posting Project')
            console.log(err)
           
        }
    },

    getComp: async (req,res) => {
        try{
            const {id} = req.params
            console.log(+id)
            const allComp = await Component.findAll({
                where: {
                    projectId: +id
                },
            })
            res.status(200).send(allComp)
         } catch(err){
            console.log('ERROR in addComp')
            console.log(err)
         }
    
    },

    getAllComp: async (req,res) => {
        try{
            const allComp = await Component.findAll()
            res.status(200).send(allComp)
        } catch(err) {
            console.log('ERROR in getAllComp')
            console.log(err)
        }
    },

    deleteComponent: async (req,res) => {
        try{
            const {id} = req.params
            console.log(id)
            await Component.destroy({
                where: {id: id}
            })
            res.sendStatus(200)
        } catch(err) {
            console.log('ERROR in deleteComponent')
            console.log(err)
        }
    },
 
    deleteProject: async (req, res) => {
        try{
            const {id} = req.params
            console.log(id)
            await Project.destroy({
                where: {id: id}
            })
            res.sendStatus(200)
        } catch(err) {
            console.log('ERROR in deleteProject')
            console.log(err)
        }
    },

    getAllProjects: async (req,res) => {
        try{
            const projects = await Project.findAll({
                where: {
                    isPublic: true
                },
                include: [{
                    model: User,
                    required: true,
                    attributes:['username']
                }]
            })
            res.status(200).send(projects)
        } catch(err) {
            console.log('ERROR in getAllProjects')
            console.log(err)
        }
    },

    getUserProjects: async (req,res) => {
        try{
            const {id} = req.params
            const projects = await Project.findAll({
                where: {
                    userId: id
                },
                include: [{
                    model: User,
                    required: true,
                    attributes:['username']
                }]
            })
            res.status(200).send(projects)
        } catch(err) {
            console.log('ERROR in getAllProjects')
            console.log(err)
        }
    },

    getOneProject: async (req,res) => {
        
        try{
            const {id} = req.params
            const project = await Project.findAll({
                where: {
                    id: id
                },
                includes: [{
                    model: User,
                    required: true,
                    attributes:['username']
                }]
            })
            res.status(200).send(project)
        }catch(err){
            console.log('ERROR in getOneProject')
            console.log(err)
        }
    }
}