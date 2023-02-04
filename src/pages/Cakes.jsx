import React from 'react'
import CakesData from '../data/cakes.json'
import './pages.css'

function Cakes() {
  return (
    <div>
      <h2>TORTE</h2>
      {CakesData.map((cakesDetail, index)=>{
        return <div className='recipe-button' key={cakesDetail.id}>
        <button>
         <h2>{cakesDetail.name}</h2>
         <img src= {cakesDetail.image} alt='img_torte' />
        </button>
        </div>
      })} 
      </div>
  )
}

export default Cakes