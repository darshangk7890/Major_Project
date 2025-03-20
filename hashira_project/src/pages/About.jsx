import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='home flex w-full justify-center text-center'>
        <Image
          src="/Logo.png"
          height={50}
          width={300}
          alt="Visa Logo"
        />
        <div className="flex w-1/2 justify-center">
          <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold">
              Why Choose our <span className="text-blue-500">electric</span> car rental service?
            </h1>
            <div className="mt-6 space-y-6">
              <div className="flex items-start space-x-6">
                <span className="bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                  1
                </span>
                <div>
                  <h2 className="text-xl font-semibold">Eco-friendly</h2>
                  <p className="text-aqua">
                    By choosing our electric car rental service, you are reducing your carbon footprint
                    and doing your part to protect the environment.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                  2
                </span>
                <div>
                  <h2 className="text-xl font-semibold">Convenient</h2>
                  <p className="text-aqua">
                    Our electric cars are easy to drive and charge, with most models providing a
                    range of up to 200 miles on a single charge.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                  3
                </span>
                <div>
                  <h2 className="text-xl font-semibold">Cost-effective</h2>
                  <p className="text-aqua">
                    Our electric cars are easy to drive and charge, with most models providing a
                    range of up to 200 miles on a single charge.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                  4
                </span>
                <div>
                  <h2 className="text-xl font-semibold">Variety of models</h2>
                  <p className="text-aqua">
                    Electric cars are much cheaper to operate than gas-powered vehicles,
                    making them a cost-effective solution for your transportation.
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
