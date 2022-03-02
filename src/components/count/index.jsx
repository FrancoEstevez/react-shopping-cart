import React, { useState } from 'react';
import './style.css';

const Count = () => {
    const [count, setCount] = useState(0)
    return (
        <div className='countContainer'>
            <p>{count}</p>
            <button onClick={() => {setCount(count + 1)}}>
                +
            </button>
            <button onClick={() => {setCount(count - 1)}}>
                -
            </button>
        </div>
    )
}

export default Count;
