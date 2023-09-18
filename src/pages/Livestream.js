import React, { useState } from "react";
import YoutubeIcon from "../assets/Youtube_Icon.png";
import Image1 from "../assets/pic1.jpg";
import Image2 from "../assets/pic2.jpg";
import Image3 from "../assets/pic3.jpg";
import Image6 from "../assets/pic6.jpg";
import Photo1 from "../assets/Photo_1.jpg";
import Photo3 from "../assets/Photo_3.jpg";
import Photo4 from "../assets/Photo_4.jpg";
import Photo6 from "../assets/Photo_6.jpg";
import { motion } from "framer-motion";
function Livestream() {
  // Define a state variable to store the video URL
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/gAtj4jG3n8g"
  );

  // Event handlers for each box click
  const handleBoxClick = (newVideoUrl) => {
    setVideoUrl(newVideoUrl);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <motion.div
      className="main_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="head">
        <div className="video">
          <div className="live">
            <iframe
              id="video-box"
              width="964"
              height="542"
              src={videoUrl}
              title="ARUA Strategic Plan Launch Documentary"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <h2>ARUA 2023.</h2>
          </div>
          <div className="livechat">
            <div className="video_head livetxt">LIVE CHAT</div>
          </div>
        </div>
        <div className="previous_videos">
          <div className="video_head">PLAYLISTS</div>
          <div
            id="box-1"
            className="video_content"
            onClick={() =>
              handleBoxClick("https://www.youtube.com/embed/T2oIae8IaXQ")
            }
          >
            <div className="video_box">
              <img id="css2" className="icon" src={YoutubeIcon} alt="" />
              <img src={Image1} alt="" />
            </div>
            <div className="content">
              <h2>ARUA Strategic Plan Event Recording.</h2>
              <p>Red Bull Surfing</p>
              <p>9 months ago</p>
            </div>
          </div>
          <div
            id="box-2"
            className="video_content"
            onClick={() =>
              handleBoxClick("https://www.youtube.com/embed/gAtj4jG3n8g")
            }
          >
            <div className="video_box">
              <img id="css3" className="icon" src={YoutubeIcon} alt="" />
              <img src={Image2} alt="" />
            </div>
            <div className="content">
              <h2>ARUA Plan Launch Documentary.</h2>
              <p>KHON2 News</p>
              <p>10 months ago</p>
            </div>
          </div>
          <div
            id="box-3"
            className="video_content"
            onClick={() =>
              handleBoxClick("https://www.youtube.com/embed/UcFeEhiw3v8")
            }
          >
            <div className="video_box">
              <img id="css4" className="icon" src={YoutubeIcon} alt="" />
              <img src={Image3} alt="" />
            </div>
            <div className="content">
              <h2>ARUA-Guild Info session on ARISE Pilot Project.</h2>
              <p>Lorem, ipsum.</p>
              <p>5 months ago</p>
            </div>
          </div>
          <div
            id="box-4"
            className="video_content"
            onClick={() =>
              handleBoxClick("https://www.youtube.com/embed/DGfa7ZNZGJU")
            }
          >
            <div className="video_box">
              <img id="css5" className="icon" src={YoutubeIcon} alt="" />
              <img src={Image6} alt="" />
            </div>
            <div className="content">
              <h2>Prof. Ernest Aryeetey | Roundtable Discussion.</h2>
              <p>Lorem, ipsum.</p>
              <p>5 months ago</p>
            </div>
          </div>
        </div>

        <div className="articles">
          <div className="article_head">ARTICLES</div>
          <div className="article_content">
            <div className="img_box">
              <img src={Image6} alt="" />
            </div>
            <div className="content">
              <a id="css6" target="blank" href="https://unilag.edu.ng/?p=24001">
                <h2>Prof. Ernest Aryeetey | Roundtable Presentation</h2>
              </a>
              <p>Red Bull Surfing</p>
              <p>9 months ago</p>
            </div>
          </div>
          <div className="article_content">
            <div className="img_box">
              <img src={Image3} alt="" />
            </div>
            <div className="content">
              <a id="css7" target="blank" href="https://unilag.edu.ng/?p=24260">
                <h2>ARUA-Guild Info session on ARISE Pilot Project.</h2>
              </a>
              <p>Red Bull Surfing</p>
              <p>9 months ago</p>
            </div>
          </div>
          <div className="article_content">
            <div className="img_box">
              <img src={Image1} alt="" />
            </div>
            <div className="content">
              <a id="css8" target="blank" href="https://unilag.edu.ng/?p=24234">
                <h2>ARUA Plan Launch Recording.</h2>
              </a>
              <p>Red Bull Surfing</p>
              <p>9 months ago</p>
            </div>
          </div>
          <div className="article_content">
            <div className="img_box">
              <img src={Image2} alt="" />
            </div>
            <div className="content">
              <a id="css9" target="blank" href="https://unilag.edu.ng/?p=24185">
                <h2>ARUA Strategic Launch Documentary.</h2>
              </a>
              <p>Red Bull Surfing</p>
              <p>9 months ago</p>
            </div>
          </div>
        </div>

        <div className="photo_gallery">
          <div className="gallery_head">GALLERY</div>
          <div className="photos">
            <img src={Photo3} alt="" />
            <img src={Photo1} alt="" />
            <img src={Photo4} alt="" />
            <img src={Photo6} alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Livestream;
