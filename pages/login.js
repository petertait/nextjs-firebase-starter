import React from 'react'
import { initializePage } from '~/utils'
import { Page } from '~/components/layouts'
import { Login } from '~/components/auth'

const About = () => (
  <Page>
    <Login />
  </Page>
)

export default initializePage(About)
