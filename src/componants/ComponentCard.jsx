import {useContext, useMemo} from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import ComponentContext from '../state/ComponentContext'

const ComponentCard = ({comp}) => {

    const {state, dispatch} = useContext(ComponentContext)
    
    // const refreshPage = useMemo(()=>{
    //     dispatch({type:'PAGE_REFRESH'})
    //     },[state.toggle])     


// console.log(state.toggle)
    const handleDelete = (id) => {
        // console.log(id)
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
                    axios.delete(`http://localhost:3050/deleteComponent/${id}`)
                    .then(()=>{
                        dispatch({type:'PAGE_REFRESH'})
                        Swal.fire(
                            'Your project has been deleted!',
                            )
                    }
                            // refreshPage
                        ).catch(err=> console.log(err))    
                        }
                    })
                }
          

    return (
            <div className='componentsCard'>
                <div className='compCardImg'>
                <img className='cardImg' src={comp.componentImg} />
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