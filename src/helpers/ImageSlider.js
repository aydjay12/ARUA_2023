import { useState } from "react";
import "../styles/ImageSlider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyles = {
    height: "100%",
    width: "100%",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const leftArrowStyles = {
    position: "absolute",
    top: "183%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
    height: "100px",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "183%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "black",
    zIndex: 1,
    cursor: "pointer",
    height: "100px",
  };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider" style={sliderStyles}>
      <ArrowBackIosIcon
        style={leftArrowStyles}
        onclick={goToPrevious}
      ></ArrowBackIosIcon>
      <ArrowForwardIosIcon
        style={rightArrowStyles}
        onclick={goToNext}
      ></ArrowForwardIosIcon>
      <div style={slideStyles}></div>
    </div>
  );
};

export default ImageSlider;
