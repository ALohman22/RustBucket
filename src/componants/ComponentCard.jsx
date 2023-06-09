import { useContext } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import ComponentContext from '../state/ComponentContext'

const ComponentCard = ({comp}) => {

    const { dispatch } = useContext(ComponentContext)  

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Once deleted, you will lose this component data',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'red',
            cancelButtonColor: 'grey',
            confirmButtonText: 'Delete it!',
            reverseButtons: true,
           }).then((result) => {
            if(result.isConfirmed){
                    axios.delete(`http://localhost:3050/api/deleteComponent/${id}`)
                    .then(()=>{
                        dispatch({type:'PAGE_REFRESH'})
                        Swal.fire(
                            'Your project has been deleted!',
                            )
                    }
                        ).catch(err=> console.log(err))    
                        }
                    })
                }
          

    return (
            <div className='componentsCard'>
                <div className='compCardImg'>
                <img className='cardImg' src={comp.componentImg} alt='compImg'/>
                </div>
                <div className='compInfo'>
                <h3>{comp.componentTitle}</h3>
                <h3>{comp.componentDiscription}</h3>
                <h3>${comp.componentPrice}</h3>
                </div>
                <button className='compDeleteBtn' onClick={()=>handleDelete(comp.id)}>Delete</button>
            </div>
    )
}

export default ComponentCard