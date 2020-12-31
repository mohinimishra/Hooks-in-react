import React, { useReducer } from 'react'
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
    }
}
function CounterReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>FirestCounter  - {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button><br></br>

            <div>Second Counter  - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>increment2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>decrement2</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>

        </div>
    )
}
export default CounterReducer