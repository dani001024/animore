// 예약상세3
import React,{useState} from 'react';
import FinalPage from './finalPage';
import DateSelct from './dateSelect'
import { faCalendarDays  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock  } from "@fortawesome/free-solid-svg-icons";
import './selectPage.css';
import TimeSelect from './timeSelect';
import './timeSelect.css'

function SelectPage() {
  const [showFinalPage, setShowFinalPage] = useState(false);

  const handleRequestClick = () => {
    setShowFinalPage(true);
  };

  if (showFinalPage) {
    return <FinalPage />;
  }

    return (
      <div className='all'>
        <div className='main_S'>
          <div className='left'>
            <div className='top'>
              <FontAwesomeIcon icon={faCalendarDays} className='icon' />
              날짜선택
            </div>
            <DateSelct/>  
          </div>
          <div className='line'></div>
          <div className='right'>
            <div className='top'>
              <FontAwesomeIcon icon={faClock} className='icon' />
              시간선택
            </div>
            <TimeSelect/>
          </div>
        </div>
        <button className='request'onClick={handleRequestClick}>예약요청</button>
      </div>

    );
  }
  export default SelectPage;