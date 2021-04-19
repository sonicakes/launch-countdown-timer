// this code has been adapted from this example: https://www.w3schools.com/howto/howto_js_countdown.asp

// Set the date we're counting down to
var countDownDate = new Date("Jul 12, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with class="countdown"
  document.getElementById("day").innerHTML = "<div class='number'>" + days + "</div>" + " days";
  document.getElementById("hour").innerHTML = "<div class='number'>" + hours + "</div>" + " hours";
  document.getElementById("minute").innerHTML = "<div class='number'>" + minutes + "</div>" + " minutes";
  document.getElementById("second").innerHTML = "<div class='number'>" + seconds + "</div>" + " seconds";
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementsByClassName("countdown").innerHTML = "the countdown is finished!";
  }
}, 1000);