import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { handleAddQuestion } from '../../actions/questions';

class NewQuestion extends Component {
    state = {
        input1: '',
        input2: ''
    }

    handleInputChange = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleAddQuestion({ optionOneText: this.state.input1, optionTwoText: this.state.input2, author: this.props.authedUser })
        this.props.history.push('/')
    }

    render() {
        return (
            <section className={`question-card new`}>
                <div className="card-header">{`Would You Rather`}</div>
                <dir className="card-add">
                    <form onSubmit={this.handleSubmit} className="card-details">
                        <p>Would You Rather</p>
                        <input required type="text" id="option1" placeholder="Write option 1" name="input1" value={this.state.input1} onChange={this.handleInputChange} />
                        <p>OR</p>
                        <input required type="text" id="option2" placeholder="Write option 2" name="input2" value={this.state.input2} onChange={this.handleInputChange} />
                        <input type="submit" value="Create New Question" />
                    </form>

                </dir>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return { authedUser: state.authedUser }
}

const mapDistpatchToProps = (dispatch) => {
    return { handleAddQuestion: (question) => dispatch(handleAddQuestion(question)) }
}

export default withRouter(connect(mapStateToProps, mapDistpatchToProps)(NewQuestion))