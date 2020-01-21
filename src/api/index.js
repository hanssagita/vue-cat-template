import { api } from '@/config'
import { postDataViaApi } from '@/utils/HttpApi'

const login = (callback, errorHandler, data) => {
  postDataViaApi(api.user(data), callback, errorHandler)
}

export {
  login
}
