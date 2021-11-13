import React, { Component } from 'react'
import './AppHeader.css'
import LoginUser from './LoginUser'
import { NavLink } from 'react-router-dom'

class AppHeader extends Component {
    render = () => {
        return (
            <nav>
                <p>Would You Rather Game</p>
                <div className="menu">
                    <ul>
                        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/add" exact activeClassName="active">New Question</NavLink></li>
                        <li><NavLink to="/leaderboard" exact activeClassName="active">Leaderboard</NavLink></li>
                    </ul>
                    <LoginUser />
                </div>

            </nav>
        )
    }
}

export default AppHeader