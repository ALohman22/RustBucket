import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from "../state/AuthContext"
import axios from 'axios'

const Auth = () => {

const authContext = useContext(AuthContext)
const navigate = useNavigate()


const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [register, setRegister] = useState(false)

const submitHandler = (e) => {
   e.preventDefault()

    const url = 'http://localhost:3050'

   const body = {
        username,
        password
    }

axios.post(register ? `http://localhost:3050/login` : `http://localhost:3050/register`, body)
.then(({data}) => {
    console.log('After Auth', data)
    authContext.login(data.exp, data.token, data.userId)  
    setPassword('')
    setUsername('')
})
.catch(err=> console.log(err))

    
}


const handleToggle = (e)=> {
    e.preventDefault()
    setRegister(!register)
}

// const nav = (e) => {
//     e.preventDefault()
//     navigate('/')
// }
    
    return (
        <div className='mainAuth'>
            <form className='signIn' onSubmit={submitHandler}>
                <h2 className='registerTitle'>{register ? 'Log In' : 'Register Here'}</h2>
                <input 
                    className='signInInput' 
                    type='text' 
                    placeholder='Username'
                    onChange={(e)=> setUsername(e.target.value)}
                    value={username}
                />
                <input 
                    className='signInInput' 
                    type='text' 
                    placeholder='Password'
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    />
                <button className='submitBtn' >
                    {register ? 'Login' : 'Register'}
                </button>

                <div className='registerToggle'>
                    {register ? <p>Dont have a login? Register</p> : <p>Already registered? Login</p>}
                    <button className='registerChange' 
                        onClick={handleToggle}>here
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Auth