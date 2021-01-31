import React, {useState, useEffect} from 'react';
import '../scss/VisualizeBar.scss';

const normalization = (item, min, max) => {
    return (
        ((item - min) / (max - min)) * 100
    );
};
const getMinMax = (array) => {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    array.forEach(i => {
        min = Math.min(i, min);
        max = Math.max(i, max);
    });
    return [min, max];
};

const VisualizeBar = ({array, isStarted}) => {
    const [sorted, setSorted] = useState();
    const [min, max] = getMinMax(array);
    const [ii,setI] = useState();
    const [j,setJ] = useState();
    const bubbleSort = (array) => {
        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - 1 - i; j++) {
                setI(i);
                setJ(j);
                if (array[j] > array[j + 1]){
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                }
            }
        }
        return array;
    };

    useEffect(() => {
        let arr = [];
        array.forEach(i => {
            arr.push(
                normalization(i, min, max)
            );
        })
        setSorted(arr);
    }, [array]);

    useEffect(() => {
        if (array.length > 0 && isStarted) {
            bubbleSort(array);
            console.log(array)
        }
    }, [isStarted]);
    return (
        <div className={"VisualizeBar"}>
            <div className="VisualizeBar-container flex flex-ai-fe flex-jc-sb">
                {
                    array.map((i, index) => (
                        <div className={`${(index === ii || j === index) ? "Bar flex flex-ai-c flex-jc-c active" : "Bar flex flex-ai-c flex-jc-c"}`}
                             style={{
                                 height: (sorted[index] + 100) + "px"
                             }}>
                            <span>{i}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default VisualizeBar;