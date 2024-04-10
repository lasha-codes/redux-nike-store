import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
}

const CartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1

        toast.success(`Item QTY Increased`)
      } else {
        const temp = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(temp)

        toast.success(`${action.payload.title} added to the cart`)
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter((item) => {
        return item.id !== action.payload.id
      })
      state.cartItems = removeItem
      localStorage.setItem('cart', JSON.stringify(state.cartItems))

      toast.success(`${action.payload.title} Removed from the cart`)
    },
    setIncreaseItemQTY: (state, action) => {
      const { name } = action.payload
      console.log(name)
      const targetItem = state.cartItems.find((item) => {
        return item.title === name
      })
      targetItem.cartQuantity += 1
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
      toast.success(`${name} Added to the cart`)
    },
    setDecreaseItemQTY: (state, action) => {},
    setClearCartItems: (state, actions) => {},
  },
})

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
} = CartSlice.actions

export default CartSlice.reducer
