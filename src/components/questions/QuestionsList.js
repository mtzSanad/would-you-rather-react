import { Tabs, Tab } from 'react-bootstrap';
import React, { Component } from 'react'
import './QuestionList.css'
import { connect } from 'react-redux';
import Question from './Question';

class QuestionsList extends Component {
    render() {
        const { questions, authedUser, users } = this.props
        //Arrays to extract questions
        const answeredQuestions = [], unAnsweredQuestions = []

        //questions is an object so we need to get data as array
        const questionsArray = Object.values(questions)
        questionsArray.forEach((value) => {
            if (value.optionOne.votes.includes(authedUser) || value.optionTwo.votes.includes(authedUser)) {
                //Add question to answered question
                answeredQuestions.push(value)
            } else {
                unAnsweredQuestions.push(value)
            }
        })

        //sorting arrays based on time descending
        answeredQuestions.sort((a, b) => b.timestamp - a.timestamp)
        unAnsweredQuestions.sort((a, b) => b.timestamp - a.timestamp)

        return (
            <Tabs defaultActiveKey="uq" id="uncontrolled-tab-example" className="mb-3 main-tab">
                <Tab eventKey="uq" title="Unanswered Questions">
                    <ul>{unAnsweredQuestions.map(question => (<li key={question.id} className="question-card"><Question authedUser={authedUser} question={question} users={users} /></li>))}</ul>
                </Tab>
                <Tab eventKey="aq" title="Answered Questions">
                    <ul>{answeredQuestions.map(question => (<li key={question.id} className="question-card"><Question authedUser={authedUser} question={question} users={users} /></li>))}</ul>
                </Tab>
            </Tabs>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authedUser: state.authedUser,
        questions: state.questions,
        users: state.users
    }
}

export default connect(mapStateToProps)(QuestionsList)
