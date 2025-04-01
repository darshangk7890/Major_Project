"use client"
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Sub from '@/pages/Sub'
import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Image from 'next/image'
import Link from 'next/link'
import Loader from './Loader'
import Footer from './Footer'

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Show loader for 3 seconds
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="absolute top-0 w-full left-0 animated-bg -z-10">
      <Nav />
      <br></br>
      <div className='contact flex w-full justify-center  h-30vh'>
        <div className="flex-col text-3xl justify-center min-h-screen">
        <h2 className="text-4xl font-bold text-white mb-4 text-justify pl-6 mx-10 "><span className="gradient-text">HASHIRAS</span></h2>
          <p className='text-2xl text-justify pl-6 mx-10'>
            The <span>Hashiras</span> provides a streamlined service for visa approval and the status check of the visa application.
          </p>
          <br></br>
          <div className="text-center">
          <Link href="/sign-up" className="get-started-btn">
            Get Started
          </Link>
          </div>
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
      <Footer />
    </div>
  )
}

export default HomePage