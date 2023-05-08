import React from 'react'

const PublicProjectCard = ({project}) => {
    // console.log(project.vehicleClass.split('-'))
   const pClass = project.vehicleClass.split('-')
    return (
        
        <div className='cardContainer'>
            <div className='mainCon'> 
                <div className='imgContainer'>
                    <img className='cardImg' src={project.projectImg} alt='VehicleImg'/>
                </div>
                <div className='description'>
                    <h3>{project.vehicleYear} {project.vehicleMake} {project.vehicleModel}</h3>
                    <h3>{pClass}</h3>
                    <h3>Made by: {project.user.username}</h3>
                </div>
            </div>
        </div>
    )
}

export default PublicProjectCard