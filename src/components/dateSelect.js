import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./react-calendar-overrides.css";

function DateSelect() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar  calendarType={'US'}
        onChange={onChange}
        value={value}
        formatDay={(locale, date) =>
        date.toLocaleString('en', { day: 'numeric' })
        }
        next2Label={null}
        prev2Label={null}
      />
    </div>
  );
}
export default DateSelect;