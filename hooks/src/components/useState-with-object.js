import React, { useState } from 'react'

function useStateWithObject() {
    const [name, setname] = useState({
        firstName: '',
        lastName: ' '
    })
    return (
        <div>
            <input value={name.firstName} onChange={(e) => { setname({ ...name, firstName: e.target.value }) }} />First Name
            <input value={name.lastName} onChange={(e) => { setname({ ...name, lastName: e.target.value }) }} /> Last Name
            <h1>First Name {name.firstName}</h1>
            <h1>Last Name {name.lastName}</h1>

        </div>
    )
}
export default useStateWithObject