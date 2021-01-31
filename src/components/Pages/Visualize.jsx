import React, {useState,useEffect} from 'react';
import Nav from "./Nav";
import '../scss/Visualize.scss';
import Toolbar from "./Toolbar";
import VisualizeBar from "./VisualizeBar";

const Visualize = () => {
    const [array, setArray] = useState([]);
    const [status, setStatus] = useState("");
    const [start,setStart] = useState(false);
    const addItem = (val) => {
        if (array.length < 5) {
            setArray([...array, val]);
        } else {
            setStatus("Sorry only 5 elements are allowed!");
        }
    };
    const removeItem = () => {
        if (array.length > 0){
            let arr = array.slice(0,array.length-1);
            setArray(arr);
        }else {
            setStatus("No more items to be removed!");
        }
    };
    const startAlgo = () => {
        setStart(!start);
    };
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setStatus("");
        },3000);
        return () => clearTimeout(timeout);
    },[status])
    return (
        <div className={"Visualize"}>
            <Nav/>
            <div className="Visualize-container">
                <div className="Algo">
                    <div className="Algo-head">
                        <h3>
                            Bubble Sort
                        </h3>
                    </div>
                    <div className="Algo-desc">
                        <p>
                            Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent
                            elements if they are in wrong order.
                        </p>
                    </div>
                </div>
                <div className="Toolbar-container">
                    <Toolbar add={addItem} remove={removeItem} startAlgo={startAlgo} isStarted={start}/>
                    <div className="List flex flex-wrap flex-jc-sb">
                        {
                            array && array.map((i,index) => (
                                <div key={index} className={"List-items"}>
                                    {i}
                                </div>
                            ))
                        }
                    </div>
                    {
                        status.length > 0 &&
                        <div className="Visualize-popup flex flex-jc-c flex-ai-c">
                            {
                                status
                            }
                        </div>

                    }
                </div>
                <div className="Visualize-bar">
                    <VisualizeBar isStarted={start} array={array}/>
                </div>
            </div>
        </div>
    );
};

export default Visualize;