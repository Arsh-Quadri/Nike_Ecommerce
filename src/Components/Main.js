import React from 'react'
import Clip from './utils/Clip'
import SocialLink from './utils/SocialLink'


const Main = ({ heroapi: { title, subtitle, btntext, img, sociallinks, videos } }) => {

    return (
        <div className='relative h-auto w-auto flex flex-col'>
            <div className='bg-theme clip-path h-[90vh] lg:h-[80vh] md:h-[70vh] sm:h-[60vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
            <div className='relative z-20 opacity-100 grid items-center justify-items-center nike-container'>
                <div className='grid items-center justify-items-center mt-24 lg:mt-20'>
                    <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-bold filter drop-shadow-sm text-slate-200'>{title}</h1>
                    <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold py-1 filter drop-shadow-sm text-slate-200'>{subtitle}</h1>
                    <button type='button' className='button-theme bg-slate-300  rounded-xl mb-9 my-3' >{btntext}</button>
                    <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[5%] xl:left-0'>
                        {videos?.map((val, i) => (
                            <Clip
                                key={i}
                                imgsrc={val.imgsrc}
                                clip={val.clip}
                            />
                        ))}
                    </div>
                    <div className='grid items-center absolute top-[37vh] lg:top-[27vh] right-0 gap-5 md:gap-3'>
                        {sociallinks?.map((val, i) => (
                            <SocialLink
                                key={i}
                                icon={val.icon}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <img src={img} alt="hero-img/img" className='w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] hover:rotate-0' />
                </div>
            </div>

        </div>
    )
}

export default Main