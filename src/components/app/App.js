import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../../actions/shared';
import AppHeader from '../appheader/AppHeader';
import Login from '../login/Login';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import QuestionsList from '../questions/QuestionsList';
import QuestionResult from '../questions/QuestionResult';
import NewQuestion from '../questions/NewQuestion';
import NotFound from './NotFound';
import LoadingBar from 'react-redux-loading';
import LeaderBoard from '../leaderboard/LeaderBoard';

class App extends Component {

  componentDidMount = () => {
    this.props.handleInitialData()
  }

  render = () => {
    const { authedUser } = this.props
    return (
      <Router>
        <>
          <AppHeader />
          <LoadingBar />
          <div className="container">
            {
              !authedUser ? <Login /> : (
                <Switch>
                  <Route path="/" exact component={QuestionsList}>
                  </Route>
                  <Route path="/questions/:id" component={QuestionResult}>
                  </Route>
                  <Route path="/add" component={NewQuestion}>
                  </Route>
                  <Route path="/leaderboard" component={LeaderBoard}>
                  </Route>
                  <Route component={NotFound}>
                  </Route>
                </Switch>
              )
            }
          </div>
        </>
      </Router >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authedUser: state.authedUser,
    users: state.users
  }
}

const mapDistpatchToProps = (dispatch) => {
  return {
    handleInitialData: () => dispatch(handleInitialData())
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(App)
