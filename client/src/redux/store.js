import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import randomiserReducer from './randomiser/randomiserSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    randomiser: randomiserReducer
  }
})