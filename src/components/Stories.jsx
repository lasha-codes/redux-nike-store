import Title from './utils/Title'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

/* eslint-disable react/prop-types */
const Stories = ({ story: { title, news } }) => {
  return (
    <>
      <div className='nike-container mb-11'>
        <Title title={title} />
        <div className=''>
          <Splide>
            {news.map((val, i) => (
              <SplideSlide key={i} className='mb-0.5'>
                <div>
                  <div>
                    <img src={val.img} alt={`img/story/${i}`} className='' />
                  </div>
                  <div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='icon-style'
                      >
                        <path d='m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z' />
                      </svg>
                      <span>{val.like}</span>
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='icon-style'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                        />
                      </svg>

                      <span>{val.time}</span>
                    </div>
                    <div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-6 h-6'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5'
                          />
                        </svg>
                      </div>
                      <span>{val.by}</span>
                    </div>
                  </div>
                  <div>
                    <h1>{val.title}</h1>
                    <p>{val.text}</p>
                  </div>
                  <div>
                    <a href={val.url}>{val.btn}</a>
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
