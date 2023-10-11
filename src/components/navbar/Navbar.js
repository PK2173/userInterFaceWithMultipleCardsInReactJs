import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='Navbarcontainer'>
        <div className="title">
            <h2>PraveenTechnical</h2>
        </div>
        <div className="pagepath">
            <div className="pages"><a href="./Home">Home</a></div>
            <div className="pages"><a href="./Services">Services</a></div>
            <div className="pages"><a href="./About">About</a></div>
            <div className="pages"><a href="./Contect">Contect</a></div>
        </div>
    </div>
  )
}   

export default Navbar