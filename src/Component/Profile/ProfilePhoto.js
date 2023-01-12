import React from 'react'
import './style.css'
import Img from '../../assets/monimg.JPG'
export default function ProfilePhoto() {
  return (
    <>
    <div className="gr">
    <div className="cv">
    cv 
    <div >
      <h1> Skills</h1>
    </div>
    
    </div>
    <img className="ph" src={Img}></img>
    <div className="bord">  

    </div>

    </div>
    </>
  )
}
