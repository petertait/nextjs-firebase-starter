import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

function setErrorMsg(error) {
  return {
    registerError: error
  }
}

@inject('AuthStore') @observer
export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.AuthStore.register(this.email.value, this.password.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }

  render () {
    return (
      <div>
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
            this.state.registerError &&
            <div>
              <span aria-hidden="true"></span>
              {this.state.registerError}
            </div>
          }
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}
