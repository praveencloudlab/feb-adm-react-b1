import React from 'react';
import greetMe from '../js/Test';

const Odd = () => {
    return (
        <div>
            <h1>ODD Number</h1>
            <hr/>
            {greetMe('Ozvitha')}
        </div>
    );
};

export default Odd;