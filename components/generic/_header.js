import React, { Component } from 'react'
import Link from 'next/link'
import { observer, inject } from 'mobx-react'
import { Login, Register } from '~/components/auth'

@inject('AuthStore') @observer
export default class Header extends Component {
  componentDidMount () {
    this.props.AuthStore.start()
  }

  componentWillUnmount () {
    this.props.AuthStore.stop()
  }
  render () {
    return (
      <header className='header'>
        <Link prefetch href='/'><a>Home</a></Link>
        <Link prefetch href='/diary'><a>Diary</a></Link>
        {this.props.AuthStore.user ?
          <Link prefetch href='/register'><a>Register</a></Link>
          :
          <Link prefetch href='/login'><a>Login</a></Link>
        }
      </header>
    )
  }
}
