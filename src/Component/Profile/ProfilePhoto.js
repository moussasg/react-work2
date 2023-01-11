import React from 'react'
import './style.css'
import Img from './monimg.JPG'
export default function ProfilePhoto() {
  return (
    <>
    <div className="gr">
    <div className='cv'> cv </div>
    <img className="ph" src={Img}></img>
    <div className="bord">  </div>
    </div>
    </>
  )
}
