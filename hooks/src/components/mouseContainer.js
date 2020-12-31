import React, { useState, useEffect } from 'react'
import XYCordinate from './XYCordinate'

function Mouse() {
    const [display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={setDisplay(!display)}>Toggle</button>
            {display && <XYCordinate />}
        </div>
    )
}
export default Mouse