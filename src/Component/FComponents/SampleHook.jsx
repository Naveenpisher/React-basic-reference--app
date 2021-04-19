import React, { useState } from 'react'

function SampleHook() {
    const [count, setCount] = useState(0)
    console.log(count)

    const incrementCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={incrementCount}>Click</button>
        </div>
    )
}

export default SampleHook
