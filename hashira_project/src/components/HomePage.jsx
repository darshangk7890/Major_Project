import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Sub from '@/pages/Sub'
import React from 'react'
import Nav from './Nav'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="absolute top-0 w-full left-0 animated-bg -z-10">
      <Nav />
      <br></br>
      <div className='contact flex w-full justify-center text-center h-30vh'>
        <div className="flex-col text-3xl justify-center min-h-screen">
          <p className='text-2xl text-justify pl-6 mx-10'>
            The <span className='gradient-text'>Hashiras</span> provides a streamlined service for visa approval and the status check of the visa application.
          </p>
          <Link href="/sign-in" className="get-started-btn">
            Get Started
          </Link>
        </div>
        <div className="home flex w-1/2 justify-center">
          <Image
            src="/Logo.png"
            height={50}
            width={300}
            alt="Visa Logo"
          />
        </div>
      </div>
      <About />
      <Sub />
      <Contact />
    </div>
  )
}

export default HomePage