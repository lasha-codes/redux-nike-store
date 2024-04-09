/* eslint-disable react/prop-types */
const Clips = ({ clip, imgsrc }) => {
  return (
    <>
      <div className='relative h-28 w-32 rounded-xl overflow-hidden group transition-all duration-300 sm:w-16 lg:h-24 md:h-20 sm:h-14 cursor-pointer'>
        <img
          src={imgsrc}
          alt='img/clips'
          className='inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500'
        />
        <div className='blur-effect-theme absolute top-11 left-11 lg:top-8 sm:top-4 sm:left-5 lg:left-9 right-0 opacity-100 z-[100] w-8 h-8 md:w-3 md:h-3 flex items-center justify-center rounded-full'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='slate'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            className='icon-style md:w-3 md:h-3'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z'
            />
          </svg>
        </div>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className='absolute top-0 right-0 left-0 opacity-0 flex h-full w-full object-cover z-0 group-hover:z-50 group-hover:opacity-100 transition-all duration-500 rounded-xl'
        >
          <source type='video/mp4' src={clip} />
        </video>
      </div>
    </>
  )
}

export default Clips
