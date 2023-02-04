import React from 'react'
import Home from './Home'
import Cakes from './Cakes'
import Cookies from './Cookies'
import Pancakes from './Pancakes'
import Stew from './Stew'
import Rolls from './Rolls'
import Bread from './Bread'
import{ Route, Routes } from 'react-router-dom'


function Pages() {
 
  return (  
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cakes' element={<Cakes />} />
        <Route path='/cookies' element={<Cookies />} />
        <Route path='/pancakes' element={<Pancakes />} />
        <Route path='/stew' element={<Stew />} />
        <Route path='/rolls' element={<Rolls />} />
        <Route path='/bread' element={<Bread />} />
    </Routes>
  )
}

export default Pages