import { configureStore } from '@reduxjs/toolkit'
import timerReducer from './timer/timerSlice';
export default configureStore({
  reducer: {
    timer: timerReducer,
  },
})