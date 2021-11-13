import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { signUserIn } from '../../actions/authedUser'
import './Login.css'

class Login extends Component {

    //Creating reference on user selection
    selecInput = React.createRef()

    //Here we want to get value of user selection and send it to the function that will fill the store authedUser
    componentDidMount = () => {

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signin(this.selecInput.current.value)
        //If current location is for questions then when user login again he will not be redirected to home page
        if (!this.props.location.pathname.includes('/questions/')) {
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <p>Welcome to Would You Rather Game</p>
                <img src="../../../asset/wur.png" alt="would you rather" />
                <select name="login" id="login" ref={this.selecInput}>
                    <option value="sarahedo">sarahedo</option>
                    <option value="tylermcginnis">tylermcginnis</option>
                    <option value="johndoe">johndoe</option>
                </select>
                <input type="submit" value="Login" />
            </form>
        )
    }
}

const mapDistpatchToProps = (dispatch) => {
    return {
        signin: (userId) => dispatch(signUserIn(userId))
    }
}

export default withRouter(connect(null, mapDistpatchToProps)(Login))
