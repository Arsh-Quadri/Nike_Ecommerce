import React from 'react'

const SocialLink = ({ icon }) => {
    return (
        <>
            <img src={icon} alt="icon/social" className='w-10 h-10 flex flex-col items-center cursor-pointer md:w-8 md:h-8 sm:w-6 sm:h-6 transition-all duration-200 hover:scale-125' />
        </>
    )
}

export default SocialLink