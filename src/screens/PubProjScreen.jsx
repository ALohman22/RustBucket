import React, {useContext, useState, useEffect } from 'react'
import ProjectContext from '../state/ProjectContext'
import PubComponentList from '../componants/PubComponentList'
import { useParams } from 'react-router-dom'
import AddComponentModel from '../componants/AddComponentModel'
import axios from 'axios'


const PubProjScreen = () => {
const [currProj, setCurrProj] = useState({})
const {id} = useParams()
const {state} = useContext(ProjectContext)

useEffect(()=> {
    axios.get(`http://localhost:3050/api/projects/${id}`)
    .then(res=>{
        setCurrProj(res.data[0])
    }).catch(err=> console.log(err))
},[id])

const presentModel = (comp) => {
    
    return (
        <div className='modelBackground'>
            <div className='componentModel'>
                <AddComponentModel comp={comp}/>
            </div>
        </div>
    )
}

    return (
        <div className='projectScreen'>
            {state.showModel ? presentModel(state.currComp) : <h4></h4>}
            <div className='componentContent'>
            
                    <div className='title-info'>
                        <h2>Make: {currProj.vehicleMake}</h2>
                        <h2>Model: {currProj.vehicleModel}</h2>
                        <h2>Year: {currProj.vehicleYear}</h2>
                    </div>
                    <div className='projectScreenImg'>
                        <img className='projectScreenImg2' src={currProj.projectImg} alt='projImg'/>
                    </div>
           
                <PubComponentList id={id}/>
            </div>
        </div>
    )
}
export default PubProjScreen