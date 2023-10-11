import React from 'react'
import './home.css'


export default function Home(props) {
  return (
    <div className='Homecontainer'>
        <div className='homeleft'>
        <div className="content">
          <div className="maintitle">{props.maintitle}
          <div className="titlename">PraveenTechnical</div>
          </div>
          <p className='pera'>We are team of talanted developer making websites</p>
          <a href={props.linkhrf}><button className="btntag">{props.linkbtn}</button></a>
          </div>
        </div>
        <div className='homeright'>
          <img src={props.imagelogo} alt="PraveenTechnical logo" />
        </div>
    </div>
  )
}
