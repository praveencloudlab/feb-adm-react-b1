import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Summary = () => {
const count   = useSelector(state => state.count); // calls action
    return (
        <div>
            <h1>SUmmary: {count}</h1>
            
        </div>
    );
};

export default Summary;