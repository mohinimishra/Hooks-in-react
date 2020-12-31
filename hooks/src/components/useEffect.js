import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [count, setcount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        document.title = `Clicked ${count}`
        console.log('UseEffect is renderd')
    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
            <button onClick={() => { setcount(count + 1) }}>Click {count} Times</button>
        </div>
    )
}
export default UseEffect