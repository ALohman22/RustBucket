import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import ComponentCard from './ComponentCard'
import ComponentContext from '../state/ComponentContext'
import ProjectContext from '../state/ProjectContext'


const ComponentList = ({ id }) => {
const[compArr,setCompArr] = useState([])
const { state } = useContext(ComponentContext)
const { state: st } = useContext(ProjectContext)

console.log(st.currProj.isPublic)

useEffect(()=> {
    axios.get(`http://localhost:3050/components/${id}`)
    .then(res=>{
        setCompArr(res.data)
    }).catch(err=> console.log(err))
},[state.toggle])

const mapComponents = compArr.map(comp=> {
    return <ComponentCard key={comp.id} comp={comp} />
})

const getTotal = () => {
    let priceArr = []
    compArr.map(comp => {
        priceArr.push(+comp.componentPrice)
    })
    return Math.round(priceArr.reduce((acc, curr)=> acc + curr, 0) * 100) / 100
}

const togglePublic = () => {
    
}

    return (
        <div className='componentsContainer'>
            <h2 className='componentsTitle'>Components</h2>
            <button onClick={togglePublic}>{st.currProj.isPublic ? 'Make Private' : 'Make Public'}</button>
            <h3 className='total'>Running Total: ${getTotal()}</h3>
            <div className='compCardContainer'>
                {(compArr?.length >= 1) ? mapComponents : <h2>No Components...</h2>}
            </div>
        </div>
    )
}
export default ComponentList