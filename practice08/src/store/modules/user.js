const USER_LOGIN = 'user/LOGIN';
const USER_LOGOUT = 'user/LOGOUT';

export function LOGIN({ email, password }) {
  return {
    type: USER_LOGIN,
    payload: {
      email,
      password,
    },
  }
}

export function LOGOUT() {
  return {
    type: USER_LOGOUT
  }
}

const initialState = {
  user: null
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload
      }
    case USER_LOGOUT:


  }
}