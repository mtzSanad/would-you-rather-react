import React from 'react'
import { Link } from 'react-router-dom'
import { getUserInfo } from '../../utils/helper'

//This componenet is only responsible of rendereing question so it can be dummy function component
const Question = (props) => {
    //Getting values by destructring the object, easier in reading code
    const { author, id, optionOne: { text } } = props.question
    const users = props.users
    const { name, avatarURL } = getUserInfo(users, author)


    return (
        <section>
            <div className="card-header">{`${name} Asks`}</div>
            <dir className="card-body">
                <div className="left-column">
                    <img className="card-img" src={avatarURL} alt="Author avatar" />
                </div>
                <div className="righ-column">
                    <div className="card-details">
                        <p>Would You Rather</p>
                        <p className="text">{text}</p>
                        <Link to={`/questions/${id}`}>View & Vote</Link>
                    </div>
                </div>
            </dir>
        </section>
    )
}

export default Question
