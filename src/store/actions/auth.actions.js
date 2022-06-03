import { loginService, logoutService } from "../../services/auth.service"
import { LOGIN, REGISTER, LOGOUT } from "../actionTypes/index"


export const login = (params) => async dispatch => {
  try {
    const data = await loginService(params)
    dispatch({ type: LOGIN, payload: data })
    return data
  } catch (err) {
    throw err
  }
}

// export const register = (params, history) => async dispatch => {
//   try {
//     const data = await AuthService.register(params)
//     dispatch({ type: REGISTER, payload: data })
//     history.push('/dashboard')
//   } catch (err) {
//     throw err
//   }
// }

export const logout = (params, socket,) => async dispatch => {
  try {
    // const data = await logoutService(params)
    socket.emit("endGuestChat", "guest", { conversation: JSON.parse(localStorage.getItem('akits-pkteam-storage')).currentConversation, sender: JSON.parse(localStorage.getItem('akits-pkteam-storage')).user.id })
    // dispatch({ type: LOGOUT })
  } catch (err) {
    throw err
  }
}