import React from 'react'
import Home from '../home/Home'
import imagelogo from '../../asstes/homesideimage.png'

export default function Homeje() {
    let firrender = {
        maintitle:'Grow your business with',
        linkbtn:'Get Started',
        linkhrf:'./Services'
      }
  return (
    <div>
        <Home maintitle={firrender.maintitle} linkbtn={firrender.linkbtn} linkhrf={firrender.linkhrf} imagelogo={imagelogo}/>
    </div>
  )
}
