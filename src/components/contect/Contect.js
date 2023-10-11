import React from 'react'
import './countect.css'

export default function Contect() {
  return (
    <div className='contectcontainer'>
      <div className="colection">
        <h1>Contact Us</h1>
        <div className="inputtages">
          <label>Full Name</label>
          <input type="text" />
          <label>Phone</label>
          <input type="tel" />
          <label>Email Address</label>
          <input type="email" />
          <label>Massage</label>
          <textarea cols="30" rows="10"></textarea>
        </div>
        <button className='btntag btcon'>Submit From</button>
      </div>
    </div>
  )
}
