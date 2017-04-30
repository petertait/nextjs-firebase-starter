import React from 'react'
import { initializePage } from '~/utils'
import { Page } from '~/components/layouts'
import { Register } from '~/components/auth'

const RegisterPage = () => (
  <Page>
    <Register />
  </Page>
)

export default initializePage(RegisterPage)
