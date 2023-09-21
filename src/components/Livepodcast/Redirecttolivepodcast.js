import {Link} from 'react-router-dom';
import '../../styles/Stylelivepodcast/Redirect.css'
import thumbnailone from '../../assets/thumbnail-1.jpg';
import thumbnailtwo from '../../assets/thumbnail-2.jpg';
import thumbnailthree from '../../assets/thumbnail-3.jpg';
import thumbnailfour from '../../assets/thumbnail-4.jpg';
import { useNewContext } from '../../Context/NewContext';


export let Redirect = () => {

    const {Image , setImage} = useNewContext();

    
    
    return (
        <section className="Container">
                <section className="Slider">
                    <section>
                        <Link to='/livepostalcard'><img src={thumbnailone} alt='first_image' onClick={() => {
                            setImage({...Image, album : [thumbnailone , thumbnailtwo , thumbnailthree , thumbnailfour], img: thumbnailone});
                        }}></img></Link>
                    </section>
                    <section>
                        <Link to='/livepostalcard'><img src={thumbnailtwo} alt='first_image' onClick={() => {
                            setImage({...Image, album : [thumbnailone , thumbnailtwo , thumbnailthree , thumbnailfour] , img: thumbnailtwo});
                        }}></img></Link>
                    </section>
                    <section>
                        <Link to='/livepostalcard'><img src={thumbnailthree} alt='first_image' onClick={() => {
                            setImage({...Image, album : [thumbnailone , thumbnailtwo , thumbnailthree , thumbnailfour] , img: thumbnailthree});
                        }}></img></Link>
                    </section>
                    <section>
                        <Link to='/livepostalcard'><img src={thumbnailfour} alt='first_image' onClick={() => {
                            setImage({...Image, album : [thumbnailone , thumbnailtwo , thumbnailthree , thumbnailfour] , img: thumbnailfour});
                        }}></img></Link>
                    </section>
                </section>   
        </section>
    );
};