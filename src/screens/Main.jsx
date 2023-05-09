import React, { useState, useEffect, useMemo, useContext, } from 'react'
import List from '../componants/List'
import {Link} from 'react-router-dom'
import PublicProjectCard from '../componants/PublicProjectCard'
import PublicComponentCard from '../componants/PublicComponentCard'
import ProjectContext from '../state/ProjectContext'
import AddComponentModel from '../componants/AddComponentModel'
import {MdSearch} from 'react-icons/md'
import Select from 'react-select'
import axios from 'axios'

const Main = ({scratchPad}) => {

    const [view, setView] = useState('Projects')
    const [vehicleClass, setVehicleClass] = useState({value:"all", label: "All"})
    const [allProjects, setAllProjects] = useState([])
    const [allComp, setAllComp] = useState([])
    const [curInput, setCurInput] = useState('')

    
    const Projects = useContext(ProjectContext)
    const projArr = Projects.state.projects
    const {state, dispatch } = useContext(ProjectContext)

useEffect(()=> {
    axios.get('/api/projects/')
    .then(res => {
        dispatch({type: 'GET_ALL', payload: res.data})
        dispatch({type: 'TOGGLE', payload: 'home'})
        setAllProjects(projArr)
}).catch(err=> console.log(err))

    axios.get('/api/components/')
    .then(res=> {
    setAllComp(res.data)
}).catch(err=> console.log(err))

},[dispatch])

const filterProjects = useMemo(()=> {
    if(vehicleClass?.value === "all" && curInput === '') {
        return projArr?.map(proj => {
            return (
                <Link to={`/publicProjects/${proj.id}`} key={proj.id}>
                    <PublicProjectCard key={proj.id} project={proj} />
                </Link>
            ) 
        })
    } else if (vehicleClass?.value === "all" && curInput !== '') {
        return projArr?.filter(proj => {
            return proj.vehicleMake.toLowerCase().includes(curInput.toLowerCase()) || 
            proj.vehicleModel.toLowerCase().includes(curInput.toLowerCase()) || 
            proj.vehicleYear.toString().includes(curInput)
        }).map(proj => {
            return (
                <Link to={`/publicProjects/${proj.id}`} key={proj.id}>
                    <PublicProjectCard key={proj.id} project={proj}/>
                </Link>
            ) 
        })
    } else if (vehicleClass?.value !== 'all' && curInput === ''){
    return projArr?.filter((proj)=> {
        return proj.vehicleClass === vehicleClass.value})
        .map(proj => {
            return (
                <Link to={`/publicProjects/${proj.id}`} key={proj.id}>
                    <PublicProjectCard key={proj.id} project={proj}/>
                </Link>
            )
        })
    } else if (vehicleClass?.value !== 'all' && curInput !== '') {
        return projArr?.filter((proj)=> {
            return proj.vehicleClass === vehicleClass.value})
            .filter((proj)=>{
                return ( proj.vehicleMake.toLowerCase().includes(curInput.toLowerCase()) || 
                proj.vehicleModel.toLowerCase().includes(curInput.toLowerCase()) || 
                proj.vehicleYear.toString().includes(curInput) )
            })
            .map(proj => {
                return (
                    <Link to={`/publicProjects/${proj.id}`} key={proj.id}>
                        <PublicProjectCard key={proj.id} project={proj}/>
                    </Link>
                )
            })
    }
},[vehicleClass, allProjects, curInput])

const filterCopies = [...new Map(allComp.map((comp) => [comp.componentTitle, comp])).values()]

const handleAdd = (comp) => {
    dispatch({type:'SHOW_MODEL'})
    dispatch({type:'CURR_COMP', payload: comp})
   }

const allComponents = filterCopies.map((comp) => {
    return (
        <PublicComponentCard
            key={comp.id}
            comp={comp} 
            handleAdd={handleAdd}    
        />
    )
})

const inputFilterComponents = filterCopies.filter(comp => {
    return ( comp.componentTitle.toLowerCase().includes(curInput.toLowerCase()) || 
    comp.componentDiscription.toLowerCase().includes(curInput.toLowerCase()) ||
    comp.componentPrice.toString().includes(curInput))
    }).map((comp) => {
        return (
            <PublicComponentCard
                key={comp.id}
                comp={comp}
                handleAdd={handleAdd}
            />
        )
    })

const searching = (curInput === '') ? allComponents : inputFilterComponents

const classOptions = [
    {value: "Off-Road", label: "Off Road"},
    {value: "Muscle", label: "Muscle"},
    {value: "Old-School-Classic", label: "Old School Classic"},
    {value: "Race-Car", label: "Race Car"},
    {value: "Luxury", label: "Luxury"},
    {value:"all", label: "All"}
]

const presentModel = () => {
    
    return (
        <div className='modelBackground'>
            <div className='componentModel'>
                <AddComponentModel comp={state.currComp}/>
            </div>
        </div>
    )
}

    return (
        <div className='mainPage'>
        <div className='main'>
        {state.showModel ? presentModel() : <h4></h4>}
        <div className='options-container'>
            <div className='mainSearch'> 
                <div className='contentToggle'>
                    <button className={view === 'Projects' ? 'focusedView' : 'contentToggleBtn'} onClick={()=> setView('Projects')}>Projects</button>
                    <button className={view === 'Components' ? 'focusedView' : 'contentToggleBtn'} onClick={()=> setView('Components')}>Components</button>
                </div>
                <div className='mainInputContainer'>
                    <input className='mainInput' onChange={(e)=> setCurInput(e.target.value)} type='text' placeholder='What are you looking for?'/>
                    <MdSearch/>
                </div>
                {view === 'Projects' ? (
                    <div className='selectContainer'>
                    <Select 
                        name="select"
                        options={classOptions}
                        value={vehicleClass}
                        placeholder='Browse Categories'
                        onChange={setVehicleClass}
                        theme={(theme)=> ({
                            ...theme,
                            colors:{
                                ...theme.colors,
                                text: 'black',
                                primary25: 'rgb(172, 165, 154)',
                                primary: 'rgb(172, 165, 154)'
                            }
                        })}
                        />
                    </div>
                ) : (<div className='selectContainer'></div>)}
            </div>
        </div>
            {view === 'Projects' ? (
            <div className='pageDisplay'>
                <div className='Projects'>
                    {filterProjects?.length >= 1 ? filterProjects : <h2>No Projects...</h2>}
                </div>
                </div>
                ) : (
                <div  className='pageDisplay'>   
                    <div className='Components'>
                    {allComp.length >=1 ? searching : <h2>No Components...</h2>}
                    </div>
                </div>    
                )
            }
        </div>
            {scratchPad ? <List /> : <h1></h1>}
        </div>
    )
}

export default Main