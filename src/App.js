// eslint-disable-next-line 
import React, {Component,useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import axios from "axios";
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
import axios from 'axios';


function App() {



  return (
    <div id = 'frame' >      
        <Menubar/>
        <Reservation/>
        <FinalPage/>
        <SelectPage/>
        <ReserveListTotal/>


        <ManageSys/>


    </div>
  );
 }

export default App;