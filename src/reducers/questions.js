import { ADD_QUESTIONS, ANSWER_QUESTIONS, GET_QUESTIONS } from '../actions/questions'

const questions = (state = {}, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return { ...action.questions }
        case ANSWER_QUESTIONS:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    optionOne: {
                        ...state[action.qid].optionOne,
                        votes: action.answer === 'optionOne' ? [...state[action.qid].optionOne.votes, action.authedUser] : [...state[action.qid].optionOne.votes]
                    },
                    optionTwo: {
                        ...state[action.qid].optionTwo,
                        votes: action.answer === 'optionTwo' ? [...state[action.qid].optionTwo.votes, action.authedUser] : [...state[action.qid].optionTwo.votes]
                    }
                }
            }
        case ADD_QUESTIONS:
            return {
                ...state,
                [action.question.id]: {
                    ...action.question
                }
            }
        default:
            return state
    }
}

export default questions