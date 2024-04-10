/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { setCloseCart, setClearCartItems } from '../app/CartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const ifCartState = useSelector((state) => state.cart.cartState)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const { subtotal } = useSelector((state) => state.cart)

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    )
  }

  return (
    <>
      <div
        className={`fixed top-0 right-0 bottom-0 blur-effect-theme h-screen opacity-100 z-[200] w-[70vw] md:w-full transition-all duration-300 ${
          ifCartState
            ? '!opacity-100 w-full translate-x-0'
            : '!opacity-0 w-0 pointer-events-none invisible translate-x-8'
        }`}
      >
        <div className={`blue-effect-theme h-screen w-full absolute right-0`}>
          <CartCount onCartToggle={onCartToggle} />

          {cartItems.length === 0 ? (
            <CartEmpty />
          ) : (
            <div className='py-10'>
              <div className='flex cart-container items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[85vh] scroll-smooth py-3'>
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item}></CartItem>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className='fixed bottom-0 bg-white w-full px-5 py-2 grid items-center'>
          <div className='flex items-center justify-between'>
            <h1 className='text-base font-semibold uppercase'>SubTotal</h1>
            <h1 className='text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5'>
              {subtotal}
            </h1>
          </div>
          <div className='grid items-center gap-2'>
            <p className='text-sm font-medium text-center'>
              Taxes abd Shipping Will Calculate At Shipping
            </p>
            <button
              onClick={() => dispatch(setClearCartItems())}
              type='button'
              className='button-theme bg-theme-cart text-white'
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
