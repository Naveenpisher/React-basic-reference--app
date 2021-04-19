import React, { Component } from 'react'

export class MouseTracker extends Component {
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
                {
                    this.props.render(this.state)
                }
            </div>
        )
    }
}

export default MouseTracker
