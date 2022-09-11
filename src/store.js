import { configureStore } from '@reduxjs/toolkit'
import adReducer from "./slices/adSlice"

export default configureStore({
  reducer: {
    ad:adReducer
  },
});