import React, {useContext, useState, useEffect } from 'react'
// import ProjectContext from '../state/ProjectContext'
import ComponentList from '../componants/ComponentList'
import { useParams } from 'react-router-dom'
import AddComponent from '../componants/addComponent'
import axios from 'axios'
import ComponentContext from '../state/ComponentContext'
import ProjectContext from '../state/ProjectContext'


const ProjScreen = () => {


const [toggle, setToggle] = useState(true)
const {id} = useParams()
const {state, dispatch} = useContext(ComponentContext)
const {state: st,dispatch: dis} = useContext(ProjectContext)

useEffect(()=> {
    axios.get(`http://localhost:3050/projects/${id}`)
    .then(res=>{
        // console.log(res.data)
        dispatch({type:'TOGGLE', payload: 'project'})
        dis({type: 'CURR_PROJ', payload: res.data[0]})
    }).catch(err=> console.log(err))
},[id])


const showInput = () => {
    if(state?.showAddComponent){
        return (
        <AddComponent id={id} />
        )
    }
}

    return (
        <div className='projectScreen'>

             <div className='componentContent'>
                <div className='title-info'>
                    <h2>Make: {st.currProj.vehicleMake}</h2>
                    <h2>Model: {st.currProj.vehicleModel}</h2>
                    <h2>Year: {st.currProj.vehicleYear}</h2>
                </div>
                <div className='projectScreenImg'>
                    <img className='projectScreenImg2' src={st.currProj.projectImg} alt='projImg'/>
                </div>
                <ComponentList id={id} toggle={toggle} setToggle={setToggle}/>
            </div>
            {showInput()}
        </div>
    )
}
export default ProjScreen