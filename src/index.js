import {useState} from 'react';
import React from'react';
import './index.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {render} from 'react-dom';

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    }
    return <div>
        <Calendar onChange={onChange} value={date}/>
        {date.toString()}
        </div>;
};

render(<ReactCalendar/>, document.querySelector("#root"));
