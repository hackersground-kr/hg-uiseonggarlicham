import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header/index'
import calender from '../../assets/images/calender.svg'
import firecracker from '../../assets/images/firecracker.svg'
import add from '../../assets/images/add.svg'
import man from '../../assets/images/man.svg'
const Main = () => {
    const navigate = useNavigate()

    const gotoevent = () =>{
        navigate("/event")
    }
    const gotowrite = () =>{
        navigate("/write")
    }
    const gotologin = () =>{
        navigate("/login")
    }
  return (
    <div>
        <Header/>
        <div className='banner'>
            <div className='button-box'>
                <div className='button'>
                    <img src={calender} alt='캘린더'/>
                    <p>일정 확인</p>
                </div>
                <div className='button' onClick={gotoevent}>
                    <img src={firecracker} alt='폭죽'/>
                    <p>지역 행사</p>
                </div>
                <div className='button' onClick={gotowrite}>
                    <img src={add} alt='추가'/>
                    <p>행사 추가</p>
                </div>
                <div className='button' onClick={gotologin}>
                    <img src={man} alt='사람'/>
                    <p style={{whiteSpace:"nowrap"}}>로그인/회원가입</p>
                </div>
            </div>
            <div className='main_banner'>
                <p className='main_banner_name'>의성 낙단보</p>
                <p className='main_banner_sub'>아름다운 밤하늘을 즐기고 싶으시다면</p>
            </div>
        </div>
    </div>
  )
}

export default Main