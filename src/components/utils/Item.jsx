const Item = ({ id, color, shadow, title, text, img, btn, rating, price }) => {
  return (
    <>
      <div>
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
          <div>
            <div>
              <h1>{price}</h1>
            </div>
            <div>
              <h1>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='icon-style text-slate-900'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                    clipRule='evenodd'
                  />
                </svg>
                {rating}
              </h1>
            </div>
          </div>
          <div>
            <button type='button' className=''>
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
            <button type='button' className=''>
              {btn}
            </button>
          </div>
        </div>
        <div>
          <img src={img} alt='img/item-img' className='' />
        </div>
      </div>
    </>
  )
}

export default Item
