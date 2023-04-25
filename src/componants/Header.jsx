import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../state/AuthContext'

const Header = () => {
    
    const authCtx = useContext(AuthContext)
    console.log(authCtx.token)
    // const toggleScratchPad = () => {
    //     AuthContextProvider.setScratchPad(!AuthContextProvider.scratchPad)
    // }

    return (
        <div className='header'>
            <h2 className='webTitle'>RustBucket</h2>

            {authCtx.token ? (
            <ul className='links'>
                <li className='navBtn'>
                    <Link to='/'>Home</Link>
                </li>

                <li className='navBtn'>
                    <button onClick={authCtx.logout}>Logout</button>
                </li>
                <li className='navBtn'>
                    <Link to='/myprojects'>My Projects</Link>
                </li>
                {/* <li className='navBtn' onClick={toggleScratchPad}>
                    Scratch Pad
                </li> */}
            </ul>
            ) : (
            <ul className='links'>
                <li className='navBtn'>
                    <Link to='/'>Home</Link>
                </li>

                <li className='navBtn'>
                    <Link to='/auth'>Login</Link>
                </li>

                {/* <li className='navBtn' onClick={toggleScratchPad}>
                    Scratch Pad
                </li> */}
            </ul>
            )}
        </div>
    )
}

export default Header