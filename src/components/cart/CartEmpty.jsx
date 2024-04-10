import emptyBag from '../../assets/emptybag.png'

const CartEmpty = () => {
  return (
    <>
      <div className='flex items-center justify-center flex-col h-screen px-11 text-center gap-7'>
        <img
          src={emptyBag}
          alt='emptybag/img'
          className='w-40 lg:w-36 sm:w-27 h-auto object-fill transition-all duration-300 hover:scale-110'
        />
        <button
          type='button'
          className='button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 text-slate-900'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
            />
          </svg>
          <span className=''>Back To Nike Store</span>
        </button>
      </div>
    </>
  )
}

export default CartEmpty
