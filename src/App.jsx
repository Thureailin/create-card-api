import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Blog from './component/BLog'
import Detail from './component/Detail'
import Create from './component/Create'
import Edit from './component/Edit'

const App = () => {
  return (
    <div className='' >
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App