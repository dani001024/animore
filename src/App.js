// eslint-disable-next-line 
import React, {Component,useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from "axios";
import Reservation from './components/Reservation'
import ReservationList from './components/ReservaionList';
import Menubar from './components/menubar';
import ManagerMenubar from './components/managerMenubar';
import FinalPage from './components/finalPage';
import DateSelect from './components/dateSelect';
import SelectPage from './components/selectPage';
import ReserveListTotal from './components/reserveListTotal';
import Adminpagemenu from './components/adminPageMenu';
import WaitingList from './components/waitingList';
import ManageSys from './components/manageSys';
import api from "./api"; 



const table = {
  'name':'김미소',
  'pet':'달구',
  'address':'부산광역시',
  'telephone':'010-0000-0000',
  'gender': '여(중성화)',
  'species' : '믹스견(장모종)'
}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // API 호출을 수행하는 함수를 만듭니다.
    const fetchData = async () => {
      try {
        const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MSwiZXhwIjoxNjkyNzg1NzE4LCJ1c2VybmFtZSI6Imtha2FvXzI4OTgyMDI5NDQifQ.yFK4TqoT7I2ckMp-pQAytO5vg_IjPr1A3co2iAZMU1OJFkt1H0J2ZxGFSP4Tm-2hnwmvo1OljdxXJCyrHq25Tw"; // 사용자의 인증 토큰
        const response = await api.get("/data", {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 추가
          },
        });
        setData(response.data); // 받아온 데이터를 state에 저장
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // 함수 호출하여 API 데이터 가져오기
  }, []);
  return (
    <div id = 'frame' >
        <div>
        {data.map((result) => (
          <li key={result.username}>{result.name}</li>
        ))}
        </div>

        <Menubar/>
        <Reservation
        name ={table.name}
        pet ={table.pet}
        address = {table.address}
        telephone = {table.telephone}
        gender = {table.gender}
        species = {table.species}/>
        <FinalPage/>
        <SelectPage/>
        <ReserveListTotal/>


        <ManageSys/>
       

    </div>
  );
 }

export default App;
