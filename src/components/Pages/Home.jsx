import React from 'react';
import '../scss/Home.scss';
import AlgoPill from "./AlgoPill";

const Home = () => {
    return (
        <div className={"Home flex flex-jc-c"}>
            <div className="Home-container">
                <h3 className="Home-heading">
                    Select your algo to continue
                </h3>
                <div className="Home-pills flex flex-wrap flex-jc-c flex-ai-c">
                    <AlgoPill name={"Bubble Sort"}/>
                    <AlgoPill name={"Insertion Sort"}/>
                    <AlgoPill name={"Merge Sort"}/>
                </div>
            </div>
        </div>
    );
};

export default Home;