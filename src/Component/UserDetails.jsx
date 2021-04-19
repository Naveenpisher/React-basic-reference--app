import React, { Component } from 'react'
import PropTypes from "prop-types";
export class UserDetails extends Component {
    render() {
        return (
            <div>
                name : {this.props.name}
            </div>
        )
    }
}

export default UserDetails

UserDetails.defaultProps = {
    name: 'Naveen pisher'
}
UserDetails.propTypes = {
    name: PropTypes.string.isRequired
}