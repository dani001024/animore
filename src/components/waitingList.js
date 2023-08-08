import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ReservationList.css';
import './watingList.css';
import "@popperjs/core";
import ShopReservationList from "./shopReservationList"; 


const waitinglist = {
    'date':'07.04. 13:00',
    'shop':'봉봉살롱',
    'address':'부산광역시',
    'telephone':'010-0000-0000'
}

class WaitingList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          showDetails: false
        };
      }
    handleDetailsClick = () => {
        this.setState((prevState) => ({
          showDetails: !prevState.showDetails
        }));
      };
    render(){
        return(
            <div className="wationgBox">
                <div className="waiting">예약요청</div>
                <div className="rowline"></div>  
                <div className="colPage2">
                    <p className="tile title1">예약일자</p>
                    <p className="tile">반려동물이름</p>
                    <p className="tile">보호자 이름</p>
                    <p className="tile">보호자 연락처</p>
                    <p className="tile title5">예약상세</p>
                </div>
                <div>
                  <ShopReservationList 
                date ={waitinglist.date}
                shop = {waitinglist.shop}
                address = {waitinglist.address}
                telephone = {waitinglist.telephone}
                />
                <ShopReservationList 
                date ={waitinglist.date}
                shop = {waitinglist.shop}
                address = {waitinglist.address}
                telephone = {waitinglist.telephone}
                />
                <ShopReservationList 
                date ={waitinglist.date}
                shop = {waitinglist.shop}
                address = {waitinglist.address}
                telephone = {waitinglist.telephone}
                />
                <ShopReservationList 
                date ={waitinglist.date}
                shop = {waitinglist.shop}
                address = {waitinglist.address}
                telephone = {waitinglist.telephone}
                />
                <ShopReservationList 
                date ={waitinglist.date}
                shop = {waitinglist.shop}
                address = {waitinglist.address}
                telephone = {waitinglist.telephone}
                />
                <ShopReservationList 
                date ={waitinglist.date}
                shop = {waitinglist.shop}
                address = {waitinglist.address}
                telephone = {waitinglist.telephone}
                />
                </div> 
                

            </div>           
        )
    
    }
        
}
export default WaitingList;


