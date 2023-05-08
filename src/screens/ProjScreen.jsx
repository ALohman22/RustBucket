import React, {useContext, useState, useEffect } from 'react'
// import ProjectContext from '../state/ProjectContext'
import ComponentList from '../componants/ComponentList'
import { useParams } from 'react-router-dom'
import AddComponent from '../componants/addComponent'
import axios from 'axios'
import ComponentContext from '../state/ComponentContext'


const ProjScreen = () => {

const [currProj, setCurrProj] = useState({})
const [toggle, setToggle] = useState(true)
const {id} = useParams()
const {state, dispatch} = useContext(ComponentContext)


useEffect(()=> {
    axios.get(`http://localhost:3050/projects/${id}`)
    .then(res=>{
        
        dispatch({type:'TOGGLE', payload: 'project'})
        setCurrProj(res.data[0])
    }).catch(err=> console.log(err))
},[id])

    return (
        <div className='projectScreen'>

             <div className='componentContent'>
                <div className='title-info'>
                    <h2>Make: {currProj.vehicleMake}</h2>
                    <h2>Model: {currProj.vehicleModel}</h2>
                    <h2>Year: {currProj.vehicleYear}</h2>
                </div>
                <div className='projectScreenImg'>
                    <img className='projectScreenImg2' src={currProj.projectImg}/>
                </div>
                <ComponentList id={id} toggle={toggle} setToggle={setToggle}/>
            </div>
            {state?.showAddComponent ? <AddComponent id={id} toggle={toggle} setToggle={setToggle}/>
            : <h1></h1>}
        </div>
    )
}
export default ProjScreen