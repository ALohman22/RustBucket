import React, { useState, useEffect, useMemo, useContext, } from 'react'
import List from '../componants/List'
import PublicProjectCard from '../componants/PublicProjectCard'
import ComponentCard from '../componants/ComponentCard'
import ProjectContext from '../state/ProjectContext'
import axios from 'axios'

const Main = ({scratchPad}) => {

    const [view, setView] = useState('Projects')
    const [vehicleClass, setVehicleClass] = useState("all")
    const [allProjects, setAllProjects] = useState([])
    const [searchParam, setSearchParam] = useState('')
    const [curInput, setCurInput] = useState('')
    
    const Projects = useContext(ProjectContext)
    const projArr = Projects.state.projects
    const { dispatch } = useContext(ProjectContext)
    // console.log(allProjects)
const handleClass = (e) => {
    setVehicleClass(e.target.value)
}

useEffect(()=> {
    axios.get('http://localhost:3050/projects')
    .then(res => {
        dispatch({type: 'GET_ALL', payload: res.data})
        setAllProjects(projArr)
})
    .catch(err=> console.log(err))
},[])

const filterProjects = useMemo(()=> {
    
    if(vehicleClass === "all" && searchParam === '') {
        return projArr.map(proj => {
            return (
                <PublicProjectCard key={proj.id} project={proj}/>
            ) 
        })
    } else if (vehicleClass === "all" && searchParam !== '') {
        return projArr.filter(proj => {
            return proj.vehicleMake === searchParam || proj.vehicleModel === searchParam || proj.vehicleYear === searchParam
        }).map(proj => {
            return (
                <PublicProjectCard key={proj.id} project={proj}/>
            ) 
        })
    } else {
    return projArr.filter((proj)=> {
        return proj.vehicleClass === vehicleClass})
        .filter((proj)=>{
            return proj.vehicleMake === searchParam || proj.vehicleModel === searchParam || proj.vehicleYear === searchParam
        })
        .map(proj => {
            return (
                <PublicProjectCard key={proj.id} project={proj}/>
            )
        })
    }
},[vehicleClass, allProjects, searchParam])

const filterByName = (e) => {
    e.preventDefault()
    setSearchParam(curInput)
}

    return (
        <div className='mainPage'>
        <div className='main'>
            <div className='options-container'>
                <div className='contentToggle'>
                    <button className='contentToggleBtn' onClick={()=> setView('Projects')}>Projects</button>
                    <button className='contentToggleBtn' onClick={()=> setView('Components')}>Components</button>
                </div>
                <div className='mainSearch'>
                    <form onSubmit={filterByName}>
                        <input className='mainInput' onChange={(e)=> setCurInput(e.target.value)} type='text' placeholder='What are you looking for?'/>
                        <button className='mainSubBtn'>Search</button>
                    </form>
                </div>
                <div className='categories'>
                    <button className='catBtn' value="offRoad" onClick={handleClass}>Off-Road</button>
                    <button className='catBtn' value="muscle" onClick={handleClass}>Muscle</button>
                    <button className='catBtn' value="oldSchoolClassic" onClick={handleClass}>Old school Classics</button>
                    <button className='catBtn' value="raceCar" onClick={handleClass}>Race Car</button>
                    <button className='catBtn' value="luxury" onClick={handleClass}>Luxury</button>
                    <button className='catBtn' value="all" onClick={handleClass}>All</button>
                </div>
            </div>
            {view === 'Projects' ? (
                <div className='Projects'>
                    {filterProjects}
                </div>
                ) : (
                <div className='Components'>
                   
                </div>
                )
            }
        </div>
            {scratchPad ? <List /> : <h1></h1>}
        </div>
    )
}

export default Main