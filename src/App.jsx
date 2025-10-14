import React from 'react'
import Home from './assets/Home'
import Skills from './assets/Skills'
import Navbar from './assets/Navbar'
import  {Route,Routes} from 'react-router-dom'
import About from './assets/About'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
    </div>
  )
}

export default App
