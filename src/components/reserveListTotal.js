//예약내역1
import React, { Component } from "react";
import ReservationList from "./ReservaionList";
import './reserveListTotal.css';

const list = {
    'date':'07.04. 13:00',
    'shop':'봉봉살롱',
    'address':'부산광역시',
    'telephone':'010-0000-0000'
}

function ReserveListTotal() {
    return (
      <div className="main_T">
        <p className="listTitle">예약내역</p> 
        <div className="rowlinePage1"></div>  
        <div className="colPage1">
            <p className="tile">예약일자</p>
            <p className="tile">매장명</p>
            <p className="tile">매장 주소</p>
            <p className="tile">매장 연락처</p>
            <p className="tile">예약상세</p>
        </div>  
        <ReservationList page={1}
        date ={list.date}
        shop = {list.shop}
        address = {list.address}
        telephone = {list.telephone}
        />
        <ReservationList  page={1}
        date ={list.date}
        shop = {list.shop}
        address = {list.address}
        telephone = {list.telephone}
        />
        <ReservationList  page={1}
        date ={list.date}
        shop = {list.shop}
        address = {list.address}
        telephone = {list.telephone}
        />
        <ReservationList  page={1}
        date ={list.date}
        shop = {list.shop}
        address = {list.address}
        telephone = {list.telephone}
        />
        <ReservationList  page={1}
        date ={list.date}
        shop = {list.shop}
        address = {list.address}
        telephone = {list.telephone}
        />
        <ReservationList  page={1}
        date ={list.date}
        shop = {list.shop}
        address = {list.address}
        telephone = {list.telephone}
        />
      </div>
    );
   }
  
  export default ReserveListTotal;