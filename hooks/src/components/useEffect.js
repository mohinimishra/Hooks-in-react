import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [count, setcount] = useState(0)
    useEffect(() => {
        document.title = `Clicked ${count}`
    })
    return (
        <div>
            <button onClick={() => { setcount(count + 1) }}>Click {count} Times</button>
        </div>
    )
}
export default UseEffect