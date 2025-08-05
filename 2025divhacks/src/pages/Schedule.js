import React from 'react';
import '../App.css';
import schedule from '../assets/schedule.png';

const Schedule = () => {
  return (
    <div className="schedule-page">
      <img src={schedule} alt="Schedule" className="schedule-image" />
      <div className="schedule-coming-soon">
{/*
      <iframe
        src="https://calendar.google.com/calendar/embed?src=689ffabbda38d13cf91b77e9803e0d386cf18b036e541f4f21fc5b54f5ef2fd8%40group.calendar.google.com&ctz=America%2FLos_Angeles&mode=WEEK"
        className="schedule-calendar-iframe"
        style={{ border: 0 }}
        width="800"
        height="600"
        frameBorder="0"
        scrolling="no"
        title="DivHacks Schedule Calendar"
      />
      
      */}
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSwZXe7_GqPrXb5fzInQx-qT7v28_yIj9eODOR79UORqCHRSeHFtWUWufOKmTEaSuVm8KgEbTuj2rk9/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
      </div>
    </div>
  );
};

export default Schedule;
