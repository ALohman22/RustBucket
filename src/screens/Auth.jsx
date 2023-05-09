import React, { useState, useContext, } from 'react'
import AuthContext from "../state/AuthContext"
import axios from 'axios'
import Swal from 'sweetalert2'

const Auth = () => {

const authContext = useContext(AuthContext)

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [register, setRegister] = useState(true)

const submitHandler = (e) => {
   e.preventDefault()

   const body = {
        username,
        password
    }

axios.post(register ? `/api/login` : `/api/register`, body)
.then(({data}) => {
    console.log('After Auth', data)
    authContext.login(data.exp, data.token, data.userId, data.username)  
    setPassword('')
    setUsername('')

})
.catch(err=> {
    register ? 
    (
        Swal.fire("Please make sure your username or password is correct")
    ) : (
        Swal.fire("That username Already exists!")
    )
    console.log(err)})  
}
console.log()

const handleToggle = (e)=> {
    e.preventDefault()
    setRegister(!register)
}
    
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
                    type='password' 
                    placeholder='Password'
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}
                    />
                <button className='submitBtn' >
                    {register ? 'Login' : 'Register'}
                </button>

                <div className='registerToggle'>
                    {register ? <p>Don't have a login? Register</p> : <p>Already registered? Login</p>}
                    <button className='registerChange' 
                        onClick={handleToggle}>here
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Auth