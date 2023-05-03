import React from 'react'
import axios from 'axios'
import ProjectContext from '../state/ProjectContext'



const ProjectCard = ({project, setAddBool, addBool}) => {
    // console.log(project)
    
   
    return (
        
        <div className='cardContainer'>
            <div className='mainCon'> 
                <div className='imgContainer'>
                    <img className='cardImg' src={project.projectImg} alt='vehicle Img'/>
                </div>
                <div className='description'>
                    <div className='vehicleInfo'>
                        <h3>Year: {project.vehicleYear} </h3>
                        <h3>Make: {project.vehicleMake} </h3>
                        <h3>Model: {project.vehicleModel} </h3>
                    </div>
                    <div className='otherInfo'>
                        <h3>Class: {project.vehicleClass} </h3>
                    <div className='cardFooter'>
                        {/* <button className='deleteBtn' onClick={()=>deleteProject(project.id)}>Delete Project</button> */}
                        <h3>Made by: {project.user.username} </h3>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard