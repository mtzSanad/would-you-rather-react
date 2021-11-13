export const SIGN_USER_IN = 'SIGN_USER_IN'

export const SIGN_USER_OUT = 'SIGN_USER_OUT'

export const signUserIn = (authedUser) => {
    return {
        type: SIGN_USER_IN,
        authedUser
    }
}

export const signUserOut = () => {
    return {
        type: SIGN_USER_OUT
    }
}