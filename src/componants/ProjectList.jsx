import { useState, useContext } from 'react'
import ProjectCard from './ProjectCard'
import {Link} from 'react-router-dom'
import ProjectContext from '../state/ProjectContext'
// import axios from 'axios'

const ProjectList = ({projArr, setAddBool, addBool}) => {
    const [projects, setProjects] = useState([])
    const userId = localStorage.getItem('userId')

    const Projects = useContext(ProjectContext)
    const { dispatch } = useContext(ProjectContext)


    const mappedProjects = 
    // dispatch({type: 'GET_ALL', payload: projArr})
    projArr.map((proj)=> {
    // console.log(proj)
        return (
        <Link to={`/projects/${proj.id}`} key={proj.id}>
            <ProjectCard key={proj.id} project={proj} setAddBool={setAddBool} addBool={addBool}/>
        </Link>
        )
    })

    return(
    <div className="myProjectsSection">
        <h1>My Projects</h1>
        <div className='project-container'>
            {projArr.length !== 0 ? mappedProjects : <h1>No Posts</h1>}
        </div>
        </div>
    )
}

export default ProjectList