import React from 'react'
import datare from '../../asstes/datacontainer.json'
import './services.css' // 

export default function Services() {
  return (
    <div className='servicescontainer'>
    <h1>Our Services</h1>
      <div className="tablecontainer">
        {datare.map((e)=>{
          return(
        <div className="cards">
            <img src={e.url} alt="imagefor" />
            <h5>{e.title}</h5>
            <p className="desc">{e.description}</p>
            <a href={`https://www.google.com/search?q=${e.title}`} target='blank'>
            <button className='btntag'>Click Here</button></a>
        </div>
          )
        })}
      </div>
    </div>
  )
}
