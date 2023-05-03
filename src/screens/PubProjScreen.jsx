import React, {useContext, useState, useEffect } from 'react'
import ProjectContext from '../state/ProjectContext'
import ComponentList from '../componants/ComponentList'
import { useParams } from 'react-router-dom'
import axios from 'axios'



const PubProjScreen = () => {
const [componentImg, setComponentImg] = useState('')
const [componentTitle, setComponentTitle] = useState('')
const [componentDiscription, setComponentDiscription] = useState('')
const [componentPrice, setComponentPrice] = useState('')
const [currProj, setCurrProj] = useState({})
const [toggle, setToggle] = useState(true)
const {id} = useParams()
// const projectCon = useContext(ProjectContext)
// const projects = projectCon.state.projects
// // console.log(projects)

// const thisProj = projects.filter(p=> p.id === +id)
// console.log(thisProj)

useEffect(()=> {
    axios.get(`http://localhost:3050/projects/${id}`)
    .then(res=>{
        // console.log(res.data[0])
        setCurrProj(res.data[0])
    }).catch(err=> console.log(err))
},[])

    return (
        <div className='projectScreen'>
            <div className='componentContent'>
                <div className='title-info'>
                    <h2>Make: {currProj.vehicleMake}</h2>
                    <h2>Model: {currProj.vehicleModel}</h2>
                    <h2>Year: {currProj.vehicleYear}</h2>
                </div>
                <div className='projectScreenImg'>
                    <img className='projectScreenImg' src={currProj.projectImg}/>
                </div>
                <ComponentList id={id} toggle={toggle}/>
            </div>
        </div>
    )
}
export default PubProjScreen