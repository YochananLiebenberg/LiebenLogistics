import React from 'react';
import Card from "./ProfleCard";
import './AboutSection.css';

import { CSSTransition } from 'react-transition-group';
import { useState } from "react";

export default function FlippableProfileCard(props) {
    const [showFront, setShowFront] = useState(true);
    const handleClick = () => {
        setShowFront((v) => !v);
    };

    return (
        <div className="card-container">

            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'>
                <Card props={props} onClick={() => {
                    setShowFront((v) => !v)
                }}/>
            </CSSTransition>
        </div>
    );
}
