import React from 'react'
import './style.css'
import Login from '../../components/Login/index'

const LoginPage = () => {
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