import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA.js'

//Getting the initial data of application as an object of users and questions
export const getInitialData = () => {
    return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({ users, questions }))
}

export const saveQuestion = (question) => _saveQuestion(question)

//This object will be destructure to extract  authedUser, qid, answer from passed object
export const saveQuestionAnswer = (questionAnswer) => _saveQuestionAnswer(questionAnswer)