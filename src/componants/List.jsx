import React, { useRef, useState } from 'react'
import cardboard from '../img/cardboard1.jpg'

const List = () => {
    const [scratchList, setScratchList] = useState([])
    const inputRef = useRef()



    const handleSubmit = (e) => {
        e.preventDefault()
        setScratchList([...scratchList, inputRef.current.value])
        inputRef.current.value = ''
    }
   



    return (
        <div className='list'style={{
            background: `linear-gradient(
              190deg,
              rgba(0, 0, 0, 0.1),
              rgba(0, 0, 0, 0.3)),
              url(${cardboard}) no-repeat top right / cover`,
            
          }}>
            <form onSubmit={handleSubmit}>
                <input 
                ref={inputRef} 
                type='text'
                />
                <button>Add</button>
            </form>
            <ul className="scratchPadUl">
                {scratchList.map((li) => <li key={li}>{li}</li> )}
            </ul>
        </div>
    )
}

export default List


      