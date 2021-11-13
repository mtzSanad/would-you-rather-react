import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../../actions/questions'
import { getQuestionData, getQuestionResult, getUserInfo } from '../../utils/helper'
import NotFound from '../app/NotFound'

//Dummy functional component that will be used to show results only
class QuestionResult extends Component {

    render = () => {
        const { users, authedUser, questions } = this.props
        const { id } = this.props.match.params
        //This method returns undefined if the question dosen't exists
        const question = getQuestionData(id, questions);
        const questionResult = question && getQuestionResult(authedUser, question)
        //Short circut for question in case of undefined
        const { optionOne: { text }, optionTwo: { text: text2 }, author } = question || { optionOne: { votes: [] }, optionTwo: { votes: [] } }
        const { name, avatarURL } = getUserInfo(users, author)

        //destructing questionResult
        const { optionOne, optionOnePercentage, optionTwo, optionTwoPercentage, total } = questionResult || {}

        //Handling styling based on option selected
        const conditionalStyle1 = question && question.optionOne.votes.includes(authedUser) ? 'selection1' : ''
        const conditionalStyle2 = question && question.optionTwo.votes.includes(authedUser) ? 'selection2' : ''
        const adjustHeight = questionResult && Object.keys(questionResult).length > 0 ? 'result' : 'answer'

        return (
            !question ? <NotFound /> :
                (<section className={`question-card ${adjustHeight}`}>
                    <div className="card-header">{`${name} Asks`}</div>
                    <dir className="card-body">
                        <div className="left-column">
                            <img className="card-img" src={avatarURL} alt="Author avatar" />
                        </div>
                        <div className="righ-column">
                            {
                                Object.keys(questionResult).length > 0 ? (<div className="card-details">
                                    <p>Result</p>
                                    <div className={`option1 ${conditionalStyle1}`}>
                                        <p>{text}</p>
                                        <ProgressBar variant="success" now={optionOnePercentage} label={`${optionOnePercentage}%`} />
                                        <p className="nout">{`${optionOne} Out of ${total}`}</p>
                                    </div>
                                    <div className={`option2 ${conditionalStyle2}`} >
                                        <p>{text2}</p>
                                        <ProgressBar variant="success" now={optionTwoPercentage} label={`${optionTwoPercentage}%`} />
                                        <p className="nout">{`${optionTwo} Out of ${total}`}</p>
                                    </div>
                                </div>) : (
                                    <form onSubmit={(e) => { e.preventDefault(); this.props.handleAnswerQuestion({ authedUser, qid: id, answer: e.currentTarget[0].checked ? 'optionOne' : 'optionTwo' }) }} className="card-details">
                                        <p>Would You Rather</p>
                                        <input required type="radio" id="option1" name="wur" value="1" />
                                        <label htmlFor="option1">{text}</label><br />
                                        <input type="radio" id="option2" name="wur" value="2" />
                                        <label htmlFor="option2">{text2}</label><br></br>
                                        <input type="submit" value="vote" />
                                    </form>
                                )
                            }

                        </div>
                    </dir>
                </section>)

        )
    }
}

const mapStateToProps = (state) => {
    return { questions: state.questions, authedUser: state.authedUser, users: state.users }
}

const mapDistpatchToProps = (dispatch) => {
    return { handleAnswerQuestion: (questionAnswer) => dispatch(handleAnswerQuestion(questionAnswer)) }
}

export default connect(mapStateToProps, mapDistpatchToProps)(QuestionResult)
