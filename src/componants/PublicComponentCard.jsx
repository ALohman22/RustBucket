import {useContext} from 'react'
import ProjectContext from '../state/ProjectContext'

const PublicComponentCard = ({comp}) => {  

const {state, dispatch} = useContext(ProjectContext)
const handleAdd = (comp) => {
    dispatch({type:'SHOW_MODEL'})
    dispatch({type:'CURR_COMP', payload: comp})
}

    return (
        <div className='componentsCard'>
            <div className='compCardImg'>
            <img className='cardImg' src={comp.componentImg} />
            </div>
            <div className='compInfo'>
            <h3>{comp.componentTitle}</h3>
            <h3>{comp.componentDiscription}</h3>
            <h3>${comp.componentPrice}</h3>
            </div>
            <button className='pubCompDeleteBtn' onClick={()=>handleAdd(comp)}>Add to Project</button>
        </div>
    )
}

export default PublicComponentCard   