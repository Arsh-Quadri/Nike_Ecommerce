import React from 'react'

const Clip = ({ imgsrc, clip }) => {
    return (
        <>
            <div className='relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14 hover:scale-125'>
                <img src={imgsrc} alt="img/clip" className='flex h-full w-full object-cover absolute inset-0 opacity-100 z-10' />
                <video src={clip}
                    autoPlay={true}

                    loop={true}
                    muted={true}
                    playsInline={true}
                    className="absolute inset-0 opacity-0 flex h-full w-full object-cover group-hover:opacity-100 group-hover:z-20 transition-opacity duration-500"
                > </video>
            </div>
        </>
    )
}

export default Clip