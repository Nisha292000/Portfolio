import React from 'react'
import Profile from './Profile'
import Main from './Main'
import Education from './Education'
import Projects from './Projects'
import Contact from './Contact'
import Career from './Career'

const Component = () => {
  return (
    <>
      <Main />
      <Profile />
      <Education/>
      {/* <Career/> */}
      <Projects />
      <Contact />
    </>
  )
}

export default Component
