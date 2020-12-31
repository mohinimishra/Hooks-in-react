import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    post: {},
    error: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'fetchSucces':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'fetchError':
            return {
                loading: false,
                post: {},
                error: "Something Went Wrong Dude!"
            }
        default:
            return state
    }
}

function FetchData() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(resp => {
                dispatch({ type: 'fetchSucces', payload: resp.data })
            })
            .catch(error => {
                dispatch({ type: 'fetchError' })
            })

    }, [])
    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}
export default FetchData