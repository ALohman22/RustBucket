import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PublicProjectCard from './PublicProjectCard'
import Swal from 'sweetalert2'

const AddComponentModel = ({comp, showModel, setShowModel}) => {
    // console.log(comp)
    const userId = localStorage.getItem('userId')
    const [userProj, setUserProj] = useState([])

useEffect(()=> {
    axios.get(`http://localHost:3050/userProjects/${userId}`)
    .then(res=> {
        setUserProj(res.data)
        // console.log(res.data)
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
//  console.log(comp)
//  console.log(projId)
    const body = {
        componentImg: comp.componentImg,
        componentTitle: comp.componentTitle,
        componentDiscription: comp.componentDiscription,
        componentPrice: comp.componentPrice,
        projectId: +projId
    }
    console.log(body)
    
    axios.post('http://localhost:3050/components', body)
    .then(res => {
        console.log('Project Posted!')
        Swal.fire('Component added to your Project!')
    }).catch(err => console.log(err))

    setShowModel(!showModel)
    }



    return(
        <div className='modelMainBack'>
                <h1>Which project would you like to add this component to?</h1>
            <div className='modelMain'>
                {showProjects}
            </div>
                <button className='cancelBtn' onClick={()=> setShowModel(false)}>Cancel</button>
        </div>
    )
}

export default AddComponentModel