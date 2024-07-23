import React from 'react'
import './Profile.css'

import profilePhoto from '../../assets/ProfilePhoto.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Profile = () => {
  return (
    <div id='home' className='profile'>
     <img className='profilephoto' src={profilePhoto} alt="" />
      <h1><span>I am Tejas Shinde, <br /> </span> Web Developer</h1>
      <div className="profileaction">
        <div className="connectwithprofile"><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me</AnchorLink></div>
        <div className="profileresume">My Resume</div>
      </div>
    </div>
  )
}

export default Profile