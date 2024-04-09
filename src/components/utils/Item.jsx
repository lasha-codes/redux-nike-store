/* eslint-disable react/prop-types */
const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105 ${
          ifExists ? 'justify-items-start h-48' : 'justify-items-center'
        }`}
      >
        <div
          className={`grid items-center ${
            ifExists ? 'justify-items-start' : 'justify-items-center'
          }`}
        >
          <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>
            {title}
          </h1>
          <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>
            {text}
          </p>
          <div className='flex items-center justify-between w-28 my-2'>
            <div className='flex items-center bg-white/80 px-1 rounded blur-effect-theme'>
              <h1 className='text-black text-sm font-medium'>${price}</h1>
            </div>
            <div>
              <h1 className='flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='icon-style w-5 h-5 md:w-4 md:h-4'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                    clipRule='evenodd'
                  />
                </svg>

                <h1 className='md:text-sm font-normal text-slate-100'>
                  {rating}
                </h1>
              </h1>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <button
              type='button'
              className='bg-white opacity-90 blur-effect-theme button-theme p-0.5 shadow-slate-200'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='icon-style text-slate-900'
              >
                <path
                  fillRule='evenodd'
                  d='M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <button
              type='button'
              className='bg-white opacity-90 blur-effect-theme button-theme px-2 py-1 shadow-slate-200 text-sm text-black'
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center  ${
            ifExists ? 'absolute top-5 right-1' : 'justify-center'
          }`}
        >
          <img
            src={img}
            alt={`img/item-img${id}`}
            className={`transitions-theme hover:-rotate-12 ${
              ifExists ? 'h-auto w-64 md:w-56 -rotate-[35deg]' : 'h-36 w-64'
            }`}
          />
        </div>
      </div>
    </>
  )
}

export default Item
