import React from 'react'
import imagelogo from '../../asstes/forabout.png'
import Home from '../home/Home'

export default function About() {
  let firrender = {
    maintitle:'Welcome to About Page',
    linkbtn:'Contect Here',
    linkhrf:'./Contect'
  }
  return (
    <div>
      <Home maintitle={firrender.maintitle} linkbtn={firrender.linkbtn} linkhrf={firrender.linkhrf} imagelogo={imagelogo}/>
    </div>
  )
}
