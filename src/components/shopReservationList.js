import React ,{useState}from "react";
// import './ReservationList.css';
import "@popperjs/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reservation.css';
import Table from './table';
import swal from 'sweetalert2';
import './CustomSwalStyle.css';
import './shopReservationList.css'

function ShopReservationList(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [selectedDropdownValue, setSelectedDropdownValue] = useState("");
  const [inputReason, setInputReason] = useState("");

  const handleDetailsClick = () => {
    setShowDetails(prevShowDetails => !prevShowDetails);
  };

  const handleApprovalClick = () => {
    swal.fire({
      title: " ",
      text: "예약승인이 완료되었습니다.",
      confirmButtonText: "X",
      customClass: {
        container: "custom-container",
        popup: "custom-popup",
        title: "custom-title",
        htmlContainer: "custom-html-container",
        confirmButton: "custom-confirm-button",
      },
      position: "center",
      buttonsStyling: false,
    });
  };

  const handleRejectionClick = () => {
    swal.fire({
      title: "반려사유를 선택해주세요.",
      input: 'select',
      inputOptions: {
        option1: '임시휴무일로 인해 취소합니다.',
        option2: '예약 중복으로 인해 취소합니다.',
        직접입력: '직접입력',
      },
      inputPlaceholder: '-- 선택하세요 --',
      showCancelButton: true,
      confirmButtonText: '확인', // 커스텀한 확인 버튼 텍스트
      cancelButtonText: '취소', // 커스텀한 취소 버튼 텍스트
      cancelButtonColor: '#808080',  
      confirmButtonColor: 'pink'
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedValue = result.value;
        setSelectedDropdownValue(selectedValue);

        if (selectedValue === '직접입력') {
          swal.fire({
            title: '반려 사유를 입력해주세요.',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: '확인', // 커스텀한 확인 버튼 텍스트
            cancelButtonText: '취소', // 커스텀한 취소 버튼 텍스트
            cancelButtonColor: '#808080',
            confirmButtonColor: 'pink',
            width: '512px'
          }).then((inputResult) => {
            if (inputResult.isConfirmed) {
              const inputText = inputResult.value;
              setInputReason(inputText);

              // 반려 처리 및 사유 출력
              console.log('반려 사유:', inputText);
            }
          });
        } else {
          // 선택된 사유로 반려 처리
          console.log('반려 사유:', selectedValue);
        }
      }

    });
  };

  const className = props.page === 1 ? "page-one" : "page-two";

  return (
    <div className={`my-component ${className}`}>
      <div className="one">
        <p className="infromation">{props.startTime}</p>
        <p className="infromation">{props.petName}</p>
        <p className="infromation">{props.username}</p>
        <p className="infromation">{props.phone}</p>
        <p className="infromation">
          <button className="inform_btn" onClick={handleDetailsClick}>
            {showDetails ? "닫기" : "상세보기"}
          </button>
        </p>
      </div>
      {showDetails && (
        <div>
          <Table  page={2}/>
          <div className="btnbox">
            <button className="agree" onClick={handleApprovalClick}>
              승인
            </button>
            <button className="reject" onClick={handleRejectionClick}>
              반려
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopReservationList;