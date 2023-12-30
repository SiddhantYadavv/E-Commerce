import React, { useState } from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx'

const App = () => {
  const [tokenchange,setTokenChange]=useState("")
  
  const onTokenChange=(token)=>{
    setTokenChange(token)
  console.log(tokenchange)
  }

  const isAuthenticated = () => {
    return !!tokenchange
  };

  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Auth onTokenChange={onTokenChange} />}/>
        <Route path='/home' element={isAuthenticated()? <Home/>: <Navigate to="/"/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App