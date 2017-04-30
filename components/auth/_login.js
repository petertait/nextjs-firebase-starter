import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

function setErrorMsg(error) {
  return {
    registerError: error
  }
}

@inject('AuthStore') @observer
export default class Login extends Component {
  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault()
    signIn(this.email.value, this.password.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
  }
  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }

  render () {
    return (
      <div>
        {this.props.AuthStore.loading ? "loading" : "ready"}
        {this.props.AuthStore && this.props.AuthStore.user ?
          <button onClick={() => this.props.AuthStore.signOut()}>Logout</button>
          :
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Email</label>
              <input ref={(email) => this.email = email} placeholder="Email"/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="Password" ref={(password) => this.password = password} />
            </div>
            {
              this.state.loginMessage &&
              <div role="alert">
                <span aria-hidden="true"></span>
                {this.state.loginMessage} <a href="#" onClick={this.resetPassword}>Forgot Password?</a>
              </div>
            }
            <button type="submit">Login</button>
          </form>
        }
      </div>
    )
  }
}
