import React, {useState} from 'react';
import '../scss/Toolbar.scss';

const Toolbar = ({add, remove, startAlgo, isStarted}) => {
    const [input, setInput] = useState('');
    const addNewItem = () => {
        add(input);
    }
    const removeLast = () => {
        remove();
    };
    const start = () => {
        startAlgo();
    };
    return (
        <div className={"Toolbar flex flex-wrap flex-jc-c flex-ai-c"}>
            <input type="number"
                   value={input}
                   onChange={(e) => {
                       setInput(e.target.value)
                   }}
                   placeholder={"Enter a number"}
                   className="Toolbar-item"/>
            <button onClick={addNewItem}
                    className="Toolbar-item">
                Add Item
            </button>
            <button onClick={removeLast}
                    className="Toolbar-item">
                Remove Item
            </button>
            <button onClick={start} className="Toolbar-item">
                {
                    isStarted ? "Stop" : "Start"
                } Visualizing
            </button>
        </div>
    );
};

export default Toolbar;