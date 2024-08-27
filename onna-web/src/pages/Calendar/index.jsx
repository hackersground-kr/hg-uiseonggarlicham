import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import './style.css';// 캘린더 스타일을 위해 필요
import Header from '../../components/Header/index';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate); // 여기서 newDate를 그대로 사용
  };

  return (
    <div>
        <div className='back'>
       <Header/>
      <Calendar onChange={onChange} value={date} className="cal"/></div>

      {/* <p>선택된 날짜: {date.toDateString()}</p> */}
    </div>
  );

  //민성이에게..일단 달력 뷰는 짜놓았어....
  
  //그리고 content 가 라우터 연결이 안되더라;;;;;;;
}

export default CalendarComponent;
