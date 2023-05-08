import React, { useState, useContext, useEffect } from 'react'
// import Select from 'react-select'
// import AuthContext from '../state/AuthContext'
import axios from 'axios'
import ProjectList from '../componants/ProjectList'
import ProjectContext from '../state/ProjectContext'
import AddProject from '../componants/addProject'

const MyProjects = () => {
    const userId = localStorage.getItem('userId')
    const [addBool, setAddBool] = useState(true)

    const { dispatch,state} = useContext(ProjectContext)
    const [projArr, setProjArr] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:3050/userProjects/${userId}`)
        .then(res => {
            dispatch({type: 'GET_ALL', payload: res.data})
            setProjArr(res.data)
    })
        .catch(err=> console.log(err))
    },[addBool])


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