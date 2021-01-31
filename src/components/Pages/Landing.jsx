import React from 'react';
import Logo from '../images/neural.svg';
import '../scss/Landing.scss';

const Landing = () => {
    return (
        <div className={"Landing flex flex-ai-c flex-jc-c flex-col"}>
            <div className="Landing-container">
                <img src={Logo} alt="Algo Visualizer Logo"/>
                <h1 className={"Brand"}> Algo Visualizer</h1>
                <button className={"Landing-button"}>
                    Let's Visualize
                </button>
            </div>
        </div>
    );
};

export default Landing;