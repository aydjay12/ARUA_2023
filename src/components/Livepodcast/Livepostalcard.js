import { useNewContext } from "../../Context/NewContext";
import '../../styles/Stylelivepodcast/Livepostal.css';
import { useRef } from "react";





let Livepostalcard = () => {
    const {Image} = useNewContext();
    const sliderRef = useRef(null);

    let len = Image.album.length;

    let counter = 0;

   

    let loadPrev = () => {
        counter = counter > 0? counter - 1 : 0;
        sliderRef.current.style.transform = `translate(-${counter * 25}%)`;
        sliderRef.current.style.transition = 'transform 1s ease-in';
    }

    let loadNext = () => {
        counter = counter < len - 1 ? counter + 1 : len - 1;
        sliderRef.current.style.transform = `translate(-${counter * 25}%)`;
        sliderRef.current.style.transition = 'transform 1s ease-in';   
    }

    return (
        <section className="livepostalsession">
            <section className="carousel_container">
                <section className="carousel">
                    <section className="slider" ref={sliderRef}>
                            <img src={Image.album[0]} alt=""></img>
                            <img src={Image.album[1]} alt=""></img>
                            <img src={Image.album[2]} alt=""></img>
                            <img src={Image.album[3]} alt=""></img>
                    </section>
                </section>
                <section className="arrow prev" onClick={loadPrev}>Prev</section>
                <section className="arrow next" onClick={loadNext}>Next</section>
            </section>
            <section className="livechat">
                
            </section>
        </section>
    );
};



export default Livepostalcard;