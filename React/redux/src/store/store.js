import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../reducer/ToDoSlice.js'


export default configureStore({
  reducer: {
    todo: todoSlice,
  },
})