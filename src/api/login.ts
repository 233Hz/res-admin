import { LoginForm } from '@/types/login'
import { post } from '@/utils/request'

enum Api {
  LOGIN = '/login'
}

export const login = (form: LoginForm) => post(Api.LOGIN, form)
