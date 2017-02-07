export const login = (user) => ({
    type: "LOGIN",
    user: user
});

export const logout = () => ({
    type: "LOGOUT"
});

export const signup = (user) => ({
    type: "SIGNUP",
    user: user
});

export const receiveCurrentUser = (user) => ({
    type: "RECEIVE_CURRENT_USER",
    user: user
});

export const receiveSessionErrors = (errors) => ({
    type: "RECEIVE_SESSION_ERRORS",
    errors: errors
});

export const clearSessionErrors = () => ({
    type: "CLEAR_SESSION_ERRORS"
});

export const getVotes = () => ({
    type: "GET_VOTES"
});

export const receiveVotes = (votes) => ({
    type: "RECEIVE_VOTES",
    votes: votes
});
