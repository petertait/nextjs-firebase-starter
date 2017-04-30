import React from 'react'
import { initializePage } from '~/utils'
import { Page } from '~/components/layouts'
import { Login } from '~/components/auth'
import NoSSR from 'react-no-ssr'

const Loading = () => (<div>sddsfd...</div>)

const LoginPage = () => (
  <Page>
    <NoSSR onSSR={<Loading />}>
      <Login />
    </NoSSR>
  </Page>
)

export default initializePage(LoginPage)
