import React, { useEffect,useState } from 'react'
import axios from 'axios'
import ComponentCard from './ComponentCard'


const ComponentList = ({id, toggle}) => {
    // console.log(+id)
const[compArr,setCompArr] = useState([])


    useEffect(()=> {
        axios.get(`http://localhost:3050/components/${id}`)
        .then(res=>{
            // console.log(res.data)
            setCompArr(res.data)
        }).catch(err=> console.log(err))
    },[toggle])

    // console.log(compArr)
const mapComponents = compArr.map(comp=> {
    // console.log(comp)
    return <ComponentCard key={comp.id} comp={comp} />
})

    return (
        <div className='componentsContainer'>
            <h2 className='componentsTitle'>Components</h2>
            {(compArr.length >= 1) ? mapComponents : <h2>No Components...</h2>}
        </div>
    )
}
export default ComponentList