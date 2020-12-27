import { render } from '@testing-library/react';
import React, { useState } from 'react'

function CounterButton() {
    const initailValue = 0;
    const [count, setCount] = useState(initailValue)
    return (
        < div >
            count :{count}
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount(prevCount => prevCount + 5)}>Increment by 5</button>
            <button onClick={() => setCount(initailValue)}>Reset</button>
        </ div>
    )
}
export default CounterButton