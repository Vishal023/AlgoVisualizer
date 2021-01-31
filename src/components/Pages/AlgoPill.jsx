import React from 'react';
import '../scss/AlgoPill.scss';

const AlgoPill = ({name}) => {
    return (
        <div className={"AlgoPill"}>
            <p>
                {
                    name
                }
            </p>
        </div>
    );
};

export default AlgoPill;