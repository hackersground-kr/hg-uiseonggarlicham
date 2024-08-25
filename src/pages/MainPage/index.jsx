import React,{useEffect} from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/index'

const Main = () => {
    const navigate = useNavigate()
    useEffect(function(){
        if (localStorage.getItem("refreshToken") == null){
            navigate("/login")
    }
    })
  return (
    <div>
        <Header/>
        <div className='banner'>
            <div className='button-box'>
                <div className='button'></div>
                <div className='button'></div>
                <div className='button'></div>
                <div className='button'></div>
            </div>
        </div>
    </div>
  )
}

export default Main