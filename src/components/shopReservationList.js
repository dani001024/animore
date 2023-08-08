import React from "react";
// import './ReservationList.css';
import "@popperjs/core";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Reservation.css';
import Table from './table';
import swal from 'sweetalert2';
import './CustomSwalStyle.css';
import './shopReservationList.css'


class ShopReservationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      rejectionReason: "", // 반려 사유 저장
    };
  }

  handleDetailsClick = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  handleApprovalClick = () => {
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

  handleRejectionClick = () => {
    swal.fire({
      title: "반려사유를 선택해주세요.",
      html: `
        <select id="dropdown">
          <option value="">-- 선택하세요 --</option>
          <option value="option1">임시휴무일로 인해 취소합니다.</option>
          <option value="option2">예약 중복으로인해 취소합니다.</option>
          <option value="직접입력">직접입력</option>
        </select>
        <div id="inputReasonWrapper" style="display: none;">
          <input
            type="text"
            id="inputReason"
            placeholder="사유를 입력해주세요."
          />
        </div>
      `,
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
      preConfirm: () => {
        const selectedValue = document.getElementById("dropdown").value;
        if (selectedValue === "직접입력") {
          const inputReason = document.getElementById("inputReason").value;
          return inputReason;
        } else {
          return selectedValue;
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const reason = result.value;
        this.setState({ rejectionReason: reason });
        // 반려 처리하는 로직 추가
        console.log("반려 사유:", reason);
      }
    });
  };

  render() {
    const className = this.props.page === 1 ? "page-one" : "page-two";
    const { showDetails } = this.state;
    return (
      <div className={`my-component ${className}`}>
        <div className="one">
          <p className="infromation">{this.props.date}</p>
          <p className="infromation">{this.props.shop}</p>
          <p className="infromation">{this.props.address}</p>
          <p className="infromation">{this.props.telephone}</p>
          <p className="infromation">
            <button className="inform_btn" onClick={this.handleDetailsClick}>
              {showDetails ? "닫기" : "상세보기"}
            </button>
          </p>
        </div>
        {showDetails && (
          <div>
            <Table />
            <div className="btnbox">
              <button className="agree" onClick={this.handleApprovalClick}>
                승인
              </button>
              <button className="reject" onClick={this.handleRejectionClick}>
                반려
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ShopReservationList;
