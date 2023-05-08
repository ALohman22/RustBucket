import Select from 'react-select'
import {useState, useContext} from 'react'
import axios from 'axios'
import ProjectContext from '../state/ProjectContext'


const AddProject = ({addBool, setAddBool}) => {

const {dispatch} = useContext(ProjectContext)

    const username = localStorage.getItem('username')
    const userId = localStorage.getItem('userId')
    const [projectImg, setProjectImg] = useState('')
    const [vehicleClass, setVehicleClass] = useState(null)
    const [vehicleYear, setVehicleYear] = useState(null)
    const [vehicleMake, setVehicleMake] = useState('')
    const [vehicleModel, setVehicleModel] = useState('')
    const [isPublic, setIsPublic] = useState(true)
    const [allProjects, setAllProjects] = useState([])


const classOptions = [
    {value: "Off-Road", label: "Off Road"},
    {value: "Muscle", label: "Muscle"},
    {value: "Old-School-Classic", label: "Old School Classic"},
    {value: "Race-Car", label: "Race Car"},
    {value: "Luxury", label: "Luxury"},
]

const yearOptions = [
    {value: "2023", label: "2023"},
    {value: "2022", label: "2022"},
    {value: "2021", label: "2021"},
    {value: "2020", label: "2020"},
    {value: "2019", label: "2019"},
    {value: "2018", label: "2018"},
    {value: "2017", label: "2017"},
    {value: "2016", label: "2016"},
    {value: "2015", label: "2015"},
    {value: "2014", label: "2014"},
    {value: "2013", label: "2013"},
    {value: "2012", label: "2012"},
    {value: "2011", label: "2011"},
    {value: "2010", label: "2010"},
    {value: "2009", label: "2009"},
    {value: "2008", label: "2008"},
    {value: "2007", label: "2007"},
    {value: "2006", label: "2006"},
    {value: "2005", label: "2005"},
    {value: "2004", label: "2004"},
    {value: "2003", label: "2003"},
    {value: "2002", label: "2002"},
    {value: "2001", label: "2001"},
    {value: "2000", label: "2000"},
    {value: "1999", label: "1999"},
    {value: "1998", label: "1998"},
    {value: "1997", label: "1997"},
    {value: "1996", label: "1996"},
    {value: "1995", label: "1995"},
    {value: "1994", label: "1994"},
    {value: "1993", label: "1993"},
    {value: "1992", label: "1992"},
    {value: "1991", label: "1991"},
    {value: "1990", label: "1990"},
    {value: "1989", label: "1989"},
    {value: "1988", label: "1988"},
    {value: "1987", label: "1987"},
    {value: "1986", label: "1986"},
    {value: "1985", label: "1985"},
    {value: "1984", label: "1984"},
    {value: "1983", label: "1983"},
    {value: "1982", label: "1982"},
    {value: "1981", label: "1981"},
    {value: "1980", label: "1980"},
    {value: "1979", label: "1979"},
    {value: "1978", label: "1978"},
    {value: "1977", label: "1977"},
    {value: "1976", label: "1976"},
    {value: "1975", label: "1975"},
    {value: "1974", label: "1974"},
    {value: "1973", label: "1973"},
    {value: "1972", label: "1972"},
    {value: "1971", label: "1971"},
    {value: "1970", label: "1970"},
    {value: "1969", label: "1969"},
    {value: "1968", label: "1968"},
    {value: "1967", label: "2967"},
    {value: "1966", label: "1966"},
    {value: "1965", label: "1965"},
    {value: "1964", label: "1964"},
    {value: "1963", label: "1963"},
    {value: "1962", label: "1962"},
    {value: "1961", label: "1961"},
    {value: "1960", label: "1960"},
    {value: "1959", label: "1959"},
    {value: "1958", label: "1958"},
    {value: "1957", label: "1957"},
    {value: "1956", label: "1956"},
    {value: "1955", label: "1955"},
    {value: "1954", label: "1954"},
    {value: "1953", label: "1953"},
    {value: "1952", label: "1952"},
    {value: "1951", label: "1951"},
    {value: "1950", label: "1950"},
    {value: "1949", label: "1949"},
    {value: "1948", label: "1948"},
    {value: "1947", label: "1947"},
    {value: "1946", label: "1946"},
    {value: "1945", label: "1945"},
    {value: "1944", label: "1944"},
]

const handleSubmit = (e) => {
    e.preventDefault()
    
    const body = {
        projectImg,
        vehicleMake,
        vehicleModel,
        vehicleYear: vehicleYear.value,
        vehicleClass: vehicleClass.value,
        isPublic,
        userId
    }
    console.log(body)

axios.post('http://localhost:3050/projects', body)
.then(res => {
    console.log('Project Posted!')
    // const newBody = {...res.data, username}
    // console.log(newBody)
    // dispatch({type: 'ADD_PROJECT', payload: newBody})
    setAddBool(!addBool)
}).catch(err => console.log(err))
dispatch({type: 'SHOW_ADD_PROJECT'})
setVehicleClass(null)
setVehicleYear(null)
setProjectImg('')
setVehicleMake('')
setVehicleModel('')

}

const cancelBtn = () => {
    dispatch({type: 'SHOW_ADD_PROJECT'})
    // console.log(state.screenView)
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