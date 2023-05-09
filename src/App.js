import { useState, useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthContext from './state/AuthContext'
import Auth from './screens/Auth'
import Header from './componants/Header'
import MyProjects from './screens/MyProjects'
import Main from './screens/Main'
import ProjScreen from './screens/ProjScreen'
import PubProjScreen from './screens/PubProjScreen'
import './App.css'; 

function App() {

  const authContext = useContext(AuthContext)
  const [scratchPad, setScratchPad] = useState(false)

  return (
    <div className="App">
     <Header scratchPad={scratchPad} setScratchPad={setScratchPad}/>
    <Routes>
      <Route path='/' element={<Main scratchPad={scratchPad}/>}/>
      
      <Route path='/auth' element={!authContext.token ? <Auth /> : <Navigate to='/'/>}/>
      <Route path='/myprojects' element={authContext.token ? <MyProjects /> : <Navigate to='/auth'/>}/>
      <Route path='/projects/:id' element={authContext.token? <ProjScreen /> : <Navigate to='/auth' />} />
      <Route path='/publicProjects/:id'  element={<PubProjScreen />} />
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </div>
  );
}

export default App;
