import React from 'react'

const Footer = ({ footerAPI: { title, links } }) => {
    return (
        <>
            <footer className='bg-theme pt-7 pb-5'>
                <div className='nike-container text-slate-200'>
                    <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5 ml-[28%] xl:ml-[20%] lg:ml-[15%] md:ml-[4%] sm:ml-[5%] xsm:ml-0'>
                        {title && title.map((val, i) => (
                            <div key={i} className="grid items-center">
                                <h1 className='text-lg lg:text-base md:text-sm uppercase font-semibold'>{val.title}</h1>
                            </div>

                        ))}

                        {links.map((list, i) => (
                            <ul key={i} className="grid items-center gap-1">
                                {list.map((link, i) => (
                                    <li key={i} className="text-sm sm:text-xs">{link.link}</li>
                                ))}
                            </ul>
                        ))}

                    </div>
                    <div className='mt-7 text-center'><p className='text-sm md:text-center'>Copyright<sup className='text-base font-bold'>&copy;</sup>All Reserved Rights 2022<span className='font-semibold'>by ARSH QUADRI</span></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer