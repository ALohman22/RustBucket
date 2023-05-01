const {User, Project, Component} = require('./models')


module.exports = {
    addComp: async (req,res) => {
        try{
            const {componentImg, componentTitle, componentDiscription, projectId} = req.body
            const newComp = await Component.create({
                componentImg,
                componentTitle,
                componentDiscription,
                projectId
            })
            res.status(200).send(newComp)
         } catch(err){
            console.log('ERROR in addComp')
            console.log(err)
         }
    },

    addProject: async (req,res) => {
        // const {proImg, VhMake, VhModel, VhYear, VhClass} = req.body
        try{
            const { projectImg, vehicleMake, vehicleModel, vehicleYear, vehicleClass, userId } = req.body
        //    console.log(userId)
            const newProj = await Project.create({
                projectImg,
                vehicleMake,
                vehicleModel,
                vehicleYear,
                vehicleClass,
                userId 
            })
            res.status(200).send(newProj)
        } catch (err) {
            console.log('ERROR in posting Project')
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

    getAllProjects: async (req,res) => {
        try{
            const projects = await Project.findAll({
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