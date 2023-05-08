import {useContext} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import ComponentContext from '../state/ComponentContext'


const ProjectCard = ({project, setAddBool, addBool}) => {

    const {state} = useContext(ComponentContext)

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, you will lose all your project data',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'grey',
            confirmButtonText: 'Delete it!',
            reverseButtons: true,
           }).then((result) => {
            if(result.isConfirmed){
                    axios.delete(`http://localhost:3050/deleteProject/${id}`)
                    .then(
                        setAddBool(!addBool)
                    ).catch(err=> console.log(err))
                
                Swal.fire(
                    'Your project has been deleted!',
                )
            }
           })
    }
   
    return (
        
        <div className='cardContainer'>
            <div className={state.screenView === 'myProject' ? 'mainCon' : 'mainConMy'}> 
                <div className='imgContainer'>
                    <img className='cardImg' src={project.projectImg} alt='vehicle Img'/>
                </div>
                <div className='description'>
                    <div className='vehicleInfo'>
                        <h3>Year: <br></br>{project.vehicleYear} </h3>
                        <h3>Make: <br></br>{project.vehicleMake} </h3>
                        <h3>Model: <br></br>{project.vehicleModel} </h3>
                    </div>
                    <div className='otherInfo'>
                        <h3>Class: {project.vehicleClass} </h3>
                    </div>
                    <div className='cardFooter'>
                        <Link to={`/projects/${project.id}`}>
                            <div className='ProjLink'>
                                <h4 className='ph4'>Go to Project</h4>
                            </div>
                        </Link>
                        <button className='xBtn' onClick={()=>handleDelete(project.id)}>x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard