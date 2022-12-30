import React from 'react'

const Title = ({ title }) => {
    return (
        <div className='grid items-center'>
            <h1 className='text-4xl lg:text-3xl md:text-2xl sm:text-xl font-[600] text-slate-900 filter drop-shadow-lg'>{title}</h1>
        </div>
    )
}

export default Title