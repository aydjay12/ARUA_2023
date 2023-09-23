import React from "react";
import Hero from "../assets/hero.png";
import Google from "../assets/google.png";
import Atlassian from "../assets/atlassian.png";
import Amazon from "../assets/amazon.png";
import Canon from "../assets/canon.png";
import Walmart from "../assets/walmart.png";
import Support1 from "../assets/support1.png";
import Support2 from "../assets/support2.png";
import Support3 from "../assets/support3.png";
import Support4 from "../assets/support4.png";
import Support5 from "../assets/support5.png";
import Support6 from "../assets/support6.png";
import Support7 from "../assets/support7.png";
import Support8 from "../assets/support8.png";
import Support9 from "../assets/support9.png";
import Support10 from "../assets/support10.png";
import Support11 from "../assets/support11.png";
import "react-slideshow-image/dist/styles.css";
// import ImageSlider from "../helpers/ImageSlider";
import { motion } from "framer-motion";
// import { useRef, useEffect, useState } from "react";
// import { Fade, Slide } from "react-slideshow-image";
// import Star from "../assets/star.png";
// import { Link } from "react-router-dom";
import { MenuList } from "../helpers/MenuList";
import { MenuList2 } from "../helpers/MenuList";
import { MenuList3 } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import Marquee from "react-fast-marquee";
import "../styles/Livestream.css";
import "../styles/Home.css";
// import images from "../components/images";
import { Helmet } from "react-helmet";
import CountdownTimer from "./Countdown";
// import { containerClasses } from "@mui/material";
// import { Slider } from "@mui/material";

<Helmet>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
    integrity="sha512-16esztaSRplJROstbIIdwX3N97V1+pZvV33ABoG1H2OyTttBxEGkTsoIVsiP1iaTtM8b3+hu2kB6pQ4Clr5yug=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/Flip.min.js"
    integrity="sha512-AWDq5V1aZW5392Wm63Y2qUKK5MuksXgQVx4YMx5LqLOk4Tnzu2aSNyd/Uqwil/kIm9pikPDk6B626B7H3vq1GQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>
  <script src="../helpers/Javascript.js"></script>
</Helmet>;

// const slides = [
//   {
//     url: "http://localhost:3000/google.png",
//   },
//   {
//     url: "http://localhost:3000/atlassian.png",
//   },
//   {
//     url: "http://localhost:3000/amazon.png",
//   },
//   {
//     url: "http://localhost:3000/canon.png",
//   },
//   {
//     url: "http://localhost:3000/walmart.png",
//   },
// ];
// const divStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   height: "400px",
//   backgroundSize: "cover",
// };
// const spanStyle = {
//   fontSize: "20px",
//   background: "#efefef",
//   color: "",
// };

// const containerStyles = {
//   margin: "0 auto",
// };

function Home() {
  // const [width, setWidth] = useState(0);
  // const carousel = useRef();

  // useEffect(() => {
  //   console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="topSide">
        <h1>ARUA 2023 BIENNIAL INTERNATIONAL CONFERENCE</h1>
        <p>THEME: Reimagining the Future of Higher Education in Africa</p>
        <CountdownTimer></CountdownTimer>
        <img className="hero" src={Hero} alt=""></img>
      </div>
      <div className="summary">
        <h1>SUMMARY</h1>
        <section>
          <div>
            The higher education sectors in Africa have recently witnessed some
            changes, both in terms of structure and operation. This is in sharp
            contrast to what was previously known about them being fundamentally
            lagging in terms of the quality and productivity of their primary
            processes, the material conditions under which they operated,
            including the institutional capacity for enrolling students and
            conducting research, as well as their engagement with industry and
            more generally, their relevance to the continent. Higher education
            institutions (HEIs) in Africa are gradually being appropriately
            accredited and have witnessed significant increases in enrolment,
            research output, educational funding and rankings in global
            university systems. Regional bodies such as the African Union (AU)
            have recognized the need for investment in education, skills
            development and science (Agenda 2063) and this has been central to
            transforming higher education in Africa. The private sector is also
            contributing in diverse ways to enhance access to higher education.
            Despite these improvements, there is still the general impression
            that the quality of higher education institutions in Africa is
            generally not high enough to form a strong and formidable foundation
            for global competitiveness, address the continent’s complex
            challenges and facilitate the types of collaboration that can be
            found in other universities in advanced economies. It has been
            suggested that most African universities can, at best, be described
            as not being in a strong enough state to harness the gradually
            increasing availability of different sources of international
            funding for higher education.
          </div>
          <hr></hr>
          <div>
            Not much is seen in the various efforts to address the set of
            asymmetries that have for a very long time existed between African
            universities and those of the rest of the world. With the
            ever-growing need to address the continent’s complex challenges, the
            transition towards a knowledge-based economy and maximize the
            growing number of cooperation agreements between Africa and the
            world (e.g., the AU-EU innovation agenda which recognizes
            universities as the gateway between Africa and the EU, and the
            positioning of science at the heart of development), it is becoming
            crucial for the continent to reimagine the future of its higher
            education institutions and prepare them to become more relevant. The
            2023 Biennial International Conference is hosted by the University
            of Lagos, Nigeria. This year’s conference will be hosted as a hybrid
            event with physical and online participation. The conference
            structured will include:
            <ul>
              <li>Five Keynote Addresses</li>
              <li>Four Plenary Sessions</li>
              <li>
                Four Parallel Sessions with 3rd Party Workshops/ Side Events
              </li>
              <li>
                Centres of Excellence Workshops for Early-Career Researchers
              </li>
              <li>A Policy Roundtable Discussion</li>
            </ul>
            The African Research Universities Alliance (ARUA) invites you to
            join the conversation by registering for the Conference.
          </div>
        </section>
      </div>
      <div className="menu">
        <h1 className="menuTitle">Meet Our Amazing Speakers</h1>
        <div className="subheader">
          <h2>Conference Speakers</h2>
          <hr></hr>
        </div>
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              ></MenuItem>
            );
          })}
        </div>
        <div className="subheader">
          <h2>Session Chairs</h2>
          <hr></hr>
        </div>
        <div className="menuList">
          {MenuList2.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              ></MenuItem>
            );
          })}
        </div>
        <div className="subheader">
          <h2>Keynote Speakers</h2>
          <hr></hr>
        </div>
        <div className="menuList menu3">
          {MenuList3.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              ></MenuItem>
            );
          })}
        </div>
      </div>
      <div className="leaders">
        {/* <motion.p animate={{ y: 250 }}>Our Supporters</motion.p> */}
        <p>Our Supporters</p>
        <div>
          <Marquee autoFill="true">
            <div className="imagewrapper unilag">
              <img src={Support11} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Google} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Amazon} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Atlassian} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Walmart} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Canon} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Support1} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Support2} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Support3} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Support4} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Support5} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Support6} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Support7} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Support8} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Support9} alt=""></img>
            </div>
            <div className="imagewrapper">
              <img src={Support10} alt=""></img>
            </div>
          </Marquee>
        </div>
      </div>
      {/* <div className="bottomSide">
        <div>
          <h1>More than 13,000 teams use Saasinyo platform</h1>
          <p>
            Boost revenue, gain insights that help you grow and scale faster.
          </p>
        </div>
        <div>
          <h1>4.9</h1>
          <div>
            <img src={Star} alt=""></img>
            <img src={Star} alt=""></img>
            <img src={Star} alt=""></img>
            <img src={Star} alt=""></img>
            <img src={Star} alt=""></img>
          </div>
          <p>Capterra</p>
        </div>
        <div>
          <h1>4.8</h1>
          <div>
            <img src={Star} alt=""></img>
            <img src={Star} alt=""></img>
            <img src={Star} alt=""></img>
            <img src={Star} alt=""></img>
            <img src={Star} alt=""></img>
          </div>
          <p>Trustpilot</p>
        </div>
      </div> */}
    </motion.div>
  );
}

export default Home;
