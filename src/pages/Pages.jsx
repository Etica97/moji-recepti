import React from 'react'
import Home from './Home'
import Torte from './Torte'
import Kolači from './Kolači'
import Palačinke from './Palačinke'
import Variva from './Variva'
import Kiflice from './Kiflice'
import Kruh from './Kruh'
import{ Route, Routes } from 'react-router-dom'


function Pages() {
 
  return (  
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/torte' element={<Torte />} />
        <Route path='/kolaci' element={<Kolači />} />
        <Route path='/palacinke' element={<Palačinke />} />
        <Route path='/variva' element={<Variva />} />
        <Route path='/kiflice' element={<Kiflice />} />
        <Route path='/kruh' element={<Kruh />} />
    </Routes>
  )
}

export default Pages