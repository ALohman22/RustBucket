import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import PublicProjectCard from './PublicProjectCard'
import Swal from 'sweetalert2'
import ProjectContext from '../state/ProjectContext'

const AddComponentModel = ({comp}) => {
    const userId = localStorage.getItem('userId')
    const [userProj, setUserProj] = useState([])
    const { dispatch } = useContext(ProjectContext)

useEffect(()=> {
    axios.get(`/api/userProjects/${userId}`)
    .then(res=> {
        setUserProj(res.data)
    }
    ).catch(err=> console.log(err))
},[])

const showProjects = userProj.map((proj)=>{
    const projId = proj.id
    return(
    <div key={projId} className='projOption' onClick={()=> addComp(comp, projId)}>
        <PublicProjectCard project={proj}/>
    </div>
    )

})

const addComp = (comp, projId) => {
    const body = {
        componentImg: comp.componentImg,
        componentTitle: comp.componentTitle,
        componentDiscription: comp.componentDiscription,
        componentPrice: comp.componentPrice,
        projectId: +projId
    }
    
    axios.post('/api/components', body)
    .then(res => {
        
        dispatch({type:'PAGE_REFRESH'})
        Swal.fire('Component added to your Project!')
    }).catch(err => console.log(err))

    dispatch({type:'SHOW_MODEL'})
    }



    return(
        <div className='modelMainBack'>
                <h1>Which project would you like to add this component to?</h1>
            <div className='modelMain'>
                {showProjects}
            </div>
                <button className='cancelBtn' onClick={()=> dispatch({type:'SHOW_MODEL'})}>Cancel</button>
        </div>
    )
}

export default AddComponentModel