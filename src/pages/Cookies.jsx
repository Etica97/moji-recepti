import React from 'react'
import CookiesData from '../data/cookies.json'

function Cookies() {
  return (
    <div>
      <h2>KOLAČI</h2>
      {CookiesData.map((cookiesDetail, index)=>{
        return <div className='recipe-button' key={cookiesDetail.id}>
        <button>
         <h2>{cookiesDetail.name}</h2>
         <img src= {cookiesDetail.image} alt='img_kolač' />
        </button>
        </div>
      })} 
    </div>
  )
}

export default Cookies