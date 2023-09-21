import React from "react";
import Hero from "../assets/hero.png";
import Google from "../assets/google.png";
import Atlassian from "../assets/atlassian.png";
import Amazon from "../assets/amazon.png";
import Canon from "../assets/canon.png";
import Walmart from "../assets/walmart.png";
import Support1 from "../assets/support1.png";
import Support2 from "../assets/support2.png";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import { MenuList } from "../helpers/MenuList";
import { MenuList2 } from "../helpers/MenuList";
import { MenuList3 } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import Marquee from "react-fast-marquee";
import "../styles/Livestream.css";
import "../styles/Home.css";
import { Helmet } from "react-helmet";
import CountdownTimer from "./Countdown";


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


function Home() {
  const [DayOne , setDayOne] = React.useState(true);
  const [DayTwo , setDayTwo] = React.useState(false);
  const [DayThree , setDayThree] = React.useState(false);


  let dayone = () => {
    setDayOne(true);
    setDayTwo(false);
    setDayThree(false);
  };

  let daytwo = () => {
    setDayOne(false);
    setDayTwo(true);
    setDayThree(false);
  };

  
  let daythree = () => {
    setDayOne(false);
    setDayTwo(false);
    setDayThree(true);
  };


  
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="topSide">
        <h1>ARUA 2023 BIENNIAL INTERNATIONAL CONFERENCE</h1>
        <p>THEME: Reimagining the future of higher education in africa</p>
        <CountdownTimer></CountdownTimer>
        <section className="programme">
          <section className="programme_flyer">
            <img className="hero" src={Hero} alt=""></img>
          </section>
          <section className="programme_days">
            <h1>15th - 17th of November 2023</h1>

            <section className="days">
                  <section className={DayOne ? 'active' : ''} onClick={dayone}>DAY 1</section>
                  <section className={DayTwo ? 'active' : ''} onClick={daytwo}>DAY 2</section>
                  <section className={DayThree ? 'active' : ''} onClick={daythree}>DAY 3</section>
            </section>
            <section className="sessions">
                  <section className={DayOne ? "day_1" : "day_1 visible"}>
                      <section>Conference Opening: University of Lagos | Online</section>
                      <section>
                        <section className="row">
                          <p>9:00am</p>
                          <ul className="sub_row">
                            <li>Introductory Remarks.</li>
                            <li>Welcome Remarks.</li>
                            <li>Remarks from the chair.</li>
                          </ul>
                        </section>
                        <section className="row">
                          <p>9:20am</p>
                          <p>Opening of Conference.</p>
                        </section>
                        <section className="row">
                          <p>9:30am</p>
                          <p>First Keynote Address.</p>
                        </section>
                        <section className="row">
                          <p>10:00am</p>
                          <p>Tea/Coffee Break.</p>
                        </section>
                        <section className="row">
                          <p>10:30am</p>
                          <p>First Plenary Session.</p>
                        </section>
                        <section className="row">
                          <p>12:00pm</p>
                          <p>First Parallel Sessions || 3<sup>rd</sup> Party workshops/side events.</p>
                        </section>
                        <section className="row">
                          <p>1:30pm</p>
                          <p>Lunch.</p>
                        </section>
                        <section className="row">
                          <p>2:30pm</p>
                          <p>Second Keynote Address.</p>
                        </section>
                        <section className="row">
                          <p>3:10pm</p>
                          <p>Second Plenary Session.</p>
                        </section>
                        <section className="row">
                          <p>4:30pm</p>
                          <p>Tea/Coffee Break.</p>
                        </section>
                        <section className="row">
                          <p>5:00pm</p>
                          <p>Second Parallel Sessions || 3<sup>rd</sup> Party workshops/side events.</p>
                        </section>
                        <section className="row">
                          <p>6:30pm</p>
                          <p>Light Refreshment/Cocktails.</p>
                        </section>
                      </section>
                </section>

                <section className={DayTwo ? "day_2" : "day_2 visible"}>
                      <section className="row">
                        <p>9:00am</p>
                        <p>Third Keynote Address.</p>
                      </section>
                      <section className="row">
                        <p>9:30am</p>
                        <p>Third Plenary Session.</p>
                      </section>
                      <section className="row">
                        <p>11:00am</p>
                        <p>Tea/Coffee Break.</p>
                      </section>
                      <section className="row">
                        <p>11:30am</p>
                        <p>Third Parallel Session || 3<sup>rd</sup> Party workshops/side events.</p>
                      </section>
                      <section className="row">
                        <p>1:00pm</p>
                        <p>Lunch.</p>
                      </section>
                      <section className="row">
                        <p>2:00pm</p>
                        <p>Fourth Keynote Address.</p>
                      </section>
                      <section className="row">
                        <p>2:30pm</p>
                        <p>Fourth Plenary Session.</p>
                      </section>
                      <section className="row">
                        <p>4:00pm</p>
                        <p>Tea/Coffee Break.</p>
                      </section>
                      <section className="row">
                        <p>4:30pm</p>
                        <p>Fourth Parallel Sessions || 3<sup>rd</sup> Party workshops/side events.</p>
                      </section>
                      <section className="row">
                        <p>6:15pm</p>
                        <p>Buses Depart for Conference Dinner.</p>
                      </section>
                      <section className="row">
                        <p>7:00pm</p>
                        <p>Conference Dinner: Dinner Speech.</p>
                      </section>
                </section>

                <section className={DayThree ? "day_3" : "day_3 visible"}>
                    <section>(Centre of Excellence Workshops for Early-Career Researchers)</section>
                    <section>
                      <section className="row">
                        <p>9:00am</p>
                        <p>Final Keynote Address.</p>
                      </section>
                      <section className="row">
                        <p>10:00am</p>
                        <p>Tea/Coffee Break.</p>
                      </section>
                      <section className="row">
                        <p>10:30am</p>
                        <p>7 Parallel CoE Sessions Workshops for Early-Career Researchers.</p>
                      </section>
                      <section className="row">
                        <p>1:00pm</p>
                        <p>Lunch.</p>
                      </section>
                      <section className="row">
                        <p>2:00pm</p>
                        <p>6 Parallel CoE Sessions for Early-Career Researchers.</p>
                      </section>
                      <section className="row">
                        <p>5:00pm</p>
                        <p>Policy Roundtable and Wrap-Up: Topic TBC.</p>
                      </section>
                      <section className="row">
                        <p>6:30pm</p>
                        <ul className="sub_row">
                          <li>End of Conference and Workshop.</li>
                          <li>Light Refreshment.</li>
                        </ul>
                      </section>
                    </section>
                </section>
            </section>
          </section>
        </section>  
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
        <div className="">
          <Marquee>
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
          </Marquee>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
