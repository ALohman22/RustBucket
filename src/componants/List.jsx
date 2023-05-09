import React, { useState, useContext } from 'react'
import cardboard from '../img/cardboard1.jpg'
import ProjectContext from '../state/ProjectContext'

const List = () => {
    const [input, setInput] = useState('')
    const {state, dispatch} = useContext(ProjectContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input !== ''){
            dispatch({type:'ADD_LIST', payload: input})
            setInput('')
        }
    }
    



    return (
        <div className='list'style={{
            background: `linear-gradient(
              190deg,
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.5)),
              url(${cardboard}) no-repeat top right / cover`,
            
          }}>
            <form className='scratchList' onSubmit={handleSubmit}>
                <input 
                className='scratchIn'
                onChange={(e)=> setInput(e.target.value)}
                value={input} 
                type='text'
                />
                <button className='scratchAdd'>Add</button>
            </form>
            
            <ul className="scratchPadUl">
                {state?.scratchList?.map((li) => <li className='scratchLi' key={li}>{li}</li> )}
                {state?.scratchList?.length >= 1 ? <button className='clearBtn' onClick={()=> dispatch({type:'CLEAR_LIST'})}>Clear List</button> : <h1></h1>}
            </ul>
        </div>
    )
}

export default List


      