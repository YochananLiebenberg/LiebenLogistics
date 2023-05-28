import React from 'react';
import './AboutSection.css';
import FlippableProfileCard from "./FlippableProflePart";



function Profiles(props) {
    const renderButton = (handleClick) => {
        return (
            <button className="contactDetails-button" onClick={handleClick}>
                Contact Details
            </button>
        );
    };

    return (

        <section>
            <div className="about-section" id="about-section">
                <div>
                    <div className="About-section-title">About<span className="grey"> us </span></div>
                    <div className="About-section-content">
                        <div className="About-text">As a team, we are a group of three professionals with diverse backgrounds and expertise. Our skills cover various areas including computer science, data science, and law. We are passionate about continuous learning and tackling complex challenges, and are committed to delivering solutions that are data-driven. Our team consists of a Computer Science Honours graduate and Master's candidate in Data Science specializing in Machine Learning, a Computer Science Honours graduate with expertise in C#, Python, and JavaScript, and a first-class honours LLB graduate studying law at Swansea University.
                        </div>
                        <div className="About-text">Together, we bring a wealth of knowledge and experience to any project we undertake. We work collaboratively to leverage our diverse skill sets to achieve our goals, with a shared commitment to excellence. We are enthusiastic, dedicated, and bring a high level of professionalism to our work, making us a valuable asset to any organization. We are excited about the opportunities that come our way, and we are always looking for new challenges to take on.
                        </div>


                    </div>
                </div>





                <div className="profile-cards-section">
                    <div className="profiles">
                        <FlippableProfileCard linkedin={"https://www.linkedin.com/in/yochanan-liebenberg-486944212/"} email={"yochananliebenberg@gmail.com"} phone={"+447502950173"} profile_img ="url(../src/images/Yochanan.JPG)"></FlippableProfileCard>
                        <div className="Profile_details">
                            <div className="Name">Yochanan Liebenberg</div>
                            <div className="Title">MSC Data Science</div>
                            <div className="About">I’m a recent Exeter University Computer Science Honours graduate currently completing a Masters in a data science at Swansea University.</div>
                            <button className="contactDetails-button">Contact Details</button>
                        </div>
                    </div>


                <div className="profiles">
                    <FlippableProfileCard linkedin={"https://www.linkedin.com/in/noahliebenberg/"} email={"noahliebenberg7@gmail.com"} phone={"+4407526226401"}  profile_img ="url(../src/images/Noah.JPG)" renderButton={renderButton}></FlippableProfileCard>
                    <div className="Profile_details">
                        <div className="Name">Noah Liebenberg</div>
                        <div className="Title">BSC Hons Computer Science</div>
                        <div className="About">I’m a recent Exeter University Computer Science Honours graduate currently completing a Masters in a data science at Swansea University.</div>
                        <button className="contactDetails-button">Contact Details</button>
                    </div>
                </div>

                <div className="profiles">
                    <FlippableProfileCard linkedin={"https://www.linkedin.com/in/benjamin-liebenberg-722048172/"} email={"benjaminliebenberg7@gmail.com"} phone={"+447763639508 "}  profile_img ="url(../src/images/BenjaminV2.JPG)"></FlippableProfileCard>
                    <div className="Profile_details">
                        <div className="Name">Benjamin Liebenberg</div>
                        <div className="Title">LLB & LPC</div>
                        <div className="About">Working currently as an in-house paralegal for the Vice-Chancellor’s Office at Swansea University. Training contract commencing September 2023 with Capital Law Ltd.</div>
                        <button className="contactDetails-button">Contact Details</button>
                    </div>
                </div>
                </div>


            </div>


        </section>
    );
}

export default Profiles;
