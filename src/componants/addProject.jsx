import Select from 'react-select'
import {useState, useContext} from 'react'
import axios from 'axios'
import {classOptions, yearOptions} from './Options'
import ProjectContext from '../state/ProjectContext'



const AddProject = ({addBool, setAddBool}) => {

const {dispatch} = useContext(ProjectContext)

    const userId = localStorage.getItem('userId')
    const [projectImg, setProjectImg] = useState('')
    const [vehicleClass, setVehicleClass] = useState(null)
    const [vehicleYear, setVehicleYear] = useState(null)
    const [vehicleMake, setVehicleMake] = useState('')
    const [vehicleModel, setVehicleModel] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()
    
    const body = {
        projectImg,
        vehicleMake,
        vehicleModel,
        vehicleYear: vehicleYear.value,
        vehicleClass: vehicleClass.value,
        isPublic: false,
        userId
    }
    console.log(body)

axios.post('3.144.128.21/api/projects', body)
.then(res => {
    setAddBool(!addBool)
    dispatch({type: 'SHOW_ADD_PROJECT'})
    setVehicleClass(null)
    setVehicleYear(null)
    setProjectImg('')
    setVehicleMake('')
    setVehicleModel('')
}).catch(err => console.log(err))

}

const cancelBtn = () => {
    dispatch({type: 'SHOW_ADD_PROJECT'})
}

return (

<div className='addInputDiv'>
    <form className='addInputForm' onSubmit={handleSubmit}>
        <h3>New Project</h3>
        <input 
            className='projIn' 
            type='text' 
            placeholder='Project Image URL'
            onChange={(e) => setProjectImg(e.target.value)}
            value={projectImg}/>
        <Select 
            name="select"
            options={classOptions}
            value={vehicleClass}
            placeholder= 'Class'
            onChange={setVehicleClass}
            theme={(theme)=> ({
                ...theme,
                colors:{
                    ...theme.colors,
                    text: 'black',
                    primary25: 'rgb(172, 165, 154)',
                    primary: 'rgb(172, 165, 154)'
                }
            })}
            />
        <Select 
            name="select"
            options={yearOptions}
            value={vehicleYear}
            placeholder= 'Vehicle Year'
            onChange={setVehicleYear}
            theme={(theme)=> ({
                ...theme,
                colors:{
                    ...theme.colors,
                    text: 'black',
                    primary25: 'rgb(172, 165, 154)',
                    primary: 'rgb(172, 165, 154)'
                }
            })}
            />
            
        <input 
            className='projIn' 
            type='text' 
            placeholder='Vehicle Make'
            onChange={(e)=> setVehicleMake(e.target.value)}
            value={vehicleMake}/>
        <input 
            className='projIn' 
            type='text' 
            placeholder='Vehicle Model'
            onChange={(e)=> setVehicleModel(e.target.value)}
            value={vehicleModel}/>
        <button className='addInputBtn'>Add</button>
    </form>
        <button className='addInputBtn' onClick={cancelBtn}>Cancel</button>
</div>
    )
}

export default AddProject