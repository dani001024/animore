import React, { useState,useEffect } from "react";
import "@popperjs/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reservation.css';
import Radio from './radio';
import RadioGroup from './radioGroup';
import './table.css';
import axios from "axios";

function Table ({ showDetails }){
    const [fetchedData, setFetchedData] = useState(false);
    const [tableData, setTableData] = useState({});
  
    useEffect(() => {
        if (showDetails && !fetchedData) {
          // 데이터 요청
          const reservationId = 11;
          const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MiwiZXhwIjoxNjkyNzg1ODEzLCJ1c2VybmFtZSI6Im5hdmVyX1BPbXlOMlNCSndaUmNXbXNUak05YWR6WnNrQ1Qta1Jxd0lick1STHI2LWsifQ.ndm6Q9GkjJZiwkXZae8VV5QDP7ydWp7YBN-ECVyQDWBe0OTwbecCkA11ebrqrrgEw-zqK1p0JHl16F1yz8Pu-g'; // 토큰 추가
          axios({
            method: 'GET',
            url: '/booking/details/{reservationId}',
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
            .then(response => {
              setTableData(response.data);
              setFetchedData(true);
              console.log('성공:', response.data);
            })
            .catch(error => {
              console.error('에러 발생:', error);
            });
        }
      }, [showDetails, fetchedData]);


        // const className = this.props.page === 1 ? 'page-one' : 'page-two';
        //페이지1=고객 페이지2=업체 즉
        return(
                <div className="table_box my-component ${className}">
                    <table className="table tablee" >
                            <thead>
                                <tr>
                                    <th scope="col" style={{background:'#F5F5F5'}}>반려동물 이름</th>
                                    <th scope="col">콩수니</th>
                                    <th  scope="col" style={{background:'#F5F5F5'}}>이름</th>
                                    <th scope="col">김예진</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th  scope="row" style={{background:'#F5F5F5'}}>반려동물 종류</th>
                                    <td>장모종</td>
                                    <td  style={{background:'#F5F5F5'}}>전화번호</td>
                                    <td>010-xxxx-xxxx</td>
                                </tr>
                                <tr>
                                    <th  scope="row" style={{background:'#F5F5F5'}}>반려동물 성별</th>
                                    <td>암컷</td>
                                    <td  style={{background:'#F5F5F5'}}>주소</td>
                                    <td>부산시 000</td>
                                </tr>
                                <tr>
                                    <th  scope="row" rowSpan="3" style={{background:'#F5F5F5'}}>메뉴선택</th>
                                    <td colSpan="3">                                    
                                        <tr className="radio_row">    
                                            <RadioGroup>
                                                <Radio name="species" value="small"defaultChecked >중,소형견</Radio>
                                                <Radio name="species" value="big">대형견</Radio>
                                            </RadioGroup>
                                        </tr>
                                            
                                    </td>    
                                </tr>

                                <tr>
                                    <td colSpan="3">
                                    <RadioGroup>
                                        <Radio name="cut" value="1"defaultChecked >가위컷</Radio>
                                        <Radio name="cut" value="2">기계컷</Radio>
                                        <Radio name="cut" value="3">스포팅</Radio>
                                        <Radio name="cut" value="4" >클리핑</Radio>
                                        <Radio name="cut" value="5" >부분미용</Radio>
                                    </RadioGroup>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="3">
                                    <RadioGroup>
                                        <Radio name="bath" value="bagic" defaultChecked>목욕</Radio>
                                        <Radio name="bath" value="healing">힐링스파</Radio>
                                        <Radio name="bath" value="carbonic acid">탄산스파</Radio>
                                    </RadioGroup>
                                    </td>                                    
                                </tr>
                            </tbody>
                    </table>  
                </div>

        )
    
        
}


export default Table;