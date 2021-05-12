import React from 'react';
import './Slides.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Slides() {
    return (
        <div>
            <AliceCarousel fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true} controls={false} autoPlay={true}  autoPlayInterval="3000">
                <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" className="sliderimg"/>
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" className="sliderimg"/>
                <img src="https://images.unsplash.com/photo-1498579150354-977475b7ea0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXRhbGlhbiUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" className="sliderimg"/>
                <img src="https://images2.alphacoders.com/100/1003810.jpg" className="sliderimg"/>
            </AliceCarousel>
        </div>
    )
}

export default Slides