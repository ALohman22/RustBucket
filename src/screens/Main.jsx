import React, { useContext } from 'react'
import List from '../componants/List'
import Card from '../componants/Card'
import AuthContext, { AuthContextProvider } from '../state/AuthContext'

const Main = () => {

    const authContext = useContext(AuthContext)

    return (
        <div className='mainPage'>
        <div className='main'>
            <div className='mainSearch'>
                <input className='mainInput' type='text'/>
                <button className='mainSubBtn'>Search</button>
            </div>
            <div className='categories'>
                <button>Off-Road</button>
                <button>Muscle</button>
                <button>Old school Classics</button>
                <button>Race Car</button>
                <button>Luxury</button>
            </div>
            <div className='Projects'>
                <Card />
            </div>
            
        </div>
            {/* {AuthContextProvider.scratchPad ? <List /> : <h1></h1>} */}
        </div>
    )
}

export default Main