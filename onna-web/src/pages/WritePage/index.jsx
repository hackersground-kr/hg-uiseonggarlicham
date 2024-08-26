import React from "react";
import './style.css';
import Header from '../../components/Header/index';
import Arrows from '../../assets/images/back-arrows.png';
import Pen from '../../assets/images/pen.png';
import Photo from '../../assets/images/photo.png'

const Write=()=>{
    return(
        <div>
            <Header/>
            <div className="everything">
            <a href="#"><img src={Arrows}/>뒤로가기</a>
            <input className="bottom-border" type="text" placeholder="행사 이름을 입력하세요"/>
            {/* <input type='text' placeholder='bottom border' class='bottom-border'/> */}
            <div className="element"> 
            <div className="photo">
                <img src={Photo}></img>
                <input type="file" accept="image/*"></input>
            </div>
            <div className="write">
                <div className="place">행사 장소</div>
                <input className="re-place" type="text" placeholder="행사 장소를 입력하세요"></input>
                <img className="pen" src={Pen}/>
                <div className="datetime">
                <div className="time">행사 기간</div>
                <input className="date" type="date"></input>
                <input className="date" type="date"></input>
                </div>
                <div className="mom">
                <div className="money">참가 비용</div>
                <input type="text" placeholder="참가 비용을 입력하새요"></input>
                <div className="W">₩</div>
                </div>
                <div className="story">
                <div className="detail">행사 내용</div>
                <textarea rows={7} cols={38} placeholder="행사의 상세 설명을 입력하세요"></textarea>
                </div>
                <div className="btn-cls">
                <div className="btn">글 작성 완료</div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Write;