import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './Component/Navbar'
import Layout from './Component/Layout'
import Home from './Component/Home'
import Menu from './Component/Menu'
import Resume from './Component/Resume'


function App() {
  const [Options, setOptions] = useState(false)
  useEffect(() => {
  }, [Options])
  

  return (
    <Router>
      <div className='bg-yellow-500 h-screen overflow-hidden'>
        <Navbar Options={Options} setOptions={setOptions}/>
        <Menu Options={Options} />
        <Resume></Resume>
        <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/:page' element={<Layout/>} />
            </Routes>
      </div>
    </Router>
  )
}

export default App
