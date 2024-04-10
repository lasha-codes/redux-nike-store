import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  subtotal: JSON.parse(parseInt(localStorage.getItem('subtotal'))),
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
        state.subtotal += Number(state.cartItems[itemIndex].price)
        localStorage.setItem('subtotal', JSON.stringify(Number(state.subtotal)))

        toast.success(`Item QTY Increased`)
      } else {
        const temp = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(temp)
        state.subtotal += action.payload.price
        localStorage.setItem('subtotal', JSON.stringify(Number(state.subtotal)))
        toast.success(`${action.payload.title} added to the cart`)
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },

    setRemoveItemFromCart: (state, action) => {
      const removedItem = state.cartItems.find((item) => {
        return item.id === action.payload.id
      })
      state.subtotal -= Number(removedItem.price * removedItem.cartQuantity)
      localStorage.setItem('subtotal', JSON.stringify(Number(state.subtotal)))
      const removeItem = state.cartItems.filter((item) => {
        return item.id !== action.payload.id
      })
      state.cartItems = removeItem
      localStorage.setItem('cart', JSON.stringify(state.cartItems))

      toast.success(`${action.payload.title} Removed from the cart`)
    },

    setIncreaseItemQTY: (state, action) => {
      const { name } = action.payload
      const targetItem = state.cartItems.find((item) => {
        return item.title === name
      })
      state.subtotal += Number(targetItem.price)
      localStorage.setItem('subtotal', JSON.stringify(Number(state.subtotal)))
      targetItem.cartQuantity += 1
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
      toast.success(`${name} QTY increased`)
    },

    setDecreaseItemQTY: (state, action) => {
      const { name } = action.payload

      const targetItem = state.cartItems.find((item) => {
        return item.title === name
      })
      state.subtotal -= Number(targetItem.price)
      localStorage.setItem('subtotal', JSON.stringify(Number(state.subtotal)))
      console.log(targetItem)
      if (targetItem.cartQuantity === 1) {
        state.cartItems = state.cartItems.filter((item) => {
          return name !== item.title
        })
        toast.success(`${name} removed from the cart`)
      } else {
        targetItem.cartQuantity -= 1
        toast.success(`${name} QTY decreased`)
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems))
    },

    setClearCartItems: (state) => {
      if (state.cartItems.length < 1) {
        toast.error('Cart is empty')
      } else {
        state.cartItems = []
        state.subtotal = 0
        localStorage.setItem('subtotal', JSON.stringify(Number(state.subtotal)))
        localStorage.setItem('cart', JSON.stringify(state.cartItems))
        toast.success('U have cleared the cart')
      }
    },
  },
})

export const {
  setOpenCart,
  setCloseCart,
  setAddItemToCart,
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCartItems,
} = CartSlice.actions

export default CartSlice.reducer
