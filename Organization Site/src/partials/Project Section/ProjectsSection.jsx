import React, { useEffect } from 'react';
import './ProjectsSection.css';
import wineImage from "../../images/wine-website.png";
import carImage from "../../images/car.png";
import turbineImage from "../../images/pngwing.com.png";


function ProjectsSection() {

    useEffect(() => {
        const slider = document.querySelector('.media-scroller');

        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // adjust the speed of the drag
            slider.scrollLeft = scrollLeft - walk;
        });
    }, []);

    return (
        <section className="projects-section" id="Portfolio">
            <div className="project-section-text">
                <div className="project-section-title">Past <span className="grey"> projects </span></div>

            </div>
            <section className="media-scroller snaps-inline">
                <div className="media-element" id="Product-2">
                    <div>
                        <div className="product-type">Desktop APPLICATION</div>
                        <div className="product-title">Turbine Damage Detector</div>
                        <div className="project-about">Developed a Python application to process wind turbine images and locate damage to be flagged for the user. Multiple machine
                            learning object detection algorithms were compared and the best
                            implemented</div>
                    </div>
                    <div className="project-logo align-right">
                        <img className="img-product"  src={turbineImage} />
                    </div>
                </div>
                <div className="media-element" id="Product-3">
                    <div>
                        <div className="product-type">Mobile APPLICATION</div>
                        <div className="product-title">AI Car Salesman</div>
                        <div className="project-about">AutoPricer is the ultimate app for accurate car pricing and seamless buying and selling experiences. Powered by AI, it provides real-time valuations based on comprehensive market data. Access fair market values, compare prices, and receive personalized recommendations, ensuring you make informed decisions. Say goodbye to uncertainty and hello to AutoPricer – download now and revolutionize your car transactions!</div>
                    </div>
                    <div className="project-logo align-right">
                        <img className="img-product"  src={carImage} />
                    </div>
                </div>
                <div className="media-element" id="Product-1">
                    <div>
                        <div className="product-type">WEB APPLICATION</div>
                        <div className="product-title">WINE ART</div>
                        <div className="project-about">A project developed with Express, Node JS and deployed using Google cloud services. Get your portrait done in your favorite wine by simply uploading a picture. Transform Your Photos into Works of Art </div>
                    </div>
                    <div className="project-logo align-right">
                        <img className="img-product"  src={wineImage} />
                    </div>
                </div>

            </section>

        </section>
    );
}

export default ProjectsSection;
