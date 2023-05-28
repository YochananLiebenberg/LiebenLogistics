import React, { useRef, useEffect } from 'react';
import './About.css'
import paImage from "../../images/PaProfile.jpg";
import yochImage from "../../images/WhatsApp Image 2023-05-28 at 4.03.21 PM.jpeg";
import noahImage from "../../images/Noah.png";
import benjaminImage from "../../images/Benjamin.png";
function About() {


    return (
        <section className="About-section" id="About">

            <div className="About-left-text">
                <div className="About-title"><h1>About<span className="grey"> us </span></h1></div>
                <div className="About-text">As a team, we are a group of three professionals with diverse backgrounds and expertise. Our skills cover various areas including computer science, data science, and law. We are passionate about continuous learning and tackling complex challenges, and are committed to delivering solutions that are data-driven. Our team consists of a Computer Science Honours graduate and Master's candidate in Data Science specializing in Machine Learning, a Computer Science Honours graduate with expertise in C#, Python, and JavaScript, and a first-class honours LLB graduate studying law at Swansea University.
                </div>

                <div className="About-text">Together, we bring a wealth of knowledge and experience to any project we undertake. We work collaboratively to leverage our diverse skill sets to achieve our goals, with a shared commitment to excellence. We are enthusiastic, dedicated, and bring a high level of professionalism to our work, making us a valuable asset to any organization. We are excited about the opportunities that come our way, and we are always looking for new challenges to take on.
                </div>
            </div>

            <div className="About-right-icons">
                <div className="About-blocks-container">
                    <div className="block stacked">
                        <img className="About-profile-icon" src={paImage}></img>
                        <div className="About-person">Yochanan Liebenberg</div>

                        <div className="About-profile-description">
                            Entrepreneur and business mogul. Developed E-locate, Nexus, Tsitsikamma Mountain Reserve, Stone Wall Farm...
                        </div>
                    </div>


                    <div className="block stacked">
                        <img className="About-profile-icon" src={yochImage}></img>
                        <div className="About-person">Yochanan Jnr Liebenberg</div>

                        <div className="About-profile-description">
                            I’m a recent Exeter University Computer Science Honours graduate currently completing a Masters in a data science at Swansea University.
                        </div>
                    </div>

                    <div className="block stacked">
                        <img className="About-profile-icon" src={noahImage}></img>
                        <div className="About-person">Noah Liebenberg</div>

                        <div className="About-profile-description">
                            I’m a recent Exeter University Computer Science Honours graduate currently completing a Masters in a data science at Swansea University.                        </div>
                    </div>

                    <div className="block stacked">
                        <img className="About-profile-icon" src={benjaminImage}></img>
                        <div className="About-person">Benjamin Liebenberg</div>

                        <div className="About-profile-description">
                            Working currently as an in-house paralegal for the Vice-Chancellor’s Office at Swansea University. Training contract commencing September 2023 with Capital Law Ltd.                        </div>
                    </div>



                </div>
            </div>












        </section>

    );
}

export default About;
