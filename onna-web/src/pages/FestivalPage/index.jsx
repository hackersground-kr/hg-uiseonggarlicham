import React from 'react';
import './style.css';
import Header from '../../components/Header/index';

const Festival = () => {
    const events = [
        {
            img: 'https://worldcf.co.kr/upload/event/44/event-0.613379001721887723.jpg',
            title: '2024 의성 썸머 뮤직 페스타',
            date: '2024.8.31',
        },
        {
            img: 'https://cdn.civilreporter.co.kr/news/photo/202407/385144_398506_3014.jpg',
            title: '진호의 책방',
            date: '2024.8.20',
        },
        {
            img: 'https://www.jungle.co.kr/image/fac4da9949609816304a40bf',
            title: '청년 IT개발자 경진대회',
            date: '2024.8.25-27',
        },
        {
            img: 'https://www.usc.go.kr/upload/board/20240528/D4D5446234CE4955B281B844C92793D8.jpg',
            title: '2024 의성군 일자리 박람회',
            date: '2024.5.28',
        },
        {
            img: 'https://localsegye.co.kr/news/data/20240516/p1065579395001311_368_h2.jpg',
            title: '의성종합상인회 동행축제',
            date: '2024.5.18-26',
        },
        {
            img: 'https://www.shinailbo.co.kr/news/photo/202405/1874333_1010132_333.jpg',
            title: '동행축제 2024',
            date: '2024.5.15-5.26',
        }
    ];

    return (
        <div>
            <Header />
            <div className='grid-container'>
                {events.map((event, index) => (
                    <div key={index} className='grid-item'>
                        <img src={event.img} alt={event.title} />
                        <div className='txt'>
                            {event.title}<br />
                            <span>{event.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Festival;
