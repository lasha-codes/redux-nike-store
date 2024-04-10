const CartCount = () => {
  return (
    <>
      <div className='bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full'>
        <div className='flex items-center gap-3'>
          <div className='grid items-center cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5'
              />
            </svg>
          </div>
          <div className='grid items-center text-slate-900 hover:text-orange-500 stroke-[2] transition-all duration-300'>
            <h1 className='text-base font-medium text-slate-900 flex items-center gap-2'>
              Your Cart
              <span className='bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs'>
                (items)
              </span>
            </h1>
          </div>
        </div>
        <div className='flex items-center'>
          <button
            type='button'
            className='rounded bg-theme-cart active:scale-90 p-0.5'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 text-white stroke-[2]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default CartCount
