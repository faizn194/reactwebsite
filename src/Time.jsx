import React from 'react';
let time = new Date().toLocaleTimeString();
function Time() {
    return <p>current time is {time}</p>
};
export default Time;