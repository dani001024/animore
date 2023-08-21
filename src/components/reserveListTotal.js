//예약내역1
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReservationList from "./ReservaionList";
import './reserveListTotal.css';


function ReserveListTotal() {
  const [data, setData] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [fetchedData, setFetchedData] = useState(false); // 상태 추가

  useEffect(() => {
    if (!fetchedData) {
      // fetchedData 상태가 false일 때만 요청 보냄 (새로고침 할때)
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6NCwiZXhwIjoxNjkyNzYxMDA0LCJ1c2VybmFtZSI6Imdvb2dsZV8xMDg1OTYwMzM2NDczMDk5ODQ3ODUifQ.uBYZMFGYe2wq6w3LzO1TPdmg6evnMtEZGQHmSszo8yaqUtGeraBjeA-YQepR5pQn1Mi_IqkMWPOFGdMTI47EFA'; // 토큰 추가

      axios({
        method: 'GET',
        url: '/my/booking/visit',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          setData(response.data);
          setShowDetails(true);
          setFetchedData(true); // fetchedData 상태를 true로 변경
          console.log('성공:', response.data);
        })
        .catch(error => {
          console.error('에러 발생:', error);
        });
    }
  }, [fetchedData]);

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
      <div>
        {data.result && data.result.map((item, index) => (
          <ReservationList
            key={index}
            page={1}
            date={item.startTime}
            shop={item.storeName}
            address={item.storeLocation}
            telephone={item.storeNumber}
            reservationId={item.reservationId}
          />
        ))}
      </div>
    </div>
  );
}

export default ReserveListTotal;
