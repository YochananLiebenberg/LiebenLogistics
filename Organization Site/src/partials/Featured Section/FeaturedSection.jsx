import React, { useRef, useEffect } from 'react';
import './FeaturedSection.css'
import featuredImage from "../../images/Untitled (500 × 500 px).png";

function FeaturedSection() {


    return (
        <section className="Featured-section" id="Featured">
            <div className="left-container">
                <div className="featured-left-title"><h1>Upcoming<span className="second-title-color"> projects </span></h1></div>
                <div className="featured-left-text"><p>Meet RealTalkGPT, the innovative app blending deepfake tech, language models, and AI text-to-speech. It offers an unmatched experience in crafting realistic deepfake videos.</p></div>
            </div>



            <div className="right-container">
                <div className="featured-right-picture">
                    <img src={featuredImage}></img>
                    <div className="card"></div>
                </div>

                <div className="rainbow-right-text">
                    <h1>Using.</h1>
                    <h1>ChatGPT API</h1>
                    <h1>DeepFake WavToLip</h1>
                    <h1>Text to Speech</h1>
                </div>


            </div>


        </section>
    );
}
export default FeaturedSection;
