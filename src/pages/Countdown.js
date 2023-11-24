import React, { useState, useEffect } from "react";
import "../styles/Livestream.css";

function CountdownTimer() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const dd = document.getElementById("dd");
    const hh = document.getElementById("hh");
    const mm = document.getElementById("mm");
    const ss = document.getElementById("ss");

    const dayDot = document.querySelector(".day_dot");
    const hrDot = document.querySelector(".hr_dot");
    const minDot = document.querySelector(".min_dot");
    const secDot = document.querySelector(".sec_dot");

    const endDate = "11/19/2024 00:00:00";

    const updateCountdown = () => {
      const now = new Date().getTime();
      const countDown = new Date(endDate).getTime();
      const distance = countDown - now;
      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(d < 10 ? `0${d}` : d.toString());
      setHours(h < 10 ? `0${h}` : h.toString());
      setMinutes(m < 10 ? `0${m}` : m.toString());
      setSeconds(s < 10 ? `0${s}` : s.toString());

      dd.style.strokeDashoffset = 440 - (440 * d) / 365;
      hh.style.strokeDashoffset = 440 - (440 * h) / 24;
      mm.style.strokeDashoffset = 440 - (440 * m) / 60;
      ss.style.strokeDashoffset = 440 - (440 * s) / 60;

      dayDot.style.transform = `rotateZ(${d * 0.986}deg)`;
      hrDot.style.transform = `rotateZ(${h * 15}deg)`;
      minDot.style.transform = `rotateZ(${m * 6}deg)`;
      secDot.style.transform = `rotateZ(${s * 6}deg)`;

      if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".circle1").style.display = "none";
        document.querySelector(".circle2").style.display = "none";
        document.querySelector(".circle3").style.display = "none";
        document.querySelector(".circle4").style.display = "none";
        document.querySelector(".newEvent").style.display = "block";
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="comments" id="time">
      <div className="circle circle1">
        <div className="dots day_dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="dd"></circle>
        </svg>
        <div id="days">
          {days} <br />
          <span>Days</span>
        </div>
      </div>

      <div className="circle circle2">
        <div className="dots hr_dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="hh"></circle>
        </svg>
        <div id="hours">
          {hours} <br />
          <span>Hours</span>
        </div>
      </div>

      <div className="circle circle3">
        <div className="dots min_dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="mm"></circle>
        </svg>
        <div id="minutes">
          {minutes} <br />
          <span>Minutes</span>
        </div>
      </div>

      <div className="circle circle4">
        <div className="dots sec_dot"></div>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70" id="ss"></circle>
        </svg>
        <div id="seconds">
          {seconds} <br />
          <span>Seconds</span>
        </div>
      </div>

      <h2 className="newEvent">
        19th of November 2024
        <br />
        <span>Event has Begun</span>
      </h2>
    </section>
  );
}

export default CountdownTimer;
