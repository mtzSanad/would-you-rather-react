import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signUserIn, signUserOut } from '../../actions/authedUser'
import { getUserAvatarUrl } from '../../utils/helper'
import './LoginUser.css'

class LoginUser extends Component {

    render() {
        const { authedUser, users, signout } = this.props
        //Render user greeting based on if the user is logged in or not
        const greeting = authedUser ? `Hi, ${authedUser}` : "Hi, Sign in "

        const avatarUrl = getUserAvatarUrl(users, authedUser)

        return (
            <div className="login-info">
                <p>{greeting}</p>
                {authedUser && (<span><Link to="/" onClick={signout} className="signout">Sign out</Link></span>)}
                <img src={`${avatarUrl}`} alt="User avatar" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authedUser: state.authedUser,
        users: state.users
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        sign: (authedUser) => dispatch(signUserIn(authedUser)),
        signout: () => dispatch(signUserOut())
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(LoginUser)
