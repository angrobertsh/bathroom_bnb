export const login = (user) => {
  return {
    type: "LOGIN",
    user: user
  }
};

export const logout = () => {
  return {
    type: "LOGOUT"
  }
};

export const signup = (user) => {
  return {
    type: "SIGNUP",
    user: user
  }
};

export const receiveCurrentUser = (user) => {
  return {
    type: "RECEIVE_CURRENT_USER",
    user: user
  }
};

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
};

export const receiveErrors = (errors) => {
  return {
    type: "RECEIVE_ERRORS"
  }
};
