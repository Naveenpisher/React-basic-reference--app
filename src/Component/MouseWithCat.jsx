import React, { Component } from 'react'
import Cat from './Cat'

export class MouseWithTracker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0, y: 0
        }
    }
    mouserMoveHandler = ($evnt) => {
        this.setState({
            x: $evnt.clientX,
            y: $evnt.clientY,
        })
    }

    render() {
        return (
            <div onMouseMove={this.mouserMoveHandler} style={{ height: '100vh', width: '100vw' }}>
                <div>
                    Position : X - {this.state.x} <br />
                    Position : Y - {this.state.y}
                </div>
                <Cat mouse={this.state} />
            </div>
        )
    }
}

export default MouseWithTracker
