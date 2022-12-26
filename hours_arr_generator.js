//===================
// Generate an array of hours per day in 1-hour increments with a 12-hour format
//==================

let hour;
let strTime;
const deyHours = [];

function arr(){
  for (let i = 0; i <= 24; i++) {

    
    hour = i
    const ampm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12;
    hour = hour ? hour : 12;

    strTime = hour + ':' + '00' + ' ' + ampm;

    deyHours.push(strTime);

  }
  return deyHours;
}

arr();

console.log('deyHours', deyHours);