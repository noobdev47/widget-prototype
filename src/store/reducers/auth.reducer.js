import { LOGIN, LOGOUT, REGISTER } from "../action_types/index"

const initialState = {
  token: JSON.parse(localStorage.getItem('akits-pkteam-storage')) !== null ? JSON.parse(localStorage.getItem('akits-pkteam-storage')).token || '' : '',
  isLoggedIn: JSON.parse(localStorage.getItem('akits-pkteam-storage')) !== null ? !!JSON.parse(localStorage.getItem('akits-pkteam-storage')).token : '',
  expiresIn: JSON.parse(localStorage.getItem('akits-pkteam-storage')) !== null ? JSON.parse(localStorage.getItem('akits-pkteam-storage')).expiresIn || '' : '',
  user: JSON.parse(localStorage.getItem('akits-pkteam-storage')) !== null ? JSON.parse(localStorage.getItem('akits-pkteam-storage')).user || {} : '',
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        token: payload.access.token,
        expiresIn: payload.access.expires,
      }

    case REGISTER:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        token: payload.access.token,
        expiresIn: payload.access.expires,
      }

    // case LOGOUT:
    //   return {
    //     ...state,
    //     user: {},
    //     token: '',
    //     expiresIn: '',
    //     isLoggedIn: false
    //   }

    default: return state
  }
}

export default authReducer