import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [navState, setNavState] = useState(false)

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true)
    } else {
      setNavState(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll)
    return () => {
      window.removeEventListener('scroll', onNavScroll)
    }
  }, [])

  return (
    <>
      <header
        className={`absolute top-7 left-0 right-0 opacity-100 z-[200] transition-all duration-300 ${
          !navState
            ? 'opacity-100 z-50'
            : '!fixed !top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-50 blur-effect-theme'
        }`}
      >
        <nav className='flex items-center justify-between nike-container'>
          <div className='flex items-center'>
            <img
              src={logo}
              alt='logo/img'
              className={`w-16 h-auto ${navState && 'filter brightness-0'}`}
            />
          </div>
          <ul className='flex items-center justify-center gap-2'>
            <li className='grid items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className={`icon-style transition-all duration-300 ${
                  navState && 'text-slate-900'
                }`}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
            </li>
            <li className='grid items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className={`icon-style transition-all duration-300 ${
                  navState && 'text-slate-900'
                }`}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                />
              </svg>
            </li>
            <li className='grid items-center'>
              <button
                type='button'
                className='border-none outline-none active:scale-110 transition-all duration-300 relative'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className={`icon-style transition-all duration-300 ${
                    navState && 'text-slate-900'
                  }`}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                  />
                </svg>
                <div
                  className={`absolute top-4 right-1 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 duration-300 ${
                    navState
                      ? 'bg-slate-900 text-slate-100 shadow-slate-900'
                      : 'bg-slate-100 text-slate-900 shadow-slate-100'
                  }`}
                >
                  0
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
