import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('AuthStore') @observer
export default class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.AuthStore.signIn(this.email.value, this.password.value)
  }

  resetPassword = () => {
    this.props.AuthStore.resetPassword(this.email.value)
  }

  componentDidMount () {
    this.state.AuthStore.start()
  }

  componentWillUnmount () {
    this.state.AuthStore.stop()
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
            <div role="alert">
              <span aria-hidden="true"></span>
              <a href="#" onClick={this.resetPassword}>Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
          </form>
        }
      </div>
    )
  }
}
