import CartCount from './cart/CartCount'
import CartEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { setCloseCart } from '../app/CartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const ifCartState = useSelector((state) => state.cart.cartState)

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
        className={`fixed top-0  right-0 bottom-0 blur-effect-theme h-screen opacity-100 z-[200] w-[70vw] md:w-full ${
          ifCartState
            ? 'opacity-100 w-full translate-x-0'
            : 'opacity-0 w-0 pointer-events-none invisible translate-x-8'
        }`}
      >
        <div className={`blue-effect-theme h-screen w-full absolute right-0`}>
          <CartCount onCartToggle={onCartToggle} />
          <CartEmpty />
          <CartItem />
        </div>
      </div>
    </>
  )
}

export default Cart
