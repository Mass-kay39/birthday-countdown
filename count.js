 function countDown(){

let countdown = new Date('Dec 3, 2022  00:00:00').getTime();
let now = new Date().getTime();
let correct = countdown - now;
 let second = 1000
 let minute = second * 60
 let hour = minute * 60
 let day = hour * 24
  let textDay  = Math.floor(correct / day)
   let textHour  = Math.floor((correct % day) / hour)
   let textMinute = Math.floor((correct % hour) / minute)   
   let textSecond = Math.floor((correct % minute) / second)
 document.querySelector('.day').innerText  = textDay
 document.querySelector('.hour').innerText  = textHour
 document.querySelector('.minute').innerText  = textMinute
 document.querySelector('.second').innerText  = textSecond

 }
 setInterval(countDown, 1000)