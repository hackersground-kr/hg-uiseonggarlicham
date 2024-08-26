import React from "react";
import './style.css';
import Arrows from '../../assets/images/back-arrows.png';
import Pen from '../../assets/images/pen.png';

const Write=()=>{
    return(
        <div>
            <Headers/>
            <a href="#"><img src={Arrows}/>뒤로가기</a>
            <input className="title" type="text" placeholder="행사 이름을 입력하세요"/>
            <div className="write">
                <div className="place">행사 장소</div>
                <input type="text" placeholder="행사 장소를 입력하세요"><img src={Pen}></img></input>
                <div className="time">행사 기간</div>
                <input type="date" placeholder="행사 시작 날찌를 입력하세요"></input>
                <input type="date" placeholder="행사 마감 날짜를 입력하세요"></input>
                <div className="money">참가 비용</div>
                <input type="text" placeholder="참가 비용을 입력하새요">₩</input>
                <div className="detail">행사 내용</div>
                <input type="text" placeholder="행사의 상세 설명을 입력하세요" />
            </div>

            <button className="done" >글 작성 완료</button>
        </div>
    )
}

export default Write;