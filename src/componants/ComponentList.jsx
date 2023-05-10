import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import ComponentCard from './ComponentCard'
import ComponentContext from '../state/ComponentContext'
import ProjectContext from '../state/ProjectContext'


const ComponentList = ({ id }) => {
const[compArr,setCompArr] = useState([])
const { state, dispatch } = useContext(ComponentContext)
const { state: st, dispatch: dis } = useContext(ProjectContext)

useEffect(()=> {
    axios.get(`http://localhost:3050/api/components/${id}`)
    .then(res=>{
        setCompArr(res.data)
    }).catch(err=> console.log(err))
},[state.toggle, dispatch, id])

const mapComponents = compArr.map(comp=> {
    return <ComponentCard key={comp.id} comp={comp} />
})

const getTotal = () => {
    let priceArr = []
    compArr.map(comp => {
       return priceArr.push(+comp.componentPrice)
    })
    return Math.round(priceArr.reduce((acc, curr)=> acc + curr, 0) * 100) / 100
}

const togglePublic = () => {
    const isPublic = !st.currProj.isPublic

    axios.put(`http://localhost:3050/api/editPrivate/${id}`, {isPublic})
    .then(res=> {
        dis({type:'CHANGE_PUBLIC'})
    })
    .catch(err=> console.log(err))
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