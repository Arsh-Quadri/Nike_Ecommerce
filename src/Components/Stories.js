import React from 'react'
import Title from './utils/Title'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Stories = ({ story: { title, news } }) => {
    const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
            1200: { perPage: 3 },
            991: { perPage: 2.3 },
            768: { perPage: 2 },
            500: { perPage: 1.3 },
            425: { perPage: 1 },
        },
    };
    const truncateString = (text, num) => {
        if (text.length > num) {
            return text.slice(0, num) + '...';
        }
        else {
            return text;
        }
    }

    return (
        <>
            <div className='nike-container mt-11'>
                <Title title={title} />
                <div className='mt-7'>
                    <Splide options={splideOptions}>
                        {news.map((val, i) => (
                            <SplideSlide key={i} className="mb-0.5">
                                <div className='relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200'>
                                    <div className='flex items-center justify-center'>
                                        <img src={val.img} alt="/" className='w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg' />
                                    </div>
                                    <div className='flex items-center justify-between w-full px-4'>
                                        <div className='flex items-center gap-0.5' >
                                            <i className="ri-heart-fill text-red-500 icon-style w-5 h-5"></i><span className='text-xs font-bold'>{val.like}</span>
                                        </div>
                                        <div className='flex items-center gap-0.5'>
                                            <i className="ri-time-line icon-style w-4 h-5 text-slate-900"></i><span className='text-xs font-bold'>{val.time}</span>
                                        </div>
                                        <div className='flex items-center gap-0.5'>
                                            <i className="ri-hashtag icon-style w-4 h-5 text-blue-500"></i><span className='text-xs font-bold text-blue-600'>{val.by}</span>
                                        </div>
                                    </div>
                                    <div className='grid items-center justify-items-start px-4'>
                                        <h1 className='text-base font-semibold lg:text-sm'>{val.title}</h1>
                                        <p className='text-sm text-justify lg:text-xs'>{truncateString(val.text, 175)}</p>
                                    </div>
                                    <div className='flex items-center justify-center px-4 w-full'>
                                        <a target='_blank' className='w-full bg-gradient-to-b from-slate-800 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme' href={val.url}>{val.btn}</a>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>

                </div>

            </div>

        </>
    )
}

export default Stories