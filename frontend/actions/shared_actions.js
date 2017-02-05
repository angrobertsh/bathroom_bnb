export const upvote = (vote) => {
  return{
    type: "UPVOTE",
    vote: vote
  }
}

export const editUpvote = (vote) => {
  return{
    type: "EDIT_UPVOTE",
    vote: vote
  }
}

export const receiveErrors = (errors) => {
  return{
    type: "RECEIVE_ERRORS",
    errors: errors
  }
}
