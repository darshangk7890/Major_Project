import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='home flex justify-center '>
        <Image
          src="/Logo.png"
          height={50}
          width={300}
          alt="Visa Logo"
        />
        <div className="flex w-full justify-center text-center pr-10 items-center ">
          <div className="max-w-5xl mx-auto p-6 text-center">
            <h1 className="text-3xl font-bold">
              Why should you choose <span className="text-blue-500">Hashiras</span>?
            </h1>
            <div className="mt-6 space-y-6 items-center">
              <div className="flex items-start space-x-6">
                <span className="bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                  1
                </span>
                <div className='w-full flex flex-col'>
                  <h2 className="text-xl font-semibold items-center">Increased Approval Chances</h2>
                  <p className="text-aqua">
                    Utilizes MLOps to analyze past visa trends, predict approval chances, and identify common rejection reasons with actionable suggestions for improvement.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                  2
                </span>
                <div className='w-full flex flex-col'>
                  <h2 className="text-xl font-semibold">Time & Cost Efficiency</h2>
                  <p className="text-aqua">
                    Reduces re-application fees by minimizing rejections.
                    Provides instant assessments, avoiding long consultation waits.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                  3
                </span>
                <div className='w-full flex flex-col'>
                  <h2 className="text-xl font-semibold">Personalized Application Enhancement</h2>
                  <p className="text-aqua">
                    Reviews documents and highlights weak points.
                    Offers customized suggestions to improve success rates.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                  4
                </span>
                <div className='w-full flex flex-col'>
                  <h2 className="text-xl font-semibold"> Fraud Prevention & Compliance Checks</h2>
                  <p className="text-aqua">
                    Detects fake documents and warns users.
                    Ensures applications comply with visa guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
