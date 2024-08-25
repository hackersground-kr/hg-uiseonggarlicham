import React,{useEffect} from 'react'
import './style.css'
import SignUp from '../../components/SignUp/index'
import { useNavigate } from 'react-router-dom'

const SignUP = () => {
    localStorage.setItem("a","1")
    localStorage.setItem("refreshToken","1")
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
                        <SignUp/>
                    </div>
                </div>
            </div>
    )
}

export default SignUP