var countDownDate = new Date("Feb 7, 2025 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
     if (distance < 0) {
     clearInterval(x);
     document.getElementById("d-flex")
     	document.getElementById("count").innerHTML = "Eid Mubarak";     	
     }else{
     	document.getElementById("count").innerHTML = "Ramadhan Mubarak";
     	} 
}, 1000);
