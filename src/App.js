import { useState, useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthContext from './state/AuthContext'


import Auth from './screens/Auth'
import Header from './componants/Header'
import MyProjects from './screens/MyProjects'
import Main from './screens/Main'
import './App.css'; 

function App() {

  const authContext = useContext(AuthContext)

 

  return (
    <div className="App">
     <Header />
    <Routes>
      <Route path='/' element={<Main />}/>
      
      <Route path='/auth' element={!authContext.token ? <Auth /> : <Navigate to='/'/>}/>
      <Route path='/myprojects' element={authContext.token ? <MyProjects /> : <Navigate to='/auth'/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </div>
  );
}

export default App;
