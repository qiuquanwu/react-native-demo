import { createSlice,configureStore } from '@reduxjs/toolkit'

export const count = createSlice({
  name: 'store',
  initialState: {
    value: 0
  },
  reducers: {
    add: state => {
      state.value += 1
    },
    subtract: state => {
      state.value -= 1
    },
    reset: (state, action) => {
      state.value = action.payload
    }
  }
})
 
export const { add, subtract, reset } = count.actions

// export default store.reducer

const store = configureStore({
  reducer: {
    count:count.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store