import React, { Component } from 'react'
import MouseTracker from './MouseTracker'

export class Cat extends Component {
    render() {
        return (
            <MouseTracker render={((mouse = {}) => {
                return <div style={{ position: 'absolute', left: mouse.x, top: mouse.y }}>
                    <img style={{ maxWidth: '500px' }} src="https://www.kindpng.com/picc/m/8-85734_cat-hand-png-cat-png-transparent-png.png" alt="Cat" />
                </div>
            })}>
            </MouseTracker>

        )
    }
}

export default Cat
