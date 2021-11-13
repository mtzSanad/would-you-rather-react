import React, { Component } from 'react'
import { connect } from 'react-redux'
import './LeaderBoard.css'

class LeaderBoard extends Component {
    //Preparing data for view and working this data from users slice in store

    getLeaderBoardData = () => {
        const leaderDS = [];
        Object.values(this.props.users).forEach(user => {
            const result = {}
            result.id = user.id
            result.name = user.name
            result.avatar = user.avatarURL
            result.answeres = Object.values(user.answers).length
            result.questions = user.questions.length
            result.total = Object.values(user.answers).length + user.questions.length
            leaderDS.push(result)
        })

        //Sorting array, it excutes in place
        leaderDS.sort((a, b) => b.total - a.total)
        return leaderDS
    }
    render() {
        return (
            <section>
                <ul>
                    {this.getLeaderBoardData().map(user => (<li key={user.id} className="leader-card">
                        <div className="col1">
                            <img src={user.avatar} alt="user avatar" />
                        </div>
                        <div className="col2">
                            <p className="username">{user.name}</p>
                            <p>{`Numbers of question asked : ${user.questions}`}</p>
                            <p>{`Numbers of question answered : ${user.answeres}`}</p>
                        </div>
                        <div className="col3">
                            <p>Score</p>
                            <p className="total-score">{user.total}</p>
                        </div>
                    </li>))}
                </ul>
            </section>
        )
    }
}

const mapStateToPropos = (state) => {
    return {
        users: state.users,
        questions: state.questions
    }
}

export default connect(mapStateToPropos)(LeaderBoard)