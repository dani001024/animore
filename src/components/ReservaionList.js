import React from "react";
import './ReservationList.css';
import "@popperjs/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reservation.css';
import Table from './table';

class ReservationList extends React.Component{
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
        const className = this.props.page === 1 ? 'page-one' : 'page-two';
        //페이지1=고객 페이지2=업체 즉
        const { showDetails } = this.state;
        return(
            <div className={`my-component ${className}`}>
                <div className="one">
                <p className="infromation">{this.props.date}</p>
                <p className="infromation">{this.props.shop}</p>
                <p className="infromation">{this.props.address}</p>
                <p className="infromation">{this.props.telephone}</p>
                <p className="infromation"><button className="inform_btn"  onClick={this.handleDetailsClick}>{showDetails ? '닫기' : '상세보기'}</button></p>                
                </div>
                {showDetails && (
                  <Table page={2}/>
             
      )}
            </div>
            
        )
    
    }
        
}
export default ReservationList;