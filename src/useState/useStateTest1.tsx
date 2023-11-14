import { useState } from 'react'

function A() {
    console.log('render A')
    return null
}

function UseStateTest1() {
    const [_state, setState] = useState(false)
    console.log('render App')
    return <div>
        <button onClick={() => {
            console.log('click')
            setState(true)
        }}>click me</button>
        <A />
    </div>
}

export default UseStateTest1

