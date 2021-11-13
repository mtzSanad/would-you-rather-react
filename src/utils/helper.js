export const getUserAvatarUrl = (users, userId) => {
    return (userId && Object.keys(users).length !== 0) ? users[userId].avatarURL : '../../../asset/empty.png'
}

//Method to retriev user information passing userId
export const getUserInfo = (users, userId) => {
    return (userId && Object.keys(users).length !== 0) ? users[userId] : {}
}

//Helper method to know if the user answered the question or not and if he answered the question result is returned
export const getQuestionResult = (userId, question = {}) => {
    if (question.optionOne && (question.optionOne.votes.includes(userId) || question.optionTwo.votes.includes(userId))) {
        const optionOne = question.optionOne.votes.length
        const optionTwo = question.optionTwo.votes.length
        const total = optionOne + optionTwo
        const optionOnePercentage = Math.round((optionOne * 100 / total) * 100) / 100
        const optionTwoPercentage = Math.round((optionTwo * 100 / total) * 100) / 100
        return {
            optionOne,
            optionOnePercentage,
            optionTwo,
            optionTwoPercentage,
            total,
        }
    } else {
        return {}
    }
}

//Helper method to get question with id
export const getQuestionData = (questionId, questions) => {
    return questions[questionId]
}