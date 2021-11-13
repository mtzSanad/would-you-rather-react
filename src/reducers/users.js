import { ADD_QUESTIONS, ANSWER_QUESTIONS } from '../actions/questions'
import { GET_USERS } from '../actions/users'

const users = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS:
            return { ...action.users }
        case ANSWER_QUESTIONS:
            //In case of answering question we should edit user answeres for leaderboard to work properly
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case ADD_QUESTIONS:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: [...state[action.question.author].questions, ...[action.question.id]]
                }
            }
        default:
            return state
    }
}

export default users