import React, { useState, useEffect } from "react"

function Cordinate() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log('useEffect will call')
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            console.log('will unmount the cordinate')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X-{X} Y-{Y}
        </div>
    )
}
export default Cordinate