import React from 'react';

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function DisplayDate(props) {
  var date = new Date(props.date);

  var year = date.getFullYear();
  var month = MONTHS[date.getMonth()];
  var day = date.getDate();

  return (
    <span>{month} {day}, {year}</span>
  );
}

export default DisplayDate;
