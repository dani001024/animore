import React ,{useState}from "react";
import './ReservationList.css';
import "@popperjs/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reservation.css';
import Table from './table';
import axios from "axios";

function ReservationList(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [data, setData] = useState({});

  const handleDetailsClick = () => {
    setShowDetails(prevState => !prevState);

    //  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6NCwiZXhwIjoxNjkyNzYxMDA0LCJ1c2VybmFtZSI6Imdvb2dsZV8xMDg1OTYwMzM2NDczMDk5ODQ3ODUifQ.uBYZMFGYe2wq6w3LzO1TPdmg6evnMtEZGQHmSszo8yaqUtGeraBjeA-YQepR5pQn1Mi_IqkMWPOFGdMTI47EFA'; // 토큰 추가

    //   axios({
    //     method: 'GET',
    //     url: '/booking/details/33',
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   })
    //     .then(response => {
    //       setData(response.data.result);
    //       console.log('성공:', response.data);
    //     })
    //     .catch(error => {
    //       console.error('에러 발생:', error);
    //     });
  };

  const className = props.page === 1 ? 'page-one' : 'page-two';

  return (
    <div className={`my-component ${className}`}>
      <div className="one">
        <p className="infromation">{props.date}</p>
        <p className="infromation">{props.shop}</p>
        <p className="infromation">{props.address}</p>
        <p className="infromation">{props.telephone}</p>
        <p className="infromation">
          <button className="inform_btn" onClick={handleDetailsClick}>
            {showDetails ? '닫기' : '상세보기'}
          </button>
        </p>
      </div>
      {showDetails && <Table page={1} showDetails={showDetails} reservationId={props.reservationId} />}
    </div>
  );
}

export default ReservationList;
