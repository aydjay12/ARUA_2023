var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var dd = document.getElementById("dd");
var hh = document.getElementById("hh");
var mm = document.getElementById("mm");
var ss = document.getElementById("ss");

var day_dot = document.querySelector(".day_dot");
var hr_dot = document.querySelector(".hr_dot");
var min_dot = document.querySelector(".min_dot");
var sec_dot = document.querySelector(".sec_dot");

var endDate = "11/19/2023 00:00:00";

var x = setInterval(function () {
  var now = new Date(endDate).getTime();
  var countDown = new Date().getTime();
  var distance = now - countDown;
  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((distance % (1000 * 60)) / 1000);

  days.innerHTML = d + "<br><span>Days<span>";
  hours.innerHTML = h + "<br><span>Hour<span>";
  minutes.innerHTML = m + "<br><span>Minutes<span>";
  seconds.innerHTML = s + "<br><span>Seconds<span>";

  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
  // 360deg / 365dys = 0.986
  hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
  // 360deg / 24hrs = 15
  min_dot.style.transform = `rotateZ(${m * 6}deg)`;
  // 360deg / 60minutes = 6
  sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
  // 360deg / 60seconds = 6

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".circle1").style.display = "none";
    document.querySelector(".circle2").style.display = "none";
    document.querySelector(".circle3").style.display = "none";
    document.querySelector(".circle4").style.display = "none";
    document.querySelector(".newEvent").style.display = "block";
  }
});
