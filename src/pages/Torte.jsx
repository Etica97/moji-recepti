import React from 'react'
import Dropdown from '../components/Dropdown'
import TorteData from '../data/torte.json'
import './pages.css'

function Torte() {
  return (
    <div>
      <Dropdown />
      <h2>TORTE</h2>
      {TorteData.map((torteDetail, index)=>{
        return <div className='recipe-button' key={torteDetail.id}>
        <button>
         <h2>{torteDetail.name}</h2>
         <img src= {torteDetail.image} alt='img_torte' />
        </button>
        </div>
      })} 
      </div>
  )
}

export default Torte