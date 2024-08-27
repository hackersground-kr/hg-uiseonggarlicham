import React from 'react'
import logo from '../../assets/images/logo.svg'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const gotohome = () => {
    navigate("/main")
  }

  return (
    <div className='header'>
            <div onClick={gotohome} className='logo'><img src={logo} alt='logo'></img></div>
            <div className='rightbox'>
                <div className='profile'></div>
            </div>
    </div>
  )
}

export default Header