import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getToken } from '@/utils/auth'

interface AuthState {
  token: string | null
}

const initialState: AuthState = {
  token: getToken() || null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    }
  }
})

const { setAuth } = authSlice.actions

export { setAuth }

const reducer = authSlice.reducer

export default reducer
