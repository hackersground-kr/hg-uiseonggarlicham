import React, { useEffect } from 'react'
import './style.css'
import Login from '../../components/Login/index'
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    useEffect(function(){
        if (localStorage.getItem("refreshToken") != null){
            navigate("/main")
    }
    })
    return (
        <div className='login'>
                <div className='leftbox'>
                    <div className='imagebox'/>
                </div>
                <div className='rightbox'>
                    <div className='logincomp'>
                        <Login/>
                    </div>
                </div>
            </div>
    )
}

export default LoginPage