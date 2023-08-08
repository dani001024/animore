import React, { Component } from "react";
import "@popperjs/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectPage from './selectPage';
import './Reservation.css';
import Radio from './radio';
import RadioGroup from './radioGroup';

class Reservation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
         showSelectPage: false
       };
    }
    handleNextClick = () => {
        this.setState({ showSelectPage: true });
      };
    render(){
        const { name, pet, address, telephone, gender, species } = this.props;
        const { showSelectPage } = this.state;
    
        if (showSelectPage) {
          return <SelectPage/>;
        }

        return(
            <div className="main_R">
                <div className="ment">
                    <p className="detail">예약상세</p>
                    <a className="save" href="#">저장내용불러오기</a>
                </div>
                <div className="table_box">
                    <table className="table tablee" >
                            <thead>
                                <tr>
                                    <th scope="col" style={{background:'#F5F5F5'}}>반려동물 이름</th>
                                    <th scope="col">{this.props.pet}</th>
                                    <th  scope="col" style={{background:'#F5F5F5'}}>이름</th>
                                    <th scope="col">{this.props.name}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th  scope="row" style={{background:'#F5F5F5'}}>반려동물 종류</th>
                                    <td>{this.props.species}</td>
                                    <td  style={{background:'#F5F5F5'}}>전화번호</td>
                                    <td>{this.props.telephone}</td>
                                </tr>
                                <tr>
                                    <th  scope="row" style={{background:'#F5F5F5'}}>반려동물 성별</th>
                                    <td>{this.props.gender}</td>
                                    <td  style={{background:'#F5F5F5'}}>주소</td>
                                    <td>{this.props.address}</td>
                                </tr>
                                <tr>
                                    <th  scope="row" rowSpan="3" style={{background:'#F5F5F5'}}>메뉴선택</th>
                                    <td colSpan="3">                                    
                                        <tr className="radio_row">    
                                            <RadioGroup>
                                                <Radio name="species" value="small" >중,소형견</Radio>
                                                <Radio name="species" value="big">대형견</Radio>
                                            </RadioGroup>
                                        </tr>
                                            
                                    </td>    
                                </tr>

                                <tr>
                                    <td colSpan="3">
                                    <RadioGroup>
                                        <Radio name="cut" value="1" >가위컷</Radio>
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
                                        <Radio name="bath" value="bagic" >목욕</Radio>
                                        <Radio name="bath" value="healing">힐링스파</Radio>
                                        <Radio name="bath" value="carbonic acid">탄산스파</Radio>
                                    </RadioGroup>
                                    </td>                                    
                                </tr>
                            </tbody>
                    </table>  
                </div>
                
                <button className="next"  onClick={this.handleNextClick}>다음</button>
            </div>

        )
    }
        
}


export default Reservation;

// function ReservationRequestBtn(){
//     return(
//         <select class="form-select" aria-label="Default select example">
//             <option selected>첫 방문이에요! 방문해서 상담할게요</option>
//             <option value="1">낯을 많이 가려요! 같이 보낸 애착 장난감과 함께 진행해주세요</option>
//             <option value="2">끝나면 바로 연락 주세요!</option>
//             <input value="3"></input>
//         </select>
//     )
// }