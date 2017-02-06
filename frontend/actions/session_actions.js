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

export const receiveSessionErrors = (errors) => {
  return{
    type: "RECEIVE_SESSION_ERRORS",
    errors: errors
  }
};

export const clearSessionErrors = () => {
  return{
    type: "CLEAR_SESSION_ERRORS"
  }
};

export const getVotes = () => {
  return {
    type: "GET_VOTES"
  }
};

export const receiveVotes = (votes) => {
  return {
    type: "RECEIVE_VOTES",
    votes: votes
  }
};
