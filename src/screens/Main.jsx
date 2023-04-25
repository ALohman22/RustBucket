import React, { useContext, useState } from 'react'
import List from '../componants/List'
import ProjectCard from '../componants/ProjectCard'
import ComponentCard from '../componants/ComponentCard'
import AuthContext, { AuthContextProvider } from '../state/AuthContext'

const Main = ({scratchPad}) => {

    const authContext = useContext(AuthContext)

    const [view, setView] = useState('Projects')

    return (
        <div className='mainPage'>
        <div className='main'>
            <div className='options-container'>
                <div className='contentToggle'>
                    <button className='contentToggleBtn' onClick={()=> setView('Projects')}>Projects</button>
                    <button className='contentToggleBtn' onClick={()=> setView('Components')}>Components</button>
                </div>
                <div className='mainSearch'>
                    <input className='mainInput' type='text' placeholder='What are you looking for?'/>
                    <button className='mainSubBtn'>Search</button>
                </div>
                <div className='categories'>
                    <button className='catBtn'>Off-Road</button>
                    <button className='catBtn'>Muscle</button>
                    <button className='catBtn'>Old school Classics</button>
                    <button className='catBtn'>Race Car</button>
                    <button className='catBtn'>Luxury</button>
                </div>
            </div>
            {view === 'Projects' ? (
                <div className='Projects'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
                ) : (
                <div className='Components'>
                    <ComponentCard />
                    <ComponentCard />
                    <ComponentCard />
                    <ComponentCard />
                    <ComponentCard />
                </div>
                )
            }
        </div>
            {scratchPad ? <List /> : <h1></h1>}
        </div>
    )
}

export default Main