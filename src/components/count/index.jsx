import React, { useState } from 'react';
import './style.css';

const Count = () => {
    const [count, setCount] = useState(0);
    const add = () => {
        setCount(count + 1)
    }
    const substract = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <div className='countContainer'>
            <p>{count}</p>
            <button onClick={add}>
                +
            </button>
            <button onClick={substract}>
                -
            </button>
        </div>
    )
}

export default Count;
