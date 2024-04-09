import Title from './utils/Title'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { truncate } from 'lodash'

/* eslint-disable react/prop-types */
const Stories = ({ story: { title, news } }) => {
  const slideOptions = {
    perPage: 4,
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
  }
  return (
    <>
      <div className='nike-container mb-11'>
        <Title title={title} />
        <div className='mt-7'>
          <Splide options={slideOptions}>
            {news.map((val, i) => (
              <SplideSlide key={i} className='mb-0.5'>
                <div className='relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200'>
                  <div className='flex items-center justify-center'>
                    <img
                      src={val.img}
                      alt={`img/story/${i}`}
                      className='w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tr-lg rounded-tl-lg'
                    />
                  </div>
                  <div className='flex items-center justify-between w-fu;; px-4'>
                    <div className='flex items-center gap-0.5'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='icon-style text-red-500 w-5 h-5'
                      >
                        <path d='m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z' />
                      </svg>
                      <span className='text-xl font-bold'>{val.like}</span>
                    </div>
                    <div className='flex items-center gap-0.5'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='icon-style w-4 h-4 text-black'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                        />
                      </svg>

                      <span className='text-xs font-bold'>{val.time}</span>
                    </div>
                    <div className='flex items-center gap-0.5'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='icon-style text-blue-600'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5'
                          />
                        </svg>
                      </div>
                      <span className='text-xs font-bold text-blue-600'>
                        {val.by}
                      </span>
                    </div>
                  </div>
                  <div className='grid items-center justify-items-start px-4'>
                    <h1 className='text-base font-semibold lg:text-sm'>
                      {val.title}
                    </h1>
                    <p className='text-sm text-justify lg:text-xs'>
                      {truncate(val.text, { length: 175 })}
                    </p>
                  </div>
                  <div className='flex items-center justify-center px-4 w-full'>
                    <a
                      href={val.url}
                      target='_blank'
                      role='button'
                      className='w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme'
                    >
                      {val.btn}
                    </a>
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
