import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Sub from '@/pages/Sub'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div className='home'>
        HomePage
      </div>
      <About/>
      <Sub/>
      <Contact/>
    </div>
  )
}

export default HomePage