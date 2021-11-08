import React from 'react';
import TypeBar from "../components/TypeBar";
import Devices from "../components/Devices";

const Catalog = () => {
    return (
        <div className='catalog'>
                <TypeBar/>
                <Devices/>
        </div>
    );
};

export default Catalog;