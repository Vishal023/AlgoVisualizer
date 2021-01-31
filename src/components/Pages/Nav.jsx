import React from 'react';
import '../scss/Nav.scss';

const Nav = () => {
    return (
        <nav className={"Nav flex flex-ai-c flex-jc-c "}>
            <div className="Nav-container flex flex-ai-c">
                <div className="Nav-brand">
                    <span>
                        ALGO VISUALIZER
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Nav;