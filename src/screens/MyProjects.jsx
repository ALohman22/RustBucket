import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import ProjectList from '../componants/ProjectList'
import ProjectContext from '../state/ProjectContext'
import AddProject from '../componants/addProject'
import ComponentContext from '../state/ComponentContext'

const MyProjects = () => {
    const userId = localStorage.getItem('userId')
    const [addBool, setAddBool] = useState(true)

    const { dispatch,state} = useContext(ProjectContext)
    const {dispatch: dis} = useContext(ComponentContext)
    const [projArr, setProjArr] = useState([])

    useEffect(()=> {
        axios.get(`/userProjects/${userId}`)
        .then(res => {
            dispatch({type: 'GET_ALL', payload: res.data})
            dis({type:'TOGGLE', payload: 'myProjects'})
            setProjArr(res.data)
    })
        .catch(err=> console.log(err))
    },[addBool, dis, dispatch, userId])

    return (
        <div className='mainProjects'>
            {state.showAddProject ? (<AddProject addBool={addBool} setAddBool={setAddBool}/>) : <h1></h1>}
            <div className='myPContainer'>
                <ProjectList projArr={projArr} addBool={addBool} setAddBool={setAddBool}/>
            </div>

        </div>
    )
}

export default MyProjects