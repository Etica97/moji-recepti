import React from 'react'
import Dropdown from '../components/Dropdown'
import KolačiData from '../data/kolaci.json'

function Kolači() {
  return (
    <div>
      <Dropdown />
      <h2>KOLAČI</h2>
      {KolačiData.map((kolačiDetail, index)=>{
        return <div className='recipe-button' key={kolačiDetail.id}>
        <button>
         <h2>{kolačiDetail.name}</h2>
         <img src= {kolačiDetail.image} alt='img_kolač' />
        </button>
        </div>
      })} 
    </div>
  )
}

export default Kolači