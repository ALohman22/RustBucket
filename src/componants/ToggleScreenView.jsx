import { useContext } from 'react'
import ComponentContext from '../state/ComponentContext'
import ProjectContext from '../state/ProjectContext'


const ToggleScreenView = ({toggleAddComponent, toggleScratchPad}) => {


    const { state } = useContext(ComponentContext) 
    const { dispatch } = useContext(ProjectContext)

    const toggleAddProject = () => {
        dispatch({type: 'SHOW_ADD_PROJECT'})
    }

    // console.log(state.screenView)
    if(state.screenView === 'home'){
        return (<li className='navBtn' onClick={toggleScratchPad}>
            Scratch Pad
        </li>)
    } else if(state.screenView === 'project'){
        return (<li className='navBtn' onClick={toggleAddComponent}>
            Add Component
        </li>)
    } else if(state.screenView === 'myProjects') {
        return (<li className='navBtn' onClick={toggleAddProject}>
            Add Project
        </li>)
    }
}

export default ToggleScreenView