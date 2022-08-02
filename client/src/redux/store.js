import { configureStore } from '@reduxjs/toolkit'
import randomiserReducer from './randomiser/randomiserSlice'

export default configureStore({
  reducer: {
    randomiser: randomiserReducer
  }
})