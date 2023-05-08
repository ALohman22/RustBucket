import { useState, useContext } from 'react'
import ProjectCard from './ProjectCard'
import ProjectContext from '../state/ProjectContext'

// import axios from 'axios'

const ProjectList = ({projArr, setAddBool, addBool}) => {
    const [projects, setProjects] = useState([])
    const [visible, setVisible] = useState(false)
    const [projectId, setProjectId] = useState('')
    const userId = localStorage.getItem('userId')

    const Projects = useContext(ProjectContext)
    const { dispatch } = useContext(ProjectContext)

    const mappedProjects = 
    // dispatch({type: 'GET_ALL', payload: projArr})
    projArr.map((proj)=> {
    // console.log(proj)
        return (
        <div className='cardDeleteContainer' key={proj.id}>
                <ProjectCard key={proj.id} project={proj} setAddBool={setAddBool} addBool={addBool}/>
        </div>
        )
    })

    return(
    <div className="myProjectsSection">
        <h3>My Projects</h3>
        <div className='project-container'>
            {projArr.length !== 0 ? mappedProjects : <h1>No Posts</h1>}
        </div>
        </div>
    )
}

export default ProjectList