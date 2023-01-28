import React from 'react'
import Dropdown from '../components/Dropdown'
import KolačiData from '../data/kolaci.json'

function Kolači() {
  return (
    <div>
      <Dropdown />
      <h1>KOLAČI</h1>
      {KolačiData.map((kolačiDetail, index)=>{
        return <div className='recipe-button' key={kolačiDetail.id}>
        <button>
         <h1>{kolačiDetail.name}</h1>
         <img src= {kolačiDetail.image} alt='img_kolač' />
        </button>
        </div>
      })} 
    </div>
  )
}

export default Kolači