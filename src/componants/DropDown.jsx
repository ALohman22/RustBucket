import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ToggleScreenView from './ToggleScreenView'
import AuthContext from '../state/AuthContext'
import ComponentContext from '../state/ComponentContext'

const DropDown = ({scratchPad, setScratchPad, showMenu, setShowMenu}) => {

    const authCtx = useContext(AuthContext)
    const authToken = authCtx.token
    const { dispatch } = useContext(ComponentContext) 

    const toggleScratchPad = () => {
        setScratchPad(!scratchPad)
    }

    const toggleAddComponent = () => {
        dispatch({type: 'ADD_COMPONENT_TOGGLE'})
    }

    return (
        <div className='dropDownDiv'>
        {authToken ? (
            <ul className='dropDownLinks'>
                <li className='dropNavBtn'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='dropNavBtn'>
                    <Link to='/myprojects'>My Projects</Link>
                </li>
                <li className='dropNavBtn'>
                    <button className='logout' onClick={authCtx.logout}>Logout</button>
                </li>
               <ToggleScreenView toggleAddComponent={toggleAddComponent} toggleScratchPad={toggleScratchPad} />
            </ul>
            ) : (
            <ul className='links'>
                <li className='dropNavBtn'>
                    <Link to='/'>Home</Link>
                </li>

                <li className='dropNavBtn' onClick={()=>dispatch({type: 'TOGGLE', payload: 'login'})}>
                    <Link to='/auth'>Login</Link>
                </li>
                <ToggleScreenView toggleAddComponent={toggleAddComponent} toggleScratchPad={toggleScratchPad}/>
            </ul>)}
        </div>

    )
}

export default DropDown