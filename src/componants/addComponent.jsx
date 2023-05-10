import {useState, useContext} from 'react'
import axios from 'axios'
import ComponentContext from '../state/ComponentContext'

const AddComponent = ({id}) => {

    const [componentImg, setComponentImg] = useState('')
    const [componentTitle, setComponentTitle] = useState('')
    const [componentDiscription, setComponentDiscription] = useState('')
    const [componentPrice, setComponentPrice] = useState('')
    const {dispatch} = useContext(ComponentContext)


    const handleSubmission = (e) => {
        e.preventDefault()
        const body = {
            componentImg,
            componentTitle,
            componentDiscription,
            componentPrice,
            projectId: +id
        }
        console.log(body)
    
        axios.post('http://localhost:3050/api/components', body)
        .then(()=>{
            setComponentImg('')
            setComponentTitle('')
            setComponentPrice('')
            setComponentDiscription('')
            dispatch({type: 'ADD_COMPONENT_TOGGLE'})
            dispatch({type:'PAGE_REFRESH'})
        }).catch(err=> console.log(err))
    
    }

    const cancelBtn = () => {
        dispatch({type: 'ADD_COMPONENT_TOGGLE'})
    }


    return (

<div className='addInputDiv'>
<form className='addInputForm' onSubmit={handleSubmission}>
    <h3>Add Components</h3>
    <input 
        className='compIn'
        type='text' 
        placeholder='Image URL' 
        value={componentImg}
        onChange={(e)=> setComponentImg(e.target.value)}/>
    <input 
        className='compIn'
        type='text' 
        placeholder='ComponentTitle'
        value={componentTitle} 
        onChange={(e)=>setComponentTitle(e.target.value)}/>
      <input 
        className='compIn'
        type='number' 
        placeholder='Price'
        value={componentPrice} 
        onChange={(e)=>setComponentPrice(e.target.value)}/>
    <textarea 
        className='compTx'
        placeholder='Component Discription' 
        value={componentDiscription}
        onChange={(e)=>setComponentDiscription(e.target.value)}/>
    <button className='addInputBtn'>Submit</button>
</form>
    <button className='addInputBtn' onClick={cancelBtn} >Cancel</button>
</div>
    )
}

export default AddComponent