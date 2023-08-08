// 예약상세3 - 시간선택
import React,{useState} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './timeSelect.css'

const TimeSelect = () => {
  const [isSelected, selectTime] = useState(Array(10).fill(false));

  const onClick = (index) => {
    const updatedSelected = Array(10).fill(false);
    updatedSelected[index] = true;
    selectTime(updatedSelected);
  };

  return (
    <div className="TimeButtonContainer">
      {isSelected.map((selected, index) => (
        <button
          key={index}
          className={`Timebtn ${selected ? 'selected-time' : 'Timebtn'}`}
          onClick={() => onClick(index)}
        >
          {index + 11}:00
        </button>
      ))}
    </div>
  );
};

export default TimeSelect;

// function TimeSelect() {
//   const [isSelected, selectTime] = useState(false);

//     const onClick = () => {
//       selectTime(prev => !prev); // isSelected 상태를 토글 (true -> false, false -> true)
//     };
  
  
//     return (
//       <div id='time'>
//         <div className='firstRow'>
//         <button className={`Timebtn ${isSelected ? 'selected-time' : 'Timebtn'}`}
//                 onClick={onClick}>11:00</button>
//         </div>
//         <div>
//         <button className='Timebtn'>12:00</button>
//         <button className='Timebtn'>13:00</button>
//         <button className='Timebtn'>14:00</button>
//         </div>
//         <div>
//         <button className='Timebtn'>15:00</button>
//         <button className='Timebtn'>16:00</button>
//         <button className='Timebtn'>17:00</button>
//         </div>
//         <div>
//         <button className='Timebtn'>18:00</button>
//         <button className='Timebtn'>19:00</button>
//         <button className='Timebtn'>20:00</button>
//         </div>


//       </div>
      
//     );

//   }
//   export default TimeSelect;
