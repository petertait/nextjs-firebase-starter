import React from 'react'
import { initializePage } from '~/utils'
import { Page } from '~/components/layouts'
import { Register } from '~/components/auth'

const About = () => (
  <Page>
    <Register />
  </Page>
)

export default initializePage(About)
