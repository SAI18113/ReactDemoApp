import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Home'
import Details from './Details'


const App = () => {
  return (
    <div className="container">
      <div className='top-bar'>
        <h1 style={{ margin: '0px' }}>Welcome</h1>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
      {/* <Home />   */}
    </div>
  )
}

export default App