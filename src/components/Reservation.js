import React, { useState, } from "react";
import "@popperjs/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectPage from './selectPage';
import './Reservation.css';
import Radio from './radio';
import RadioGroup from './radioGroup';
import axios from "axios";

function Reservation({ props }) {
    const [data, setData] = useState({});
    const [showDetails, setShowDetails] = useState(false);
    const [showSelectPage, setShowSelectPage] = useState(false);
    const [selectedSpecies, setSelectedSpecies] = useState('');
    const [selectedCut, setSelectedCut] = useState('');
    const [selectedBath, setSelectedBath] = useState('');


    const handleSpeciesChange = (event) => {
        setSelectedSpecies(event.target.value);
    };

    const handleCutChange = (event) => {
        setSelectedCut(event.target.value);
    };

    const handleBathChange = (event) => {
        setSelectedBath(event.target.value);
    };

    const handleNextClick = () => {
        setShowSelectPage(true);

        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MiwiZXhwIjoxNjkyNzg1ODEzLCJ1c2VybmFtZSI6Im5hdmVyX1BPbXlOMlNCSndaUmNXbXNUak05YWR6WnNrQ1Qta1Jxd0lick1STHI2LWsifQ.ndm6Q9GkjJZiwkXZae8VV5QDP7ydWp7YBN-ECVyQDWBe0OTwbecCkA11ebrqrrgEw-zqK1p0JHl16F1yz8Pu-g';
        axios({
            method: 'POST',
            url: '/create/booking',
            headers: {
                Authorization: `Bearer ${token}`, // Bearer 토큰을 "Authorization" 헤더에 추가
                ContentType: 'application/json' 
            },
            data: {
                "storeId" :1,
                "dogSize": "LARGE",
                "cutStyle": "SCISSORS_CUT",
                "bathStyle": "BATH"
            }

        
        })
            .then(response => {
                setData(response.data);
                setShowDetails(true);
                console.log('성공:');

            })
            .catch(error => {
                console.error('에러 발생:', error.response);
            });
    };

    const handleShowDetails = () => {

        // 데이터 요청
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MiwiZXhwIjoxNjkyNzg1ODEzLCJ1c2VybmFtZSI6Im5hdmVyX1BPbXlOMlNCSndaUmNXbXNUak05YWR6WnNrQ1Qta1Jxd0lick1STHI2LWsifQ.ndm6Q9GkjJZiwkXZae8VV5QDP7ydWp7YBN-ECVyQDWBe0OTwbecCkA11ebrqrrgEw-zqK1p0JHl16F1yz8Pu-g';
        axios({
            method: 'GET',
            url: '/userInfo',
            headers: {
                Authorization: `Bearer ${token}` // Bearer 토큰을 "Authorization" 헤더에 추가
            }
        })
            .then(response => {
                setData(response.data);
                setShowDetails(true);
                console.log('성공:', response.data);

            })
            .catch(error => {
                console.error('에러 발생:', error);
            });
            
    };


    return (
        <div className="main_R">

            <div className="ment">
                <p className="detail">예약상세</p>
                <a className="save" href="#" onClick={handleShowDetails}>저장내용불러오기</a>
            </div>

            <div className="table_box">
                <table className="table tablee"  >
                    <thead>
                        <tr>
                            <th scope="col" style={{ background: '#F5F5F5', width: 213 }}>반려동물 이름</th>
                            <th scope="col" style={{ width: 277 }}>{showDetails && (<p>{data.result.petName}</p>)}</th>
                            <th scope="col" style={{ background: '#F5F5F5', width: 344 }}>이름</th>
                            <th scope="col" style={{ width: 277 }}>{showDetails && (<p>{data.result.username}</p>)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" style={{ background: '#F5F5F5' }}>반려동물 종류</th>
                            <td>{showDetails && (<p>{data.result.petType}</p>)}</td>
                            <td style={{ background: '#F5F5F5' }}>전화번호</td>
                            <td>{showDetails && (<p>{data.result.telephone}</p>)}</td>
                        </tr>
                        <tr>
                            <th scope="row" style={{ background: '#F5F5F5' }}>반려동물 성별</th>
                            <td>{showDetails && (<p>{data.result.petGender}</p>)}</td>
                            <td style={{ background: '#F5F5F5' }}>주소</td>
                            <td>{showDetails && (<p>{data.result.address}</p>)}</td>
                        </tr>
                        <tr>
                            <th scope="row" rowSpan="3" style={{ background: '#F5F5F5' }}>메뉴선택</th>
                            <td colSpan="3">

                                <RadioGroup>
                                    <Radio name="dogSize" value="MEDIUM" onChange={handleSpeciesChange}>중,소형견</Radio>
                                    <Radio name="dogSize" value="LARGE" onChange={handleSpeciesChange}>대형견</Radio>
                                </RadioGroup>


                            </td>
                        </tr>

                        <tr>
                            <td colSpan="3">
                                <RadioGroup>
                                    <Radio name="cutStyle" value="SCISSORS_CUT" onChange={handleCutChange}>가위컷</Radio>
                                    <Radio name="cutStyle" value="MACHINE_CUT"onChange={handleCutChange}>기계컷</Radio>
                                    <Radio name="cutStyle" value="SPOTTING_CUT"onChange={handleCutChange}>스포팅</Radio>
                                    <Radio name="cutStyle" value="CLIPPING_CUT" onChange={handleCutChange}>클리핑</Radio>
                                    <Radio name="cutStyle" value="PARTICAL_CUT" onChange={handleCutChange}>부분미용</Radio>
                                </RadioGroup>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="3">
                                <RadioGroup>
                                    <Radio name="bathStyle" value="BATH"onChange={handleBathChange} >목욕</Radio>
                                    <Radio name="bathStyle" value="HEALING"onChange={handleBathChange}>힐링스파</Radio>
                                    <Radio name="bathStyle" value="CARBONATED" onChange={handleBathChange}>탄산스파</Radio>
                                </RadioGroup>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <button className="next" onClick={handleNextClick} >다음</button>
        </div>

    );
}

export default Reservation;
