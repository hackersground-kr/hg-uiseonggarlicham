import React,{useEffect} from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

const Main = () => {
    const navigate = useNavigate()
    useEffect(function(){
        if (localStorage.getItem("refreshToken") == null){
            navigate("/login")
    }
    })
  return (
    <div>
        <div className='header'>
            <div className='logo'><img src={logo} alt='logo'></img></div>
            <div className='rightbox'>
                <div className='search'></div>
                <div className='profile'></div>
            </div>
            
        </div>
    </div>
  )
}

export default Main