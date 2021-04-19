import React, { Component } from 'react'
import UserDetails from './UserDetails'

export class UserPropTypes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [
                {
                    name: 'np',
                    id: 1
                },
                {
                    name: 'pp',
                    id: 2
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => {
                        return <UserDetails name={user.name} key={user.id} />
                    })
                }
            </div>
        )
    }
}

export default UserPropTypes
