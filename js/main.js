
const secondHand = document.querySelector('.secondHand');
const minuteHand = document.querySelector('.minHand');
const hourHand = document.querySelector('.hourHand')

function setDate() {
    const now = new Date();
    
    // get position of second hand
    const seconds = now.getSeconds();
    const secondDeg = ((seconds / 60) * 360) + 87.5;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    
    // get minutes and calc position of minute hand
    const min = now.getMinutes();
    const minDeg = ((min / 60) * 360) + 87.5;
    minuteHand.style.transform = `rotate(${minDeg}deg)`;


    // get hours and calc position of Hour hand with minute adjustment
    const hours = now.getHours();
    const currentHour = (min / 60);
    const hourDeg = ((((hours + currentHour) % 12) / 12)* 360) + 87;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setDate, 1000);