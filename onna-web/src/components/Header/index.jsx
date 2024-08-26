import React from 'react'
import logo from '../../assets/images/logo.svg'
import './style.css'

const index = () => {
  return (
    <div className='header'>
            <div className='logo'><img src={logo} alt='logo'></img></div>
            <div className='rightbox'>
                <div className='profile'></div>
            </div>
    </div>
  )
}

export default index