import { hideLoading, showLoading } from 'react-redux-loading'
import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ANSWER_QUESTIONS = 'ANSWER_QUESTIONS'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'

export const getQuestions = (questions) => {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export const answerQuestion = ({ authedUser, qid, answer }) => {
    return {
        type: ANSWER_QUESTIONS,
        qid,
        answer,
        authedUser
    }
}

export const handleAnswerQuestion = (questionAnswer) => {
    return (dispatch) => {
        dispatch(showLoading())
        saveQuestionAnswer(questionAnswer)
            .then(data => dispatch(answerQuestion(questionAnswer)))
            .catch(error => console.log(error))
        dispatch(hideLoading())
    }
}

export const addQuestion = (question) => {
    return {
        type: ADD_QUESTIONS,
        question
    }
}

export const handleAddQuestion = (question) => {
    return (dispatch) => {
        dispatch(showLoading())
        saveQuestion(question).then(newQuestion => {
            dispatch(addQuestion(newQuestion))
            dispatch(hideLoading())
        })
            .catch(error => console.log(error))
    }
}
