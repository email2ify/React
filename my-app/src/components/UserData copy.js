import React from 'react'

function UserData(props) {
    return (
        <div>
            <h1>{props.isLoaded ? 'Data loaded!' : 'Loading ...'}</h1>
        </div>
    )
}

// the UserData parent is NestingComponent using props contructor

export default UserData