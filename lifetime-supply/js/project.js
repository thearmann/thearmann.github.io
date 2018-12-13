document.querySelector('#click-me').onclick = calculate;




function calculate (){

let plan = document.querySelector('#max-age').value;
let age = document.querySelector('#age').value;
let amount = document.querySelector('#num-per-day').value;

let item = document.querySelector('#item').value;

let yearsleft = plan - age;
let daysleft = parseInt(yearsleft) * 365;
let total = parseInt(daysleft) * parseInt(amount); 


document.querySelector('#solution').innerHTML = total;
document.querySelector('#drink').innerHTML = item;



}