import React from 'react'

const ComponentCard = ({comp}) => {
    return (
        <div className='cardContainer'>
            <div className='componentsCard'>
                <div className='compCardImg'>
                <img className='cardImg' src={comp.componentImg} />
                </div>
                <div className='compInfo'>
                <h3>{comp.componentTitle}</h3>
                {/* <h3>{comp.componentDiscription}</h3> */}
                <h3>${comp.componentPrice}</h3>
                </div>
            </div>
        </div>
    )
}

export default ComponentCard