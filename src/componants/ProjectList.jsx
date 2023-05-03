import { useState, useContext } from 'react'
import ProjectCard from './ProjectCard'
import {Link} from 'react-router-dom'
import ProjectContext from '../state/ProjectContext'
import Swal from 'sweetalert2'
import axios from 'axios'
// import axios from 'axios'

const ProjectList = ({projArr, setAddBool, addBool}) => {
    const [projects, setProjects] = useState([])
    const [visible, setVisible] = useState(false)
    const [projectId, setProjectId] = useState('')
    const userId = localStorage.getItem('userId')

    const Projects = useContext(ProjectContext)
    const { dispatch } = useContext(ProjectContext)

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, you will lose all your project data',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'grey',
            confirmButtonText: 'Delete it!'
           }).then((result) => {
            if(result.isConfirmed){
                    axios.delete(`http://localhost:3050/deleteProjects/${id}`)
                    .then(
                        setAddBool(!addBool)
                    ).catch(err=> console.log(err))
                
                Swal.fire(
                    'Your project has been deleted!',
                )
            }
           })
    }

    const mappedProjects = 
    // dispatch({type: 'GET_ALL', payload: projArr})
    projArr.map((proj)=> {
    // console.log(proj)
        return (
        <div className='cardDeleteContainer' key={proj.id}>
            <Link to={`/projects/${proj.id}`} key={proj.id}>
                <ProjectCard key={proj.id} project={proj} setAddBool={setAddBool} addBool={addBool}/>
            </Link>
            <button className='xBtn' onClick={()=>handleDelete(proj.id)}>x</button>
        </div>
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