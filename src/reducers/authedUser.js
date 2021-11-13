import { SIGN_USER_IN, SIGN_USER_OUT } from '../actions/authedUser'

const authedUser = (state = null, action) => {
    switch (action.type) {
        case SIGN_USER_IN:
            return action.authedUser
        case SIGN_USER_OUT:
            return null
        default:
            return state
    }
}

export default authedUser