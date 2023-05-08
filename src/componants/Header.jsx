import React, {useState} from 'react'
import HeaderLinks from './HeaderLinks'
import DropDown from './DropDown'

const Header = ({ scratchPad, setScratchPad }) => {

    const [showMenu, setShowMenu] = useState(false)

    const toggleSelectMenu = () => {
        setShowMenu(!showMenu)
    }

     const toggleDrop = () => {
        if(showMenu){
            return (
                <div className='dropMenu'>
                    <DropDown showMenu={showMenu} setShowMenu={setShowMenu} scratchPad={scratchPad} setScratchPad={setScratchPad}/>
                </div>
            )
        }
     }

    return (
        <div className='header'>
            <h2 className='webTitle'>RustBucket</h2>
            {window.innerWidth <= 700 ? (
                <div className="smallMenu" onClick={toggleSelectMenu}>
                    <div className="topLine"></div>
                    <div className="bottomLine"></div>
                    <div className="middleLine"></div>
                </div>
                
            ) : (    
            <HeaderLinks scratchPad={scratchPad} setScratchPad={setScratchPad}/>)}
            {toggleDrop()}
        </div>
    )
}

export default Header