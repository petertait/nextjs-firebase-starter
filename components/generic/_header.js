import React from 'react'
import Link from 'next/prefetch'

const Header = () => (
  <header className='header'>
    <Link href='/'><a>Home</a></Link>
    <Link href='/diary'><a>Diary</a></Link>
    <Link href='/login'><a>Login</a></Link>
  </header>
)

export default Header
