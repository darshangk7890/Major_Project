import React from 'react'

const AboutComponent = ({ index, title, subTitle }) => {
    return (
        <div className="flex items-start space-x-6">
            <span className="bg-blue-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                {index}
            </span>
            <div className='w-full flex flex-col'>
                <h2 className="text-xl font-semibold items-center">{title}</h2>
                <p className="text-aqua">
                    {subTitle}
                </p>
            </div>
        </div>
    )
}

export default AboutComponent
