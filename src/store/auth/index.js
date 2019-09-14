const LOGIN = 'AUTH/LOGIN';
const LOGOUT = 'AUTH/LOGOUT';

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

const initialState = {
  isAuthorized: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isAuthorized: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isAuthorized: false,
      };
    }
    default: {
      return state;
    }
  }
}

export { initialState };
export default authReducer;