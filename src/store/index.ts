import { configureStore } from '@reduxjs/toolkit'
import authReducer from './modules/auth'
import testApi from './modules/test'

const store = configureStore({
  reducer: {
    auth: authReducer,
    [testApi.reducerPath]: testApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApi.middleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
