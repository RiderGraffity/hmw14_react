import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  total_price: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload)

      let sum = 0
      for (let i = 0; i < state.items.length; i++) {
        sum = sum + state.items[i].price
      }
      state.total_price = sum
    },
    removeItem(state, action) {
      const itemId = action.payload
      state.items = state.items.filter(el => el.id !== itemId)
      state.total_price = state.items.reduce((acc, el) => acc + el.price, 0)
    },
    clearCart(state) {
      state.items = []
      state.total_price = 0
    }
  }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
