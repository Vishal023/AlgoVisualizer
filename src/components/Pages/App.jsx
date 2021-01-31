import React from 'react';
import Landing from "./Landing";
import '../scss/App.scss';
import Home from "./Home";
import Nav from "./Nav";
import Visualize from "./Visualize";
const App = () => {
    return (
        <div className={"App flex flex-col"}>
            <div className="App-container">
                {/*<Landing/>
                <Home/>*/}
                <Visualize/>
            </div>
        </div>
    );
};

export default App;