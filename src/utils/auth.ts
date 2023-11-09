import { TokenVO } from '@/types/global'

const TOKEN_INFO_KEY = 'TOKEN_INFO'

export const getTokenInfo = () => {
  return (localStorage.getItem(TOKEN_INFO_KEY) as unknown as TokenVO) || null
}

export const setTokenInfo = (tokenInfo: TokenVO) => {
  localStorage.setItem(TOKEN_INFO_KEY, JSON.stringify(tokenInfo))
}

export const removeTokenInfo = () => {
  localStorage.removeItem(TOKEN_INFO_KEY)
}

export const getToken = () => {
  return getTokenInfo()?.tokenValue
}

export const getTokenName = () => {
  return getTokenInfo()?.tokenName
}

export const hasToken = () => {
  return !!getTokenInfo().tokenValue
}
