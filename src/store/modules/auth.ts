import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getTokenInfo } from '@/utils/auth'
import { LoginForm } from '@/types/login'
import { login } from '@/api/login'
import { TokenVO } from '@/types/global'

interface AuthState {
  tokenInfo: TokenVO | null
}

const initialState: AuthState = {
  tokenInfo: getTokenInfo() || null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokenInfo: (state, action: PayloadAction<TokenVO>) => {
      state.tokenInfo = action.payload
    }
  }
})

const { setTokenInfo } = authSlice.actions

export const userLogin = (loginForm: LoginForm) => {
  return async (dispatch: Dispatch<PayloadAction<TokenVO>>) => {
    const res = await login(loginForm)
    localStorage.setItem('tokenInfo', JSON.stringify(res.tokenInfo))
    dispatch(setTokenInfo(res.tokenInfo))
    return res
  }
}
export { setTokenInfo }

const reducer = authSlice.reducer

export default reducer
