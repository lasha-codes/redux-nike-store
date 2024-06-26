import { useDispatch } from 'react-redux'
import {
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
} from '../../app/CartSlice'

const CartItem = ({
  // eslint-disable-next-line react/prop-types
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch()

  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        title,
        text,
        img,
        color,
        shadow,
        price,
        cartQuantity,
      })
    )
  }

  return (
    <>
      <div className='flex items-center justify-between w-full px-5'>
        <div className='flex items-center gap-5'>
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img/cart-item/${id}`}
              className='w-36 h-auto object-fill lg:w-28'
            />
          </div>
          <div className='grid items-center gap-4'>
            <div className='grid items-center leading-none'>
              <h1 className='font-medium text-lg text-slate-900 lg:text-sm'>
                {title}
              </h1>
              <p className='text-sm text-slate-800 lg:text-xs'>{text}</p>
            </div>
            <div className='flex items-center justify-around w-full'>
              <button
                onClick={() => {
                  dispatch(setDecreaseItemQTY({ name: title }))
                }}
                type='button'
                className='w-6 h-6 bg-theme-cart rounded text-white stroke-[2] lg:w-5 lg:h-5 active:scale-90 flex justify-center items-center'
              >
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
                    d='M5 12h14'
                  />
                </svg>
              </button>
              <div className='w-6 h-6 bg-theme-cart rounded text-white stroke-[2] lg:w-5 lg:h-5 flex text-xs justify-center items-center'>
                {cartQuantity}
              </div>
              <button
                type='button'
                className='w-6 h-6 bg-theme-cart rounded text-white stroke-[2] lg:w-5 lg:h-5 active:scale-90 flex justify-center items-center'
                onClick={() => {
                  dispatch(setIncreaseItemQTY({ name: title }))
                }}
              >
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
                    d='M12 4.5v15m7.5-7.5h-15'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <div className='grid-items-center justify-center'>
            <h1 className='text-lg lg:text-base text-slate-900 font-medium'>
              ${price * cartQuantity}
            </h1>
          </div>
          <div className='grid-items-center justify-center'>
            <button
              type='button'
              className='w-6 h-6 bg-theme-cart rounded text-white stroke-[2] lg:w-5 lg:h-5 active:scale-90 flex justify-center items-center'
              onClick={onRemoveItem}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem
