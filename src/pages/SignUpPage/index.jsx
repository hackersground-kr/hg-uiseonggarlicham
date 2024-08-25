import React from 'react'
import './style.css'
import SignUp from '../../components/SignUp/index'

const LoginPage = () => {
    return (
        <div className='login'>
                <div className='leftbox'>
                    <div className='imagebox'/>
                </div>
                <div className='rightbox'>
                    <div className='logincomp'>
                        <SignUp/>
                    </div>
                </div>
            </div>
    )
}

export default LoginPage