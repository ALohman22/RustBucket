import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ToggleScreenView from './ToggleScreenView'
import AuthContext from '../state/AuthContext'
import ComponentContext from '../state/ComponentContext'

const Header = ({ scratchPad, setScratchPad }) => {

    const authCtx = useContext(AuthContext)
    const { state,dispatch } = useContext(ComponentContext) 

    const toggleScratchPad = () => {
        setScratchPad(!scratchPad)
    }

    const toggleAddComponent = () => {
        dispatch({type: 'ADD_COMPONENT_TOGGLE'})
    }

    
  
    return (
        <div className='header'>
            <h2 className='webTitle'>RustBucket</h2>

            {authCtx.token ? (
            <ul className='links'>
                <li className='navBtn' onClick={()=>dispatch({type: 'TOGGLE', payload: 'home'})}>
                    <Link to='/'>Home</Link>
                </li>
                <li className='navBtn' onClick={()=>dispatch({type: 'TOGGLE', payload: 'myProjects'})}>
                    <Link to='/myprojects'>My Projects</Link>
                </li>
                <li className='navBtn'>
                    <button className='logout' onClick={authCtx.logout}>Logout</button>
                </li>
               <ToggleScreenView toggleAddComponent={toggleAddComponent} toggleScratchPad={toggleScratchPad}/>
            </ul>
            ) : (
            <ul className='links'>
                <li className='navBtn' onClick={()=>dispatch({type: 'HOME', payload: 'home'})}>
                    <Link to='/'>Home</Link>
                </li>

                <li className='navBtn'>
                    <Link to='/auth'>Login</Link>
                </li>
                <li className='navBtn' onClick={toggleScratchPad}>
                    Scratch Pad
                </li>
            </ul>
            )}
        </div>
    )
}

export default Header